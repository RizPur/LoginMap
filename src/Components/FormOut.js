import React from "react";
import Divider from '@mui/material/Divider'
import { Stack } from "@mui/system";
import { TextField, Typography} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';


const FormOut = ({log, setLog}) =>{
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    return (
        <Stack spacing={2} sx={{width:400}}>
            <Typography variant='h6'>
                Logout Form 
            </Typography>
            <Divider />
            {/* <LogTable logs={logs}/> */}
            <div className="side-by-side">
                <TextField
                    size="small" 
                    label='CI'
                    type='text' 
                    defaultValue={log.CI}
                    variant='outlined'
                    inputProps={
                        { readOnly: true, }
                    }
                />
                <TextField 
                    size="small" 
                    label='Name'
                    type='text' 
                    defaultValue={log.Name}
                    variant='outlined'
                    inputProps={
                        { readOnly: true, }
                    }
			    />
            </div>
            <TextField
                    size="small"  
                    label='Company'
                    type='text' 
                    defaultValue={log.Company}
                    variant='outlined'
                    inputProps={
                        { readOnly: true, }
                    }
                />
            <div className="side-by-side">
                <TextField
                    size="small"  
                    label='Time In'
                    type='text' 
                    defaultValue={log.inTime}
                    variant='outlined'
                    inputProps={
                        { readOnly: true, }
                    }
                />
                <TextField
                    size="small"  
                    label='Time Out'
                    type='text' 
                    defaultValue={time}
                    variant='outlined'
                    inputProps={
                        { readOnly: true, }
                    }
                />
            </div>
                <TextField 
                    size="small" 
                    label='Purpose of Visit'
                    type='text' 
                    defaultValue={log.Reason}
                    variant='outlined'
                    inputProps={
                        { readOnly: true, }
                    }
                />
                <Divider />
                <TextField
                    required={true}
                    id="outlined-multiline-static"
                    label="Logout Comments"
                    multiline
                    defaultValue={log.Comments}
                    rows={4}
                    inputProps={
                        { readOnly: !log.Status }
                    }
                    onChange={ e =>{
                        setLog({...log, Comments: e.target.value, outTime: time})
                        }
                    }
                />
                <TextField
                    size="small" 
                    label='Fuel Added'
                    type='number' 
                    defaultValue={log.FuelAdded}
                    variant='outlined'
                    InputProps={
                        { endAdornment: <InputAdornment position="end">gallon(s)</InputAdornment>, readOnly: !log.Status}
                    }
                    onChange={ e =>{
                        setLog({...log, FuelAdded: e.target.value})
                        }
                    }
                /> 
                <Divider />
        </Stack>
    );
}

export default FormOut;