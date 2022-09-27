import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Divider from '@mui/material/Divider'
import { Stack } from "@mui/system";
import { Typography} from "@mui/material";


const Companies = [
    { label: 'Actavo', color: 'blue', people: ['Milton White','Jesse Pinkman']},
    { label: 'Cowans', color: 'green', people: ['Lloyd Bird', 'Howard Guy']},
    { label: 'Konnex', color: 'orange', people: ['Walter White']},
    { label: 'Huawei', color: 'purple', people: ['Gareth']},
    { label: 'Davis Pest Control', color: 'grey', people: ['Richard Gayle']}
]
const Employees = [
    { label: 'Joel Brown', company: 'Konnex'},
    { label: 'Milton White', company: 'Actavo'},
    { label : 'Ricardo Gayle', company: 'Davis Pest Control'}
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
    {label: 'PT034'},
    {label: 'KN020'}
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