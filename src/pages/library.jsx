import React, {useState, useEffect} from 'react';
import DataTable from '../components/tables/library_table.jsx';
import axios from 'axios'

function Books() {
    const [books, setBooks] = useState(false);
    const [data, setData] = useState('');
    useEffect(() => {
        getBooks();
    }, []);

    function getBooks() {
        axios
            .get("api/books")
            .then(data => setBooks(data.data))
            .catch(error => console.error(error));
    };


    function createBoardgame() {
        let title = prompt('Enter book title');
        let genre = prompt('Enter book genre');
        let read = prompt('Have you read this book?');

        fetch('https://markbrowndev.com/api/boardgames', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title, genre, read}),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getBooks();
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
                getBooks();
            });
    }
    return (

        <div>
            <h1>Books</h1>
            <DataTable data={books} />
        </div>

    );
}
export default Books;

// <br />
// <button onClick={createBoardgame}>Add boardgames</button>
// <br />
// <button onClick={deleteMerchant}>Delete boardgames</button>