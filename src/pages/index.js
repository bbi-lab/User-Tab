import React, {useState, useEffect, Fragment} from "react";
import axios from 'axios'

const URL_PROJECT = "https://sheets.googleapis.com/v4/spreadsheets/1dzuXRu33dQQWQOpTRQK-9AW9Zk-i69ChRyLAU8l2CxE/values/A3:C?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0";
const URL_SAMPLE = "https://sheets.googleapis.com/v4/spreadsheets/1dzuXRu33dQQWQOpTRQK-9AW9Zk-i69ChRyLAU8l2CxE/values/Sample%20Tracking!A4:AH?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0";

// 1Snk2U
const clean = (value) => (value || "").toLowerCase().trim();
const sampleToHtml = (sample) => { 
  return (<tr>
    <td>{sample.investigator}</td>
    <td>{sample.intake}</td>
    <td>{sample.date}</td>
    <td>{sample.organism}</td>
    <td>{sample.type}</td>
  </tr>)
}

const Main = () => { 

  const [investigatorId, setInvestigatorId] = useState("");
  const [projects, setProjects] = useState([]);
  const [myProjects, setMyProjects] = useState([]);
  
  // Fires When User Id Changes
  useEffect(() => { 
    setMyProjects(projects.filter(v => v.investigatorId === investigatorId));
  }, [investigatorId]);

  // Load Data This Only Happens Once
  useEffect(() => {

    // Load All Data In The Array Below
    axios.all([
      axios.get(URL_PROJECT),
      axios.get(URL_SAMPLE)
    ]).then(result => { 

      // Function To Clean Up Inputs (Remove White Space + LowerCase)
      
      // Turn Arrays Into Objects to Make Them Easier To Reason About
      const samples = result[1].data.values
      .filter(v => v.length < 9)
      .map(v => v.map(clean))
      .map(sample => ({ 
        projectId: sample[0],
        investigator: sample[1],
        internalId: sample[2],
        investigatorId: sample[3],
        intake: sample[4],
        date: sample[5],
        organism: sample[6],
        tissue: sample[7],
        type: sample[8]
      }));

      // Turn Arrays Into Objects to Make Them Easier To Reason About
      // Next Samples In Projects To Make Them Easier To Work With
      const projects = result[0].data.values
      .filter(v => v.length === 3)
      .map(v => v.map(clean))
      .map(project => ({
        projectId: project[0],
        investigatorId: project[1],
        internalId: project[2],
        samples: samples.filter(sample => sample.internalId  === project[2])
      } ));

     // Save Projects Between Render Calls
     setProjects(projects);
     
    });
  },[]);



  return ( 
        <Fragment>
          <label>
            User ID:
            <input
              value={investigatorId}
              onChange={e => { setInvestigatorId("" || e.target.value.trim())}}
              type="text" />
          </label>
          <table style={{visibilty:(myProjects.length>0) ? "visible" : "hidden"}}>
            <thead>
              <th>investigator</th>
            </thead>
          {
            myProjects.map(project => {
              project.samples.map(sample => sampleToHtml(sample))
            }
            )
          }
          </table>
          </Fragment>
        ); 
  } 
  
export default Main;