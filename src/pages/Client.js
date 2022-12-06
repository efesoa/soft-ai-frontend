import Buton from "../components/Buton";
import Grid from "@mui/material/Grid";
import axios from "axios";
import {useContext, useState} from "react";
import AuthContext from "../context/AuthContext";
import { Button } from "@mui/material";
import ClientTable from "../components/ClientTable";
import React from "react";
import UpdateClient from "../components/UpdateClient";


const Client = () => {
    let [clients, setClients] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)

    function ShowClients(){
        axios.get('http://127.0.0.1:8000/api/clients/', {
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
            .then( res => {
                console.log(res)
                if(res.status === 200){
                    setClients(res.data)
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
                    <Button onClick={ShowClients} variant='contained'>Client List</Button>
                </Grid>
                <Grid item>
                    <Buton name='Block' />
                </Grid>
                <Grid item>
                    <UpdateClient />
                </Grid>
            </Grid>
            <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ paddingLeft: 40, paddingTop: 6 }}
            >
                <Grid item sx={{ width: 900 }}>
                    <ClientTable clients={clients}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Client