import React from "react";
import { Divider, ListItemButton, ListItemText, Typography } from '@mui/material';

const RecentLogs = ({log, setLog, setShowOut}) =>{

    return(
        <>
            <ListItemButton sx={{backgroundColor: log.Status ? 'green' : 'red'}} onClick={()=>{
                setShowOut(true)
                setLog(log)
            }} key={log.ID} >
                <ListItemText primary={log.CI} secondary={
                    <>
                        <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                        >
                            {log.Name}
                        </Typography>
                        {" - " + log.inTime }
                    </>
                } />
            </ListItemButton>   
            <Divider />
        </>
    )
}

export default RecentLogs;