import React, {useState, useEffect, Component} from 'react';
import Boardgame from './boardgames.jsx';
import Books from './library.jsx';
export default class Databases extends Component {

    render() {
        return (
            <>
                <Boardgame />
                <Books />
            </>
        )
    }
}