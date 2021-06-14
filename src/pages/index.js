import React, {useState, useEffect, Fragment} from "react";
import axios from 'axios';
import button from 'gatsby';
//import styled, { css } from 'styled-components';
//import Banner from "../pictures/marqueeHome.png";
import '../containers/App.css';

const URL_PROJECT = "https://sheets.googleapis.com/v4/spreadsheets/1SCGoWHfYlREo6rcirZlnEvbT8WN-gRFBldRLvku1CKg/values/A3:C?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0";
const URL_SAMPLE = "https://sheets.googleapis.com/v4/spreadsheets/1SCGoWHfYlREo6rcirZlnEvbT8WN-gRFBldRLvku1CKg/values/Sample%20Tracking!A3:AH?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0";


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


const Main = () => { 

  const [check, setCheck] = useState(false);
  const [userID, setUserID] = useState("");
  const [projects, setProjects] = useState([]);
  const [myProjects, setMyProjects] = useState([]);
  
  // Fires When User Id Changes
  useEffect(() => { 
    setMyProjects(projects.filter(v => v.UserId === userID));
    setCheck(false);
  }, [userID]);


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
      .map(v => v.map(clean))
      .map(sample => ({ 
        projectId: sample[0],
        investigator: sample[1],
        internalId: sample[2],
        investigatorId: sample[3],
        intakeDate: sample[4],
        qPCR: sample[29],
        seqDate: sample[16]
      }));

      //
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
     setProjects(projects);
     
     
    });
  },[]);
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
          <button onClick = {() => {setCheck(true);}}>submit</button>
          
      <p/>
      <div className = {(check && !(myProjects.length > 0))? "seeker2" : "hider"}>
        This user name does not exist
        <p>
          If user is forgotten email: skyhelp@
        </p>
      </div>
        <table className={(check && (myProjects.length > 0)) ? "seeker1" : "hider"}>
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
 
export default Main;