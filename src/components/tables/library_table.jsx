import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'genre', headerName: 'Genre', width: 130 },
    { field: 'read', headerName: 'Read', width: 130 },

];


export default function DataTable(data) {
    console.log(typeof(data))
    return (
        <div style={{ height: 400, width: 'auto' }}>
            <DataGrid
                rows={data.data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}