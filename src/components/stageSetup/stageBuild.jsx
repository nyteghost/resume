import Box from "@mui/material/Box";
import { useState, useRef} from "react";

function DeckCount(child) {
    if (child.props.orientation === "vertical")
    {child.props.width = 400
    child.props.height = 200}
    else if (child.props.orientation === "horizontal")
        {child.props.width = 200
        child.props.height = 400}
    console.log(child.props)

    return (
        <>
            <Box
                sx={{ width: child.props.width,
                    height:  child.props.height}}
                bgcolor={child.props.color}>
            </Box>
        </>
    )
}
const  StageDeck = (child) => {
    return (
        <>
            {DeckCount(child)}
        </>
    )
};

export default StageDeck;