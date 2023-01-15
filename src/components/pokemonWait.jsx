import Box from "@mui/material/Box";
import { useState, useRef} from "react";
import SearchAssetLoc from "../pages/pokedex";
const  TestStuff = (Data) => {
    function PokeImage(obj){
        try {
            if (obj.sprites.front_default) {
                return obj.sprites.front_default
            }
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                { Data ? Data.name : null }
            </Box>

            <Box
                sx ={{
                    marginX: 70,
                    marginY: 0,
                    border: '1px'
                    }}
                bgcolor="lightgreen"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <br />
                { Data ? console.log(Data.Data) : null }
                { Data ? <img src = {PokeImage(Data.Data)}
                                 alt="pokemon"
                                 width="250"
                                 height="250"
                /> : null }

            </Box>

        </>
    )
};

export default TestStuff;