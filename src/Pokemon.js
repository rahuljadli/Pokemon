import { Card, CardContent, CardHeader, CardMedia, makeStyles, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import axios from 'axios';
import React, { useEffect, useState } from 'react'



const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275
    },
    title: {
        fontSize: 14,
      },
    media: {
        margin:"auto",
      height: 300,
      width:300,
      justifyContent:"center",
      alignContent:"center"// 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
  }));
  

export default function Pokemon(props) {
    const classes = useStyles();

    const { match, history } = props;
  const { params } = match;
  const  pokemonId  = params.id;
  console.log("Pokemon id",pokemonId)
  const [pokemon, setPokemon] = useState({
      name:"",
      ability:""
  });
  const [pokemonImage, setpokemonImage] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon({
            name:data.name,
            ability:data.abilities.name
        });
        
        setpokemonImage(data.sprites.front_default)
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, []);
    return (
        <div>{
            <Card>
            <CardHeader className={classes.bullet}
            style={{margin:"auto"
            ,
            textAlign:"center"}}
             title={pokemon.name}></CardHeader>
                <CardMedia
        className={classes.media}
        image={pokemonImage}
      />
      <CardContent>
          <Typography variant="h1" className={classes.title} 
           color="secondary" gutterBottom>Pokemon {pokemon['name']}</Typography>
          
          <Typography variant="h1" className={classes.title}>Abilities {pokemon['ability']}</Typography>    
      </CardContent>
            </Card>
        }
        </div>
    )
}
