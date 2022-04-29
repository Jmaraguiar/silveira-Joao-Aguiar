import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
border-radius: 5px;
overflow: hidden;
margin: 10px;
color: black;
background-color: white;
width: 600px;
`

const Del = styled.div`

button{
    background-color: transparent;
    corsor: pointer;
    border:none;
    width: 50px;
    height: 50px;

    i{
        font-size: 17px;
    }

    :hover{
        background-color: red;
        cursor:pointer;
        i{
            color:white;
        }
    }
}
`

const Display = styled.div`
display: flex;
gap: 10px;
justify-content: space-between;
align-items: center;
height: 50px;

h3{
    margin-left: 10px;
}

:hover{
    background-color: lightgray;
    cursor:pointer;
}
`


export default function CardTripAdimin(props){
    const [numeroCandidatos,setNumeroCandidatos] = useState(0)
    const nav = useNavigate()

    const getTripDetails = ()=> {
        const header = {
            headers:{
                auth: localStorage.getItem('token')
            }
        }

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-aguiar/trip/${props.id}`

        axios.get(url,header)
        .then((res)=>{
            setNumeroCandidatos(res.data.trip.candidates.length)
        })
        .catch((err)=>{
            console.log(err)
        })

    }

    const delTrip = ()=> {
        console.log(`trip ${props.nome} deletada`)
    }

    const setPageDetail = ()=> {
        nav(`/TripDetail/${props.id}`)
    }

    useEffect(()=>{
        getTripDetails()
    },[])


    return(
        <Container>
            <Display onClick={setPageDetail}>
                <h3>{props.nome}</h3>
                <p>Data: {props.data}</p>
                <p>Candidatos: {numeroCandidatos}</p>
                <Del>
                <button onClick={delTrip}><i class="fa-solid fa-trash"/></button>
            </Del>
            </Display>
        </Container>
    )
}