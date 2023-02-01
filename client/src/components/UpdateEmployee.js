import { Alert, Button, Container, Snackbar, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateEmployee = () => {

    const { id } = useParams();
    const [employeeId, setEmployeeId] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [employeeAge, setEmployeeAge] = useState("");
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("");
    const navigate = useNavigate();

    function getEmployee(){
        axios.get(`http://localhost:8090/details/${id}`)
        .then((res)=>{
            setEmployeeId(res.data.employee.eId)
            setEmployeeName(res.data.employee.eName)
            setEmployeeAge(res.data.employee.eAge)
        })
        .catch((err)=>{
            console.error(err);
        })
    };

    useEffect(() => {
        getEmployee();
    }, []);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8090/update/${id}`, {
            eId: employeeId,
            eName: employeeName,
            eAge: employeeAge
        })
        .then((res) => {
            console.log(res.data);
            setMessage("Employee Updated Succesfully");
            setSeverity("success");
            setOpen(true);
            setTimeout(() => {
                navigate('/all')
            }, 1000)
        })
        .catch((err) => {
            console.log(err);
            setMessage(err.message);
            setSeverity("error");
            setOpen(true);
        })
    };

    return (
        <Container maxWidth="xl">
            <Stack component="form" spacing={4} sx={{m: "auto", maxWidth: "sm", padding: 8, mt: 8, boxShadow: 5}} bgcolor="#fafafa">
                <Typography variant='h3' align='center' marginBottom={2}>UPDATE &nbsp; EMPLOYEE</Typography>
                <TextField variant='outlined' value={employeeId} onChange={(e)=> setEmployeeId(e.target.value)} label="Employee ID"/>
                <TextField variant='outlined' value={employeeName} onChange={(e)=> setEmployeeName(e.target.value)} label="Name"/>
                <TextField variant='outlined' value={employeeAge} onChange={(e)=> setEmployeeAge(e.target.value)} label="Age"/>
                <Button variant='contained' color='info' onClick={handleSubmit}>Update</Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                    <Alert onClose={handleClose} severity={severity} variant={'filled'}>
                        {message}
                    </Alert>
                </Snackbar>
            </Stack>
        </Container>
    )
}

export default UpdateEmployee
