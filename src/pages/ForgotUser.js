import React from "react";
import { Link } from "gatsby";
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Banner from "../pictures/marqueeHome.png";
import '../containers/App.css';

const http = new XMLHttpRequest();
const male = "lilukmartin@gmail.com";
var Info1;
var Pasta = "";
const url1 = "https://sheets.googleapis.com/v4/spreadsheets/1dzuXRu33dQQWQOpTRQK-9AW9Zk-i69ChRyLAU8l2CxE/values/A3:C?key=AIzaSyAbtv9bc79V3WksFnhqpp0jlcHzlfxopF0";

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

http.open("GET", url1);
http.send();

http.onload = function () {
    if (http.status === 200) {

        Info1 = JSON.parse(http.responseText);

        //console.log(Info1.values.length);

        for (var i = 0; i < Info1.values.length; i++) {
            if (Info1.values[i][0] === male) {
                Pasta += "<p>" + Info1.values[i][1] + "<p/>";
                //console.log(Pasta);
            }
        }
    }
}

export default function Home() {
    return (
        <div className= "container" id="Saws">
            <p><EmailPage /></p>
            <Link to="/"> Remember your User ID? </Link>
        </div>
    );
}

class EmailPage extends React.Component {
    state = {
        EmailPage: ""
    }
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const email = target.name
        this.setState({
            [email]: value,
        })
    }
    handleSubmit = event => {

        event.preventDefault()
        alert(`Welcome ${this.state.email}`)
        if (http.status === 200) {

            Info1 = JSON.parse(http.responseText)

            //console.log(Info1.values.length);

            for (var i = 0; i < Info1.values.length; i++) {
                if (Info1.values[i][0] === this.state.Email) {
                    Pasta += "<p>" + Info1.values[i][1] + "<p/>"
                    //console.log(Pasta)
                }
            }
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Title>
                <label>
                    Enter your email:
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        style={{width: "400px"}, {height: "20px"}, {margin: "0.5em"}}
                    />
                </label>
                <Button type="submit">Submit</Button>
                </Title>
            </form>
        );
    }
}