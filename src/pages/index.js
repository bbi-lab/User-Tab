import React from "react";
import { Link } from "gatsby";
import history from "./history";
import {Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import imgUrl from "../pictures/marqueeHome.jpg"
import '../containers/App.css'
import { render } from "react-dom";
import User from "./User";
import ReactDOM from 'react-dom';
var qPCR = "";
var SeqDate = "";
var InDate = "";

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
var ID = "asfg";
var WasteBasket;

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
      //console.log(projectID);
      
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
          WasteBasket = document.getElementById("Link").innerHTML += " This User ID does not exist ";
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
          document.getElementById("Link").innerHTML = Pasta;
          
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
          <Route path="/:UserID" component={User} />
        </Switch>
      </Router>
    </div>
  );
}

class uh extends React.Component{
  render() {
    return (
      <div>
          okay
      </div>
    );
  }
}

class PLease extends React.Component{
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

function getProj(IDID, stat, res){
  
  var porpoise = 0;
  if (stat === 200) {
    Info1 = JSON.parse(res);


    for (var i = 0; i < Info1.values.length; i++) {
      if (Info1.values[i][1] === IDID) {
        porpoise = Info1.values[i][2];
        break;
      }
    }
    //console.log(projectID);
    
  }
return porpoise;
}


function mainFunction(IDID){
 return("IDID");
}

    class IndexPage extends React.Component {
      
      state = {
        UserID: "",
        isHide: false

      }
      handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
          isHide: false
        })
      }
      
     handleSubmit = event => {
        event.preventDefault();
        this.setState({
          isHide: true
        })
        console.log("current state " + this.state.UserID);
        aaaa(this.state.UserID);
        //aaaa(this.state.UserID);
      //history.push('/User/');
       //console.log("4: " + aaaa(this.state.UserID));
      /*sthis.props.history.push({
        pathname: 'Weee',
        state: { uh: this.state.UserID }
      });onClick={this.handleSubmit}*/
      }
      resetH(){
        this.setState({
          isHide:false
        })
      }
      
      
      
      render() {
        return (
          <div>
          <div >
            {this.resetH}
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
        {console.log("" + this.state.isHide)}
        
        <Link to="/ForgotUser"> Forgot your User ID? </Link>
        <p></p>
        </div>
        <div id= "Link">
        </div>
        </div>
        )
  }
}

/*Entered = () =>{
  http.open("GET", url1);
  http.send();

  http.onload = function () {
    if (http.status === 200) {

      Info1 = JSON.parse(http.responseText);


      for (var i = 0; i < Info1.values.length; i++) {
        if (Info1.values[i][1] === this.state.UserID) {
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
}*/

function showOne(){
  return(
    <form >
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
        <Link to="/User"><Button type="submit" >Submit</Button></Link>
      </Title>
    </form >
  );
}
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
      <div>
      <div id = "Links">
          {this.GetPID("XSVAeL")}
      </div>
      <Link to = "/">Back Home</Link>
      </div>
    );
  }
}
