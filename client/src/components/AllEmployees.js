import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const AllEmployees = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        function getAllEmployees(){
            axios.get("http://localhost:8090/all-details")
            .then((res)=>{
                setEmployees(res.data.employees)
            })
            .catch((err)=>{
                console.error(err);
            })
        }
        getAllEmployees();
    }, [])

    return (
        <Container maxWidth="xl" >
            <Typography variant='h3' align='center' mt={3}>ALL &nbsp; EMPLOYEES</Typography>
            <Divider/>
            <TableContainer component={Paper} sx={{mt:5}}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Age</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map(employee => (
                            <StyledTableRow key={employee._id}>
                                <StyledTableCell component="th" scope="row">
                                {employee.eId}
                                </StyledTableCell>
                                <StyledTableCell align="left">{employee.eName}</StyledTableCell>
                                <StyledTableCell align="left">{employee.eAge}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
};

export default AllEmployees;
