import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import React from 'react';
import AllEmployees from './components/AllEmployees';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import { Divider, Typography } from '@mui/material';

function App() {
    return (
        <React.Fragment>
            <Header>
                <Header/>
            </Header>
            <main>
                <Routes>
                    <Route path='/' element={<AllEmployees/>} exact></Route>
                    <Route path='/add' element={<AddEmployee/>} exact></Route>
                    <Route path='/update/:id' element={<UpdateEmployee/>} exact></Route>
                </Routes>
            </main>
            <footer>
                <Divider/>
                <Typography mt={2} align='center'>Copyright @Ravishaka</Typography>
            </footer>
        </React.Fragment>
    );
}

export default App;
