import React from "react";
import Home from ".";
import { render } from "react-dom";
import '../containers/App.css';
import history from "./history";
import { Link } from "gatsby";
import {Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import ReactDOM from 'react-dom';
/*//import Header from "../components/help";
import { Link } from "gatsby";
import User from "/User";
//import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import Banner from "../pictures/Banner.png"
import Helmet from 'react-helmet';*/

//import { render } from "react-dom";

const http = new XMLHttpRequest();
const htttp = new XMLHttpRequest();
//const ID = "XSVAeL";
var Info1;
var Info2;
var projectID = 0;
var qPCR = "";
var SeqDate = "";
var InDate = "";


let Pasta = "";
const url1 = "https://sheets.googleapis.com/v4/spreadsheets/1AStHu2AlVsYJD6se6ioIheHkibj-Eauh3UjePHlQrFM/values/A3:C?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0";
const url2 = "https://sheets.googleapis.com/v4/spreadsheets/1AStHu2AlVsYJD6se6ioIheHkibj-Eauh3UjePHlQrFM/values/Sample%20Tracking!A4:AH?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0";




/*export default class RawrXD extends React.Component {
    state =  {
       UserID: "weee"
    }

    uh = () => {
        return(<div>aaaaaa</div>);
    }

    please = () => {*/
      function test()
      {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve('Hello asynchronous world!');
          }, 0);
        });
        //let result = also();
        //console.log(result);
        //http.open('GET', "https://sheets.googleapis.com/v4/spreadsheets/1AStHu2AlVsYJD6se6ioIheHkibj-Eauh3UjePHlQrFM/values/A3:C?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0", true);
        //http.send();

        //http.addEventListener("readystatechange", processRequest, false);
        //var aaaa =
        //fetch("https://sheets.googleapis.com/v4/spreadsheets/1AStHu2AlVsYJD6se6ioIheHkibj-Eauh3UjePHlQrFM/values/A3:C?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0")
        //.then((response) => {
          //var In = JSON.parse(response);
          //response = response.json;
          //console.log(response.headers.values);
          //response.json().then((body) => console.log(body.values));
          //return(Promise.resolve(response.headers.get('values')));
        //})
        
        //console.log(Promise.resolve(aaaa));
        //console.log(aaaa.PromiseResult);

        //var response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/1AStHu2AlVsYJD6se6ioIheHkibj-Eauh3UjePHlQrFM/values/A3:C?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0");
        //var body = await response.json();
        //var aa = JSON.parse(body.responseText);
        
      }

      /*function also(){
        fetch("https://sheets.googleapis.com/v4/spreadsheets/1AStHu2AlVsYJD6se6ioIheHkibj-Eauh3UjePHlQrFM/values/A3:C?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0")
        .then((response) => {
          //var In = JSON.parse(response);
          //response = response.json;
          //console.log(response.headers.values);
          //response.json().then((body) => console.log(body.values));
          return(response.headers.get('Date'));
        })
      }*/
     
/*
      function getProjectID(IDs){
        
        
        http.open("GET", url1);
        http.send("null");
        http.onreadystatechange = function () {
          if (http.status === 200) {
      
            Info1 = JSON.parse(http.responseText);
      
      
            for (var i = 0; i < Info1.values.length; i++) {
              if (Info1.values[i][1] === IDs) {
                ProjectID = Info1.values[i][2];
                break;
              }
            }
          }
        }
        setTimeout(getRow(), 5000);
      }

      function getRow(){
        htttp.open("GET", url2);
          htttp.send();
          htttp.onreadystatechange = function () {
            if (htttp.status === 200) {
      
              Info2 = JSON.parse(htttp.responseText);
              if (ProjectID == 0) {
                Pasta = "This User ID Doesnt Exist."
                return;
              }
              else {
                for (var i = 0; i < Info2.values.length; i++) {
                  if (Info2.values[i][0] === ProjectID) {
                    Pasta +=  "Intake Date: " + Info2.Values[i][4] + "\n";
                  }
                }

                //localStorage.setItem("storage", "YES\n");"\n + "\nIntake Date: " + Info2.Values[i][4] + "\nqPCR pass/fail: " + Info2.Values[i][29] + "Sequencing Start Date: " + Info2.Values[i][30]
                //console.log(Pasta);
                ///var please = "WAaa"
                //return({please});
              }
            }
          }
          
          setTimeout(function(){console.log("wow? " + Pasta);}, 2000);
      }

      function Checker(){
        setTimeout(function(){console.log("sent: " + Pasta);}, 2000);
        return(Pasta);
      }*/

      /*function aaaa() {
  
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
            if (htttp.status === 200) {
      
              Info2 = JSON.parse(htttp.responseText);
              if (projectID == 0) {
                document.getElementById("Links").innerHTML = " This User ID does not exist ";
                //document.getElementById("Waa").innerHTML = "WALUIGI";
                //return("This User ID doesn't exist");
                //localStorage.setItem("storage", "NO");
                return;
              }
              else {
                for (var i = 0; i < Info2.values.length; i++) {
                  if (Info2.values[i][0] === projectID) {
                    Pasta += "<p>" + "Internal ID: " + Info2.values[i][2] + "</p>";
                  }
                }
                document.getElementById("Links").innerHTML = Pasta;
                //localStorage.setItem("storage", "YES\n");
                //console.log(Pasta);
                ///var please = "WAaa"
                //return({please});
              }
            }
          }
        }
        //return(localStorage.getItem("storage"));
      }*/

export default function uwu() {
  //console.log(this.props.location.state.uh);
  return (
    <div className="container">
        <Router history={history}>
        <Switch>
          <Route path="/User" component={Weee} />
        </Switch>
      </Router>

      <Link to="/">Back to Search</Link>
    </div>

    );
  }
/*
  class uh extends React.Component{
    render() {
      return (
        <div>
            okay
        </div>
      );
    }
  }*/
  

class Weee extends React.Component{
  state = {
    UserID: ""
  }
  componentDidMount() {
    this.renderPosts();
  }
  renderPosts = async() => {
    this.setState({
      UserID: "o"
    })
  }

  GetPID(ID){
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
            if (htttp.status === 200) {
              console.log(projectID);
              Info2 = JSON.parse(htttp.responseText);
              if (projectID == 0) {
                document.getElementById("Links").innerHTML = " This User ID does not exist ";
                //document.getElementById("Waa").innerHTML = "WALUIGI";
                //return("This User ID doesn't exist");
                //localStorage.setItem("storage", "NO");
                return;
              }
              else {
                for (var i = 0; i < Info2.values.length; i++) {
                  if (Info2.values[i][0] === projectID) {
                    //console.log(typeof Info2.values[i][0]);
                    InDate = toString(Info2.values[i][4]);
                    if(InDate == "[object Undefined]")
                    {
                      InDate = "Sample has not arrived yet.";
                    }
                    qPCR = toString(Info2.values[i][29]);
                    if(qPCR == "[object Undefined]")
                    {
                      qPCR = "Sample has not gone through qPCR testing.";
                    }
                    SeqDate = toString(Info2.values[i][30]);
                    if(SeqDate == "[object Undefined]")
                    {
                      SeqDate = "Sample has not been squenced.";
                    }
                    
                    Pasta += "<h1>" + "Internal ID: " + Info2.values[i][2] + "</h1>" + "<p>" + "  Intake Date: " + InDate + "</p>" + "  qPCR pass/fail: " + qPCR + "</p>" + "<p>" + "  Sequencing Start Date: " + SeqDate + "</p>";
                    //+ "<p>" + "  Intake Date: " + Info2.Values[uh][4] + "</p>" + "  qPCR pass/fail: " + Info2.Values[i][29] + "</p>" + "<p>" + "  Sequencing Start Date: " + Info2.Values[i][30] + "</p>"
                  }
                }
                document.getElementById("Links").innerHTML = Pasta;
                //localStorage.setItem("storage", "YES\n");
                //console.log(Pasta);
                ///var please = "WAaa"
                //return({please});
              }
            }
          }
        }
  }
  
  render() {
    return (
      <div id = "Links">
          {this.GetPID("XSVAeL")}
      </div>
    );
  }
}



    /*class EmailPage extends React.Component {
          {this.GetPID(this.state.UserID)}
     
      render() {
          return (
              <p>hi</p>
          );
      }
  }
       /* http.open("GET", url1);
  http.send();

  http.onload = function () {
    if (http.status === 200) {

      Info1 = JSON.parse(http.responseText);


      for (var i = 0; i < Info1.values.length; i++) {
        if (Info1.values[i][1] === ID) {
          projectID = Info1.values[i][2];
          break;
        }
      }console.log(projectID);
      console.log(projectID == 0);
      if(projectID == 0){
        //console.log("NO");
        
        //document.getElementById("Sauce").innerHTML = "Thissss User ID does not exist";
      }
    }
    htttp.open("GET", url2);
    htttp.send();
    //console.log(projectID);
    htttp.onload = function () {
      if (htttp.status === 200) {

        Info2 = JSON.parse(htttp.responseText);

        for (var i = 0; i < Info2.values.length; i++) {
          if (Info2.values[i][0] === projectID) {
            //console.log(Info2.values[i][1]);
            Pasta += "<p>" + "Internal ID: " + Info2.values[i][2] + "</p>";
          }
        }

        //console.log(Pasta);
        
        //document.getElementById("Sauce").innerHTML = Pasta;
          return(<div>aaaaaa</div>);
      }
    }
  }*/
//}
    /*}


    render() {
        return (
           this.uh
        );
    }

}*/



