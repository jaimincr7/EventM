import { Container, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'name', headerName: 'Name' },
    { field: 'type', headerName: 'Event Type' },
    { field: 'start_date', headerName: 'Start Date', width: 190  },
    { field: 'end_date', headerName: 'End Date', width: 190  },
    {
        field: 'handled_by',
        headerName: 'Handled By'
    },
    {
        field: 'organisation',
        headerName: 'Organisation', width: 170
    },
    {
        field: 'total_sub_events',
        headerName: 'Total Sub Events',
        type: 'number', width: 170
        
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 270
    }
];


const AllEventModal = () => {
    const events = useSelector((state) => state.event.value);

    const getRowId = (row) => row.name; // Using the 'name' property as the unique id

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <Container
                    maxWidth="md"
                    className="text-center"
                    sx={{
                        border: '1px solid black',
                        padding: '15px',
                        marginTop: '10px',
                        borderRadius: '5px'
                    }}>
                    <label style={{ color: 'blue', fontWeight: 'bold' }}><Link to="/addEvent">Events</Link></label>(Go to Add Page)
                    <br />
                    <hr />
                    <DataGrid
                        rows={events}
                        columns={columns}
                        getRowId={getRowId}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </Container>
            </Box>
        </>
    )
}
export default AllEventModal;