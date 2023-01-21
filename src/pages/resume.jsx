import React, { Component } from 'react'
import Container from '@mui/material/Container';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

const Data = require('../components/jsonresume.json');
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
            <Box maxWidth="sm">

            </Box>
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
export default class ResumeDeploy extends Component {


    render() {
        return (
            <>


            </>
        )
     console.log("resume");
    }
}