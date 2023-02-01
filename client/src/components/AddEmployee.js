import { Alert, Button, Container, Stack, TextField, Typography, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

    const [employeeId, setEmployeeId] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [employeeAge, setEmployeeAge] = useState("");
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("");
    const navigate = useNavigate();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8090/create", {
            eId: employeeId,
            eName: employeeName,
            eAge: employeeAge
        })
        .then((res) => {
            console.log(res.data);
            setMessage("Employee Added Succesfully");
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
                <Typography variant='h3' align='center' marginBottom={2}>NEW &nbsp; EMPLOYEE</Typography>
                <TextField variant='outlined' value={employeeId} onChange={(e)=> setEmployeeId(e.target.value)} label="Employee ID"/>
                <TextField variant='outlined' value={employeeName} onChange={(e)=> setEmployeeName(e.target.value)} label="Name"/>
                <TextField variant='outlined' value={employeeAge} onChange={(e)=> setEmployeeAge(e.target.value)} label="Age"/>
                <Button variant='contained' color='warning' onClick={handleSubmit}>Add</Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                    <Alert onClose={handleClose} severity={severity} variant={'filled'}>
                        {message}
                    </Alert>
                </Snackbar>
            </Stack>
        </Container>
    )
}

export default AddEmployee;
