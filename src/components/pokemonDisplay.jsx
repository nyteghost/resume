import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const  PokeDisplay = (Data) => {

    function UpperCase(obj){
        try {
            const capitalized =
                obj.charAt(0).toUpperCase()
                + obj.slice(1)
            return capitalized
        } catch (e) {

        }
    }

    function PokeImage(obj){
        try {
            if (obj.sprites.front_default) {
                return obj.sprites.front_default
            }
        } catch (e) {

        }
    }

    function PokeAbility(obj){
        try {
            if (obj.abilities) {
                return obj.abilities.map((ability) => {
                    return <li key = {ability.ability.name}>{UpperCase(ability.ability.name)}</li>
                }   )
            }
        } catch (e) {

        }
    }

    return (
        <>
        { Data ? console.log(Data.Data) : null }
        <Container>
                <Stack>
                    <Item>{ Data ? UpperCase(Data.Data.name) : null }</Item>
                    <Item>{ Data ? <img src = {PokeImage(Data.Data)}
                                        alt="pokemon"
                                        width="250"
                                        height="250"
                                    /> : null }
                    </Item>



                    <Item>
                        Abilities:  { Data ? PokeAbility(Data.Data) : null }
                    </Item>
                </Stack>

        </Container>
        </>
    )
};

export default PokeDisplay;