import './App.css';
import { useEffect, useState } from 'react';
import { Modal, Button, Box, Typography, TextField } from '@mui/material';
import FormIn from './Components/FormIn';
import FormOut from './Components/FormOut';
import Nav from './Components/Nav';
import Jamaica from './Components/Jamaica';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// const JAMAICA_CENTER = [18.19368269899244, -77.39527725784035] 

function App() {
  const [show, setShow] = useState(false) //Modal login
  const [showOut, setShowOut] = useState(false) //Modal logout
  const [logBar, setLogBar] = useState(0);
  const [logs, setLogs] = useState([])
  const [filterLogs, setFilterLogs] = useState([])
  const [filterParish, setFilterParish] = useState(null)
  const [filterSearch, setFilterSearch] = useState(null)
  const [log, setLog] = useState({
    CI: null,
    Name: null,
    Company: null,
    Reason: null,
    ID: '',
    inTime: '',
    outTime: '',
    Status: null,
    Comments: '',
    FuelAdded : 0
  })

  const toFilter = () =>{
    switch(logBar){
      case 0:
        setFilterLogs(logs.filter(log=>log.Status === true));
        break;
      case 1:
        setFilterLogs(logs.filter(log=>log.Status === false));
        break;
      default:
        setFilterLogs(logs);
        break;
    }
  }

  const toFilterParish = () =>{
    switch(filterParish){
      case 'KN':
        setFilterLogs(filterLogs.filter(log=>log.CI.substring(0,2) === 'KN'))
        break;
      case 'PT':
        setFilterLogs(filterLogs.filter(log=>log.CI.substring(0,2) === 'PT'))
        break;
      default:
        setFilterLogs(filterLogs);
        console.log("going to default")
        break;
    }
  }

  const toFilterSearch = () =>{
    setFilterLogs(filterLogs.filter(log=>log.CI.substring(0,filterSearch.length) === filterSearch.toUpperCase()))
  }


  const isFull = (obj) =>{
    // Object.values(obj).forEach(val =>{ will not return out of fn
    for (const [key, val] of Object.entries(obj)){
        if(val === null){
          console.log(key)
          return false;
        }
    }
    return true
  }

  const handleLogin = () =>{
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    setLog({...log, ID: "user-"+ time, inTime: time, Status: true})
    setShow(true)
  }

  const handleSubmit = () =>{
    if(isFull(log)){//check if log is valid before adding to logs
      setLogs([...logs, log]) 
      setLog({
        CI: null,
        Name: null,
        Company: null,
        Reason: null,
        inTime: '',
        outTime: '',
        ID : '',
        Status: null,
        Comments: '',
        FuelAdded: 0
      })
      setShow(false);
    }
    else{
      console.log(log)
      alert('There is info missing - ')
    }
  }

  const handleLogOut = () =>{
    //check to see if comments filled out (and number bar if Cowans)
    //set OutTime
    setLogs(logs.map(el=>{
      if(el.ID === log.ID){
          return {
              ...log, Status: false
          }
      }
      return el;
        })) //logout logic
    setShowOut(false) 
  }

  //update log bar when logs change
  useEffect(()=>{ 
    toFilter();
    setFilterParish('') //must reset parishfilter for toFilterParish() to work 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[logBar, logs])


  //update navbar when parishFilter changed
  useEffect(()=>{
    toFilter();
    toFilterParish();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterParish])

  // filter search
  useEffect(()=>{
    // console.log("filterSearch", filterSearch)
    toFilterSearch();
    if(filterSearch === ''){toFilter()}
  },[filterSearch])

  useEffect(()=>{
    if(showOut===false){setLog({
      CI: null,
      Name: null,
      Company: null,
      Reason: null,
      inTime: '',
      outTime: '',
      ID : '',
      Status: null,
      Comments: '',
      FuelAdded: 0
    })}
  },[showOut])

  return (
    <>
      <div id='f-bar'>
        <TextField label="Search CI" size="small" type="search" onChange={(e) =>{
          // console.log("filterSearch", e.target.value)
          setFilterSearch(e.target.value)
        }}/>
      </div>
      <Button id="login_button" variant='contained' onClick={() => handleLogin()}>Login</Button>
      <Button id="filter_button" variant='contained' sx={{backgroundColor: 'orange', visibility: `${filterParish ? 'visible' : 'hidden'}`}} onClick={() => {
        setFilterParish('')
        toFilter()}}>{`Clear ${filterParish} Filter`}</Button>
      <Modal open={show} onClose={() => setShow(false)} > 
        <Box sx={style}>
          <FormIn log={log} setLog={setLog}/>
          <Button id="modal_login_button" variant='contained' onClick={() => handleSubmit()}>Submit</Button>
        </Box>
      </Modal>
      <Modal open={showOut} onClose={()=>{setShowOut(false)}}>
        <Box sx={ 
          style
        }>
          <FormOut log={log} setLog={setLog}/>
          <Button id="modal_login_button" variant='contained' color='error' disabled={log.Status ? false : true} onClick={() => handleLogOut()}>Logout</Button>
        </Box>
      </Modal>
      <Nav logBar={logBar} setLogBar={setLogBar} filterLogs={filterLogs} setShowOut={setShowOut} setLog={setLog}/>
      <Jamaica setShow={setShow} filterParish={filterParish} setFilterParish={setFilterParish} logBar={logBar} setLogBar={setLogBar} logs={logs}/>
    </>  
  );
}

export default App;
