import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Tabs, Tab } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

    return (
        <div>
            <AppBar sx={{backgroundColor: "#1f5fa3", py: 1}} position='sticky'>
                <Toolbar>
                    <Typography>
                        EMS
                    </Typography>
                    <Tabs sx={{ml: "auto"}} textColor='inherit' value={value} onChange={handleChange} centered indicatorColor='inherit'>
                        <Tab LinkComponent={NavLink} to="/" label='Home'/>
                        <Tab LinkComponent={NavLink} to="/all" label='Employees'/>
                        <Tab LinkComponent={NavLink} to="/add" label='Add Employee'/>
                        <Tab LinkComponent={NavLink} to="" label='About Us'/>
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
