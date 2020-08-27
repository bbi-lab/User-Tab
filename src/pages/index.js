import React from "react";
import { Link } from "gatsby";
import history from "./history";
import {Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import imgUrl from "../pictures/marqueeHome.jpg"
import '../containers/App.css'
import { render } from "react-dom";

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

var Pasta = "";
const url1 = "https://sheets.googleapis.com/v4/spreadsheets/1dzuXRu33dQQWQOpTRQK-9AW9Zk-i69ChRyLAU8l2CxE/values/A3:C?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0";
const url2 = "https://sheets.googleapis.com/v4/spreadsheets/1dzuXRu33dQQWQOpTRQK-9AW9Zk-i69ChRyLAU8l2CxE/values/Sample%20Tracking!A4:AH?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0";


function aaaa(ID) {
  
  http.open("GET", url1);
  http.send();
  http.onload = function () {
    if (http.status === 200) {

      Info1 = JSON.parse(http.responseText);


      for (var i = 0; i < Info1.values.length; i++) {
        if (Info1.values[i][1] === ID) {
          projectID = Info1.values[i][2];
          break;
        }
      }
      //console.log(projectID);
      
    }
    htttp.open("GET", url2);
    htttp.send();
    
    htttp.onload = function () {
      
    console.log("Status: " + htttp.status);
      if (htttp.status === 200) {

        Info2 = JSON.parse(htttp.responseText);
        console.log("ProjectID = " + projectID);
        if (projectID == 0) {
          document.getElementById("Sauce").innerHTML = " This User ID does not exist ";
          //document.getElementById("Waa").innerHTML = "WALUIGI";
          
          //localStorage.setItem("storage", "NO");
          //Pasta = "This User ID does not exist";
        }
        else {
          for (var i = 0; i < Info2.values.length; i++) {
            if (Info2.values[i][0] === projectID) {
              Pasta += "<p>" + "Internal ID: " + Info2.values[i][2] + "</p>";
            }
          }
          document.getElementById("Sauce").innerHTML = Pasta;
          
        //localStorage.setItem("storage", Pasta);
        }
      }
    }
  }
  //console.log(Pasta);
  //return(localStorage.getItem("storage"));
}

function bbbb(ID) {
  http.open("GET", url1);
  http.send();

  let pleasseee = "i wanna die";
  console.log("1: " + pleasseee);
  function uhhhh() {
    pleasseee = "im currently dying";
    localStorage.setItem("storageName", pleasseee);
    console.log("2: " +pleasseee);
  }
  uhhhh();

  console.log("3: " +  pleasseee);
  return(localStorage.getItem("storageName"));

  //return(pleasseee);
  /*http.open("GET", url1);
  http.send();

  http.onload = function () {
    if (http.status === 200) {

      Info1 = JSON.parse(http.responseText);


      for (var i = 0; i < Info1.values.length; i++) {
        if (Info1.values[i][1] === ID) {
          projectID = Info1.values[i][2];
          break;
        }
      }
      console.log(projectID);
      return(<p>uh</p>);
      
    }
    htttp.open("GET", url2);
    htttp.send();
    htttp.onload = function () {
      if (htttp.status === 200) {

        Info2 = JSON.parse(htttp.responseText);
        if (projectID == 0) {
          document.getElementById("Sauce").innerHTML = "<div> This User ID does not exist ";
          //document.getElementById("Waa").innerHTML = "WALUIGI";
          return;
        }
        else {
          for (var i = 0; i < Info2.values.length; i++) {
            if (Info2.values[i][0] === projectID) {
              Pasta += "<p>" + "Internal ID: " + Info2.values[i][2] + "</p>";
            }
          }
          document.getElementById("Sauce").innerHTML = Pasta;
        }
      }
    }
  }*/
}


export default function Home() {
  return (
    <div  className = "container"  id= "Sauce">
      <Router history={history}>
        <Switch>
          <Route path="/" component={IndexPage} />
        </Switch>
      </Router>
      <Link to="/ForgotUser"> Forgot your User ID? </Link>
    </div>
  );
}


class User extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      ID: this.props.uh,
      fin: " "
    }
  }
  
  render(){
    return(this.state.fin);
  }
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
        //aaaa(this.state.UserID);
      //history.push('/User/');
       //console.log("4: " + aaaa(this.state.UserID));
      this.props.history.push({
        pathname: '/User',
        state: { uh: this.state.UserID }
      });
      }
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
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
              <Button type="submit">Submit</Button>
            </Title>
          </form>
        )
      }
    }
