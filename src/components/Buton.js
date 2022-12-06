import * as React from 'react';
import {Button} from "@mui/material";

export default function Buton(props: { name: string;}){
    const {name} = props
    return (
        <Button variant='contained'>{name}</Button>
    )
}