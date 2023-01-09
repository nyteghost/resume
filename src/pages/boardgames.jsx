import React, {useState, useEffect} from 'react';
import DataTable from './tables/boardgame_table.jsx';
import axios from 'axios'

function Boardgame() {
    const [boardgames, setBoardgames] = useState(false);
    const [data, setData] = useState('');
    useEffect(() => {
        getBoardgames();
    }, []);

    function getBoardgames() {
        axios
            .get("api/boardgames")
            .then(data => setBoardgames(data.data))
            .catch(error => console.error(error));
    };


    function createBoardgame() {
        let title = prompt('Enter board game title');
        let genre = prompt('Enter board game genre');
        let played = prompt('Enter board game title');
        let rating = prompt('Enter board game genre');
        let campaign = prompt('Enter board game genre');
        fetch('https://markbrowndev.com/api/boardgames', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title, genre, played, rating, campaign}),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getBoardgames();
            });
    }
    function deleteMerchant() {
        let id = prompt('Enter merchant id');
        fetch(`http://localhost:8080/api/boardgames/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getBoardgames();
            });
    }
    return (

                <div>
                    <h1>Boardgames</h1>
                    <DataTable data={boardgames} />
                </div>

    );
}
export default Boardgame;

// <br />
// <button onClick={createBoardgame}>Add boardgames</button>
// <br />
// <button onClick={deleteMerchant}>Delete boardgames</button>