import React, {useState, useEffect, Component} from 'react';
import Boardgame from './boardgames.jsx';
import Books from './library.jsx';
import embedPage from "../components/embedPage";
import ReactEmbedGist from "react-embed-gist";
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";


const Collapse = ({ collapsed, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);

    return (
        <>
            <Container>
                <button
                    className="collapse-button"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    {isCollapsed ? 'Hide' : 'Show'} python gist
                </button>
                <div
                    className={`collapse-content ${!isCollapsed ? 'collapsed' : 'expanded'}`}
                    aria-expanded={isCollapsed}
                >
                    {children}
                </div>
            </Container>
        </>
    );
};

export default class Databases extends Component {

    render() {
        return (
            <>
                <Container>
                    <div>Database is hosted through Heroku</div>
                    <div>Click button below button for gist on how I use python to make changes to the postgres database.</div>

                <Collapse>
                    <ReactEmbedGist
                        gist="nyteghost/c915dc12b0da72b342519102fa8d963c"
                        wrapperClass="gist__bash"
                        loadingClass="loading__screen"
                        titleClass="gist__title"
                        errorClass="gist__error"
                        contentClass="gist__content"
                    />
                </Collapse>


                <Boardgame />
                <Books />
                </Container>
            </>
        )
    }
}