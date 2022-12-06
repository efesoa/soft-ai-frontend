import axios from "axios";
import {useState} from "react";
import Grid from "@mui/material/Grid";
import React from "react";
import Box from "@mui/material/Box";
import {Button, Checkbox, InputLabel, TextField, Typography} from "@mui/material";

export default function UpdateEmployee() {
    const url = `http://127.0.0.1:8000/api/employees/`
    // const url = `http://127.0.0.1:8000/api/employees/${id}/`
    // const [id, setId] =useState(1)
    const [data, setData] = useState({
        name: '',
        email: '',
        address: '',
        title: '',
        is_suspended: '',

    })

    function submit(e){
        e.preventDefault();
            axios.put(url,{
                name: data.name,
                email: data.email,
                address: data.address,
                title: data.title,
                is_suspended: data.is_suspended,
            })
                .then(res => {
                    console.log(res.data)
                })
        }

    function handle(e){
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)

    }
    return (
        <div>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ paddingTop: 7 }}
            >
                <Box boxShadow={7} sx={{ p:2, minWidth: 150 }} borderRadius={5}>
                    <form onSubmit={(e)=> submit(e)}>
                        <Grid container
                              direction="column"
                              sx={{ py: 2 }}
                        >
                            <Grid item sx={{ paddingBottom: 2, paddingLeft: 5 }}>
                                <Typography variant='h5'><strong>Edit Employee</strong></Typography>
                            </Grid>
                            {/*<Grid item sx={{ paddingBottom: 2 }}>*/}
                            {/*    <TextField onChange={(e) => setId(e.target.value)}*/}
                            {/*               label="Client Id number" variant="outlined" type="number" id="name" value={id} placeholder="Client Id number" />*/}
                            {/*</Grid>*/}
                            <Grid item sx={{ paddingBottom: 2 }}>
                                <TextField onChange={(e) => handle(e)}
                                           label="Employee Name" variant="outlined" type="text" id="name" value={data.name} placeholder="Enter employee name" />
                            </Grid>
                            <Grid item sx={{ paddingBottom: 2 }}>
                                <TextField onChange={(e) => handle(e)}
                                           label="Email" variant="outlined" type="email" id="email" value={data.email} placeholder="Enter email" />
                            </Grid>
                            <Grid item sx={{ paddingBottom: 2 }}>
                                <TextField onChange={(e) => handle(e)}
                                           label="Address" variant="outlined" type="text" id="address" value={data.address} placeholder="Enter address" />
                            </Grid>
                            <Grid item sx={{ paddingBottom: 2 }}>
                                <TextField onChange={(e) => handle(e)}
                                           label="Title" variant="outlined" type="text" id="product" value={data.product} placeholder="Enter title" />
                            </Grid>
                            <Grid item sx={{ paddingBottom: 2 }}>
                                <Checkbox onChange={(e) => handle(e)}
                                          defaultChecked id="is_suspended" value={data.is_suspended} />
                                <InputLabel> Suspended </InputLabel>
                            </Grid>
                            <Grid item sx={{ paddingLeft: 7 }}>
                                <Button type="submit" variant="contained">Edit Employee</Button>
                            </Grid>
                        </Grid>

                    </form>
                </Box>
            </Grid>
        </div>
    )

}
