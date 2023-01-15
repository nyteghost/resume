import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Button from '@mui/material/Button';
import { useState, useRef} from "react";
import Box from '@mui/material/Box'
import { TextField } from '@mui/material';
import { inputLabelClasses } from "@mui/material/InputLabel";
import {fetchdata} from "../components/apis/pokemonAPI";

const  SearchAssetLoc = (props) => {
    const assetIDRef = useRef();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [Data, setData] = useState('');
    const [assetID, setAssetID] = useState('');
    const [pokeImg, setPokeImg] = useState('');
    const parentToChild = props => {
        var i;
        if (!i){setData(props);
        } else if (i === props){
            setData('');
            let i = props
        }
    }

    function printKeys(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                console.log(key + " -> " + obj[key]);
            }
        }
    }

    function PokeImage(obj){
        try {
            if (obj.sprites.front_default) {
                setPokeImg(obj.sprites.front_default)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const assetNumberHandleChange = (event) => {
        setAssetID(event.target.value)
    };

    const onSubmit = data => {
        setIsLoading(true);
        data = assetIDRef.current.value;
        parentToChild(data);
        setIsLoading(false)
        fetchdata(data).then(r => setData(r))
        PokeImage(Data)
    }
    const onDown = data => {
        setIsLoading(true);
        data = assetIDRef.current.value;
        parentToChild(data);
        setIsLoading(false)
        fetchdata(data).then(r => setData(r))
        PokeImage(Data)
    }

    return (
        <>
            <Box sx={{
                margin: 4,
                border: '1px'
            }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ErrorMessage errors={errors} name="singleErrorInput" />
                    <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="Pokemon Name"
                        variant="filled"
                        inputRef={assetIDRef}
                        inputProps={{
                            style:{
                                padding: '10px 15px',
                            }
                        }}
                        InputLabelProps={{
                            sx: { marginTop: -.8,
                                // set the color of the label when not shrinked
                                color: "",
                                [`&.${inputLabelClasses.shrink}`]: {
                                    // set the color of the label when shrinked (usually when the TextField is focused)
                                    color: "orange",
                                    marginTop: -3
                                }
                            }
                        }}
                    />
                    <Box textAlign='center'>
                        <Button size="small" type="submit" color="primary" variant="round" disabled={isLoading} onMouseDown={()=>{onDown()}}>
                            Submit
                        </Button>
                    </Box>
                </form>

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
                { Data ? Data.name : null }
                <br />
                { Data ? console.log(Data) : null }
                { pokeImg ? <img src = {pokeImg}
                                 alt="pokemon"
                                 width="250"
                                 height="250"
                /> : null }
            </Box>
        </>
    );
}

export default SearchAssetLoc;