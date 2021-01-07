import React, {useState, useEffect, Fragment} from "react";
//import Button from 'react-bootstrap/Button'
import axios from 'axios';
import button from 'gatsby';

const URL_PROJECT = "https://sheets.googleapis.com/v4/spreadsheets/1dzuXRu33dQQWQOpTRQK-9AW9Zk-i69ChRyLAU8l2CxE/values/A3:C?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0";
const URL_SAMPLE = "https://sheets.googleapis.com/v4/spreadsheets/1dzuXRu33dQQWQOpTRQK-9AW9Zk-i69ChRyLAU8l2CxE/values/Sample%20Tracking!A3:AH?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0";

// 1Snk2U
/*const Button = styled.button`
padding: 0.4em;
margin: 0.5em;
color: ${props => props.inputColor || "white"};
background: #005587;
border: none;
border-radius: 4px;
font: 400 13px Arial;
min-width: 95px;
min-height: 10px;
`;*/

const clean = (value) => (value || "").trim();
const sampleToHtml = (sample) => { 
  console.log(sample)
  return (<tr className = "boarder">
    <td className = "boarder">{sample.projectId}</td>
    <td className = "boarder">{sample.investigator}</td>
    <td className = "boarder">{sample.internalId}</td>
    <td className = "boarder">{sample.investigatorId}</td>
    <td className = "boarder">{sample.intakeDate}</td>
    <td className = "boarder">{sample.qPCR}</td>
    <td className = "boarder">{sample.seqDate}</td>
  </tr>)
}
const errorHtml = (sample) =>{
  console.log(sample);
  return(
    <p>This UserID does not exist</p>
  )
}

const Main = () => { 

  const [check, setCheck] = useState(false);
  const [userID, setUserID] = useState("");
  const [projects, setProjects] = useState([]);
  const [myProjects, setMyProjects] = useState([]);
  
  // Fires When User Id Changes
  useEffect(() => { 
    setMyProjects(projects.filter(v => v.UserId === userID));
    {
      if(myProjects.length > 0){
        setCheck(!check);
      }
    }
  }, [userID]);

  /*useEffect(() => {
    clicked(buttonPress => !buttonPress);
    console.log(buttonPress);
  }, [])*/

  // Load Data This Only Happens Once
  useEffect(() => {

    // Load All Data In The Array Below
    axios.all([
      axios.get(URL_PROJECT),
      axios.get(URL_SAMPLE)
    ]).then(result => { 

      // Function To Clean Up Inputs (Remove White Space + LowerCase)
      /*
      */
      // Turn Arrays Into Objects to Make Them Easier To Reason About
      const samples = result[1].data.values
      .map(v => v.map(clean))
      .map(sample => ({ 
        projectId: sample[0],
        investigator: sample[1],
        internalId: sample[2],
        investigatorId: sample[3],
        intakeDate: sample[4],
        //date: sample[5],
        qPCR: sample[29],
        //tissue: sample[7],
        seqDate: sample[16]
      }));

      
      // Turn Arrays Into Objects to Make Them Easier To Reason About
      // Next Samples In Projects To Make Them Easier To Work With
      const projects = result[0].data.values
      .filter(v => v.length === 3)
      .map(v => v.map(clean))
      .map(project => ({
        projectId: project[2],
        investigatorId: project[3],
        UserId: project[1],
        samples: samples.filter(sample => (sample.projectId  === project[2])),
      } ));

     // Save Projects Between Render Calls
     //console.log(projects);  e=> clicked(buttonPress => !buttonPress)
     setProjects(projects);
     
     
    });
  },[]);
//(myProjects.length > 0)
  return ( 
        <Fragment>
          <div className = "container">
          <label>
            User ID:
            <input
              value={userID}
              onChange={e => { setUserID("" || e.target.value.trim())}}
              type="text" />
              
          </label>
          <button onClick = {console.log("wow")}>submit</button>
          
      <p/>
        <table className={(myProjects.length > 0) ? "seeker" : "hider"}>
          <tbody>
          <tr className = "boarder">
            <td className = "boarder">Project ID </td>
            <td className = "boarder">Investigator </td>
            <td className = "boarder">Internal ID </td>
            <td className = "boarder">Investigator ID </td>
            <td className = "boarder">Intake Date </td>
            <td className = "boarder">qPCR Results </td>
            <td className = "boarder">Sequencing Date </td>
          </tr>
          {myProjects.map(project => {
            return(project.samples.map(sample => {return(sampleToHtml(sample))}))
          }
          )
           
         }
         
         </tbody>
        </table>
        
      </div>
    </Fragment>
        ); 
  } 
 //(myProjects.length > 0  <button onClick={setCheck(!check)} >Submit</button>
 /*const useToggle = (initialState) => {
    const [isToggled, setIsToggled] = React.useState(initialState);
  
    // put [setIsToggled] into the useCallback's dependencies array
    // this value never changes so the callback is not going to be ever re-created
    const toggle = React.useCallback(
      () => setIsToggled(state => !state),
      [setIsToggled],
    );
  
    return [isToggled, toggle];
  }
  const [isToggled, toggle] = useToggle(false);*/
export default Main;