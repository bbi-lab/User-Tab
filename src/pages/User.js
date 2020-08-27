import React from "react";
import Home from ".";
import { render } from "react-dom";
import '../containers/App.css';
import { Link } from "gatsby";
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
const ID = "AoYisZ";
var Info1;
var Info2;
var projectID = 0;


let Pasta = "";
const url1 = "https://sheets.googleapis.com/v4/spreadsheets/1dzuXRu33dQQWQOpTRQK-9AW9Zk-i69ChRyLAU8l2CxE/values/A3:C?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0";
const url2 = "https://sheets.googleapis.com/v4/spreadsheets/1dzuXRu33dQQWQOpTRQK-9AW9Zk-i69ChRyLAU8l2CxE/values/Sample%20Tracking!A4:AH?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0";



/*export default class RawrXD extends React.Component {
    state =  {
       UserID: "weee"
    }

    uh = () => {
        return(<div>aaaaaa</div>);
    }

    please = () => {*/

      function aaaa() {
  
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
      }

    export default function uwu(){
      //console.log(this.props.location.state.uh);
      return (
        <div className= "container" id = "Sauce">
          {aaaa()}
          <div id = "Links">

          </div>
            <Link to = "/">Back to Search</Link>
        </div>
        
    );
    }
  

    /*class EmailPage extends React.Component {
     
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


