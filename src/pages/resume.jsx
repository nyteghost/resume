import React, { Component } from 'react'
import Container from '@mui/material/Container';
import CssBaseline from "@mui/material/CssBaseline";

function About() {
    return(
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <h1>About</h1>
                <br />
                <div>Hello</div>
                <br />
            </Container>
        </>
    )
}
function Experience() {
    return(
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <h1>Experience</h1>
                <br />
                <div>Hello</div>
                <br />
            </Container>
        </>
    )
}
function Education() {
    return(
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <h1>Education</h1>
                <br />
                <div>Hello</div>
                <br />
            </Container>
        </>
    )
}
export default class Resume extends Component {


    render() {
        return (
            <>
                <div className="App"
                     style={{
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center',
                     }}>
                    <About></About >
                </div>
                <div className="App"
                     style={{
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center',
                     }}>
                    <Experience></Experience>
                </div>
                <div className="App"
                     style={{
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center',
                     }}>
                    <Education></Education>
                </div>
            </>
        )
     console.log("resume");
    }
}