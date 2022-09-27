import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Divider from '@mui/material/Divider'
import { Stack } from "@mui/system";
import { Typography} from "@mui/material";


const Companies = [
    { label: 'Brown Ltd.', color: 'blue'},
    { label: 'Dujean Inc.', color: 'green'},
    { label: 'Whale Enterprises', color: 'orange'},
    { label: 'JPS', color: 'purple'},
    { label: 'Bookophelia', color: 'white'}
]
const Employees = [
    { label: 'Joel Brown', company: 'Brown Ltd.'},
    { label: 'Ashlei-Ann Carey', company: 'Dujean Inc.'},
    { label : 'Jared Paul', company: 'Whale Enterprises'},
    { label : 'David', company: 'Bookophelia'}
]

const loginReasons = [
    {label: 'Routine - Site Visit'},
    {label: 'Site off air'},
    {label: 'Site on battery'},
    {label: 'Bushing'},
    {label: 'Pest Control'},
    {label: 'Site Visit'},
    {label: 'Refueling Generator'}
]

const sites = [
    {label: 'PT01'},
    {label: 'KN01'},
    {label: 'TM01'},
    {label: 'MY01'},
    {label: 'JM10'},
    {label: 'EZ11'},
    {label: 'MN01'},
    {label: 'MN14'},
    {label: 'TM09'},
    {label: 'PT22'},
    {label: 'WE01'},
    {label: 'SA10'},
    {label: 'CL22'},
    {label: 'CL01'},
    {label: 'MN17'},
    {label: 'TM29'},
    {label: 'CA11'},
    {label: 'TR01'},
]

const FormIn = ({log, setLog}) =>{

    return (
        <Stack spacing={2} sx={{width:300}}>
            <Typography variant='h6'>
                Login Form 
            </Typography>
            <Divider />
            <Autocomplete
            id="auto-CI"
            options={sites}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="CI" />}
            value={log.CI}
            onChange={ (_e, newValue) => {
                setLog({...log, CI:newValue.label})
                // console.log(log)
                }
            }
            />
            <Autocomplete
            disablePortal
            id="auto-company"
            options={Companies}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Company" />}
            value={log.Company}
            onChange={ (_e, newValue) => setLog({...log, Company: newValue.label})}
            />
            <Autocomplete
            id="auto-name"
            options={Employees}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Name" />}
            value={log.Name}
            onChange={ (_e, newValue) => setLog({...log, Name: newValue.label})}
            // getOptionLabel={option => option.name}
            />
            <Autocomplete
            freeSolo={true}
            id="auto-reason"
            options={loginReasons}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Reason of Visit" />} 
            value={log.Reason}
            onInputChange={ (_e, newValue) => {
                setLog({...log, Reason: newValue})
                // console.log(log)
            }}
            />
        </Stack>
    
      );
}

export default FormIn;