import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import React from 'react';
import Home from './components/Home';
import AllEmployees from './components/AllEmployees';
import AddEmployee from './components/AddEmployee';

function App() {
    return (
        <React.Fragment>
            <Header>
                <Header/>
            </Header>
            <main>
                <Routes>
                    <Route path='/' element={<Home/>} exact></Route>
                    <Route path='/all' element={<AllEmployees/>} exact></Route>
                    <Route path='/add' element={<AddEmployee/>} exact></Route>
                </Routes>
            </main>
        </React.Fragment>
    );
}

export default App;
