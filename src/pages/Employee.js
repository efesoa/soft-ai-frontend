import Buton from "../components/Buton";
import Grid from "@mui/material/Grid";
import React, {useState, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import axios from "axios";
import {Button} from "@mui/material";
import UpdateEmployee from "../components/UpdateEmployee";
import EmployeeTable from "../components/EmployeeTable";


const Employee = () => {
    let [employees, setEmployees] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)

    function ShowEmployees(){
        axios.get('http://127.0.0.1:8000/api/employees/', {
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
            .then( res => {
                console.log(res)
                if(res.status === 200){
                    setEmployees(res.data)
                }else if(res.statusText === 'Unauthorized'){
                    logoutUser()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div>
            <Grid
                sx={{ paddingTop: 10 }}
                container
                spacing={4}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <Button onClick={ShowEmployees} variant='contained'>Employee List</Button>
                </Grid>
                <Grid item>
                    <Buton name='Block' />
                </Grid>
                <Grid item>
                    <UpdateEmployee />
                </Grid>
            </Grid>
            <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ paddingLeft: 40, paddingTop: 6 }}
            >
                <Grid item sx={{ width: 900 }}>
                    <EmployeeTable employees={employees}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Employee