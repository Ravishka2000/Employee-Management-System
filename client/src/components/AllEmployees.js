import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

const AllEmployees = () => {

    const [employees, setEmployees] = useState([]);

    function getAllEmployees(){
        axios.get("http://localhost:8090/all-details")
        .then((res)=>{
            setEmployees(res.data.employees)
        })
        .catch((err)=>{
            console.error(err);
        })
    };

    useEffect(() => {
        getAllEmployees();
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
          axios
            .delete(`http://localhost:8090/delete/${id}`)
            .then((res) => {
              console.log(res.data.message);
              getAllEmployees();
            })
            .catch((err) => {
              console.error(err);
            });
        }
    };

    const [count, setCount] = useState();    

    useEffect(() => {
        async function getCount() {
            axios
              .get("http://localhost:8090/count")
              .then((res) => setCount(res.data.employeeCount))
              .catch(err => console.error(err));
        }
        getCount();
    },[])

    return (
        <>
            <Grid container spacing={2} marginY={5} >
                <Grid xs={6} xsOffset={3} md={4} mdOffset={4}>
                    <Card>
                        <CardContent>
                            <Typography align='center' fontWeight={1000} fontSize={28} fontFamily="serif">Total Employees</Typography>
                            <Typography align='center' fontWeight={1000} fontSize={26}>{count}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Typography variant='h3' align='center' mt={3}>ALL &nbsp; EMPLOYEES</Typography>
            <Divider/>
            <TableContainer component={Paper} sx={{my:5, maxWidth: "md", mx: "auto"}}>
                <Table size='medium' aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='center'>ID</StyledTableCell>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            <StyledTableCell align="center">Age</StyledTableCell>
                            <StyledTableCell align="center" colSpan={2}>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map(employee => (
                            <StyledTableRow key={employee._id}>
                                <StyledTableCell align='center' component="th" scope="row">{employee.eId}</StyledTableCell>
                                <StyledTableCell align="center">{employee.eName}</StyledTableCell>
                                <StyledTableCell align="center">{employee.eAge}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button variant='contained' color='success' LinkComponent={Link} to={`/update/${employee._id}`}>Update</Button>
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <Button variant='contained' color='error'  onClick={() => handleDelete(employee._id)}>Delete</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
};

export default AllEmployees;
