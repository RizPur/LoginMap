import React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { List, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RecentLogs from './RecentLogs';

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const Nav = ({logBar, setLogBar, filterLogs, setLog, showOut, setShowOut}) => {

    const reverseLogs = [...filterLogs].reverse()

  return (
    <div id="b-bar">
        <ThemeProvider theme={darkTheme}>
            <Box>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 5}} elevation={3}>
                    <Paper sx={{ maxHeight: '85vh', overflow: 'auto' }} elevation={3}>
                        <List> 
                            {reverseLogs.map(log =>( //note this log is not the state "log" but just a single instance of state "logs"
                            <RecentLogs key={log.ID} log={log} setLog={setLog} showOut={showOut} setShowOut={setShowOut}/> 
                            ))}  
                        </List>
                    </Paper>
                    <BottomNavigation
                        showLabels
                        value={logBar}
                        onChange={(_e, newValue) => {
                        setLogBar(newValue);
                        console.log('Log Filter:',newValue)
                        }}
                    >
                        <BottomNavigationAction label="Logins"  />
                        <BottomNavigationAction label="Logouts" />
                        <BottomNavigationAction label="All"/>
                    </BottomNavigation>
                </Paper>
            </Box>
        </ThemeProvider>
    </div>
  );
}

export default Nav;