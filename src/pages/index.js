import React from "react";
import { Link } from "gatsby";
import history from "./history";
import {Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import imgUrl from "../pictures/marqueeHome.jpg"
import '../containers/App.css'
import { render } from "react-dom";
import ReactDOM from 'react-dom';

const Button = styled.button`
padding: 0.4em;
margin: 0.5em;
color: ${props => props.inputColor || "white"};
background: #005587;
border: none;
border-radius: 4px;
font: 400 13px Arial;
min-width: 95px;
min-height: 10px;
`;

const Title = styled.p`
  font-size: 1.75em;
`;

const http = new XMLHttpRequest();
const htttp = new XMLHttpRequest();
var Info1;
var Info2;
var projectID = 0;
var qPCR = "";
var SeqDate = "";
var InDate = "";
var Pasta = "";
const url1 = "https://sheets.googleapis.com/v4/spreadsheets/1dzuXRu33dQQWQOpTRQK-9AW9Zk-i69ChRyLAU8l2CxE/values/A3:C?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0";
const url2 = "https://sheets.googleapis.com/v4/spreadsheets/1dzuXRu33dQQWQOpTRQK-9AW9Zk-i69ChRyLAU8l2CxE/values/Sample%20Tracking!A4:AH?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0";


function aaaa(ID) {
  
  http.open("GET", url1);
  http.send();
  http.onload = function () {
    if (http.status === 200) {

      Info1 = JSON.parse(http.responseText);
      projectID = 0;

      for (var i = 0; i < Info1.values.length; i++) {
        if (Info1.values[i][1] === ID) {
          projectID = Info1.values[i][2];
          break;
        }
      }
      
    }
    htttp.open("GET", url2);
    htttp.send();
    
    htttp.onload = function () {
      
    console.log("Status: " + htttp.status);
      Pasta = "";
      
      document.getElementById("Link").innerHTML = "";
      if (htttp.status === 200) {

        Info2 = JSON.parse(htttp.responseText);
        console.log("ProjectID = " + projectID);
        if (projectID == 0) {
          document.getElementById("Link").innerHTML = " This User ID does not exist ";
          return;
        }
        else {
          for (var i = 0; i < Info2.values.length; i++) {
            if (Info2.values[i][0] === projectID) {
              InDate = Info2.values[i][4] + "";
              if(InDate === "undefined")
              {
                InDate = "N/A";
              }
              qPCR = Info2.values[i][29] + "";
              if(qPCR === "undefined")
              {
                qPCR = "N/A";
              }
              SeqDate = Info2.values[i][30] + "";
              if(SeqDate === "undefined")
              {
                SeqDate = "N/A";
              }
              
              Pasta += "<u> "+ "<p>" + "Internal ID: " + Info2.values[i][2] +  "|        Intake Date: " + InDate + "|       qPCR pass/fail: " + qPCR + "|       Sequencing Start Date: " + SeqDate + "</p>"  + "</u>";
            }
          }
          document.getElementById("Link").innerHTML = Pasta;
          
       
        }
      }
    }
  }
  
}



export default function Home() {
  return (
    <div  className = "container"  id= "Sauce">
      <Router history={history}>
        <Switch>
          <Route path="/" component={IndexPage} />
        </Switch>
      </Router>
    </div>
  );
}



    class IndexPage extends React.Component {
      
      state = {
        UserID: ""

      }
      handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
      }
      
     handleSubmit = event => {
        event.preventDefault();
        aaaa(this.state.UserID);
        
      }
      
      
      
      render() {
        return (
          <div>
          <div >
          <form>
          <Title>
            <label >
              User ID:
            <input
                type="text"
                name="UserID"
                value={this.state.UserID}
                onChange={this.handleInputChange}
                style={{ width: "400px" }, { height: "20px" }, { margin: "0.5em" }}
              />
            </label>
            <Button onClick = {this.handleSubmit}>Submit</Button>
          </Title>
        </form>
        
        <Link to="/ForgotUser"> Forgot your User ID? </Link>
        <p></p>
        </div>
        <table><tbody id="Link"></tbody></table>
        </div>
        )
  }
}




