import StageDeck from "../components/stageSetup/stageBuild";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import {Box} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const BlankMan = () => {
    return(
    <StageDeck props={{orientation: "horizontal",
        color: "lightgreen"}} />)
}
const  StageComp = () => {
  let test = {
      orientation: "vertical",
      color: "lightgreen"

  }
    return (
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center">
                <Stack spacing={2}>
                    <item>
                        <StageDeck props={{orientation: "horizontal",
                                        color: "lightgreen"}} />
                    </item>
                    <item>
                        <StageDeck props={{orientation: "horizontal",
                            color: "white"}} />
                    </item>
                </Stack>
                <div>|</div>
                <Stack spacing={2}>
                    <item>
                        <StageDeck props={{orientation: "horizontal",
                            color: "lightgreen"}} />
                    </item>
                    <item>
                        <StageDeck props={{orientation: "horizontal",
                            color: "white"}} />
                    </item>
                </Stack>
            </Box>
        </>
      </ThemeProvider>

  )
};

export default StageComp;