import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const checkHealthReducer = (state, action) => {
    switch (action.type) {
        case "INIT":
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case "SUCCESS":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            }
        case "FAILURE":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            throw new Error()
    }
}
function App() {
    const [checkHealth, setCheckHealth] = useState(false)
    const [state, dispatch] = useReducer(checkHealthReducer, {
        isLoading: false,
        isError: false,
        data: {"status":""}
    })
    useEffect(() => {
        const callCheckHealth = async () => {
            dispatch({
                type: "INIT"
            })
            try {
                const url = "/api/checkHealth"
                const headers = {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
                const res = await axios(url)
                console.log("Health status from backend---",res.data)
                dispatch({
                    type: 'SUCCESS',
                    payload: res.data
                })
                setCheckHealth(false)
            }
            catch (err) {
                dispatch({
                    type: 'FAILURE'
                })
            }

        }
        if (checkHealth) {
            callCheckHealth()
        }

    }, [checkHealth])

    const handleCheckHealthButton = () =>{
        setCheckHealth(true)
    }
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <button onClick={handleCheckHealthButton}>Check Health</button>
                <br />
                Health status : {state.data.status}
                <br />
                Pool status : {state.data.pool_status}
            </Container>
        </>
    );
}


export default App;