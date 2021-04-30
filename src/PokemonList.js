import { Card, CardContent, CardHeader, CardMedia, Grid, makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom'

const useStyle=makeStyles({
    paddingContainer:{
        paddingTop:"20px",
        paddingRight:"20px",
        paddingLeft:"30px"
    } ,
    media: {
        height:"180px",
        width:"180px",
        margin:"auto"
      },
      textAlign:{
          textAlign:"center"
      }
})

export default function PokemonList(props) {

    const [filter, setFilter] = useState("");

    let history = useHistory()
    
    const forwardReuest=(id)=>{

        console.log("TYPE",id)
        let path = `/${id}`; 
        history.push(path, { from: "/" })
    }

    const [pokemonList, setpokemonList] = useState({});
    useEffect(() => {
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=51")
            .then(response=>{
                const { data } = response;
                const { results } = data;
                const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        setpokemonList(newPokemonData)
      
            }).catch(error=>{
                console.log(error)
            })
    }, [])


    const classes=useStyle();


const generatePokemonCard=()=>{
    
    return Object.keys(pokemonList).map(pokemon=>{

        const img=pokemonList[pokemon].sprite;
        const id=pokemonList[pokemon].id;
      
        return <Grid item md={4} sm={6}>
        <Card onClick={()=>forwardReuest(id)}>
        <CardHeader 
        className={classes.textAlign}
        title={`${pokemonList[pokemon].name.charAt(0).toUpperCase()
         + pokemonList[pokemon].name.slice(1)}`} />
       <CardMedia
        image={img}
        className={classes.media}
      />
        <CardContent>
        
        </CardContent>
        </Card>
        </Grid>
    })
   
}
    return (
        
        <div className={classes.paddingContainer}>
       <Grid container spacing={2}>
    {generatePokemonCard()}
       </Grid>
       </div>
    )
}
