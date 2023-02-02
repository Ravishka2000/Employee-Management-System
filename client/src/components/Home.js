import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Home = () => {

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
        <Container maxWidth="xl" sx={{background:"#fafafa"}}>
            <Grid mt={4} container spacing={2} margin="auto" >
                <Grid xs={12} >
                    <Card >
                        <CardContent>
                            <Typography align='center' fontWeight={1000} fontSize={28} fontFamily="serif">Total Employees</Typography>
                            <Typography align='center' fontWeight={1000} fontSize={26}>{count}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;
