import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Pokemon= () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {

        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                setPokemon(response.data.results)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div className= "App" style={{width: "200px", margin: "auto"}}>
            <ul>
                {
                    pokemon.map((pokemonN, index)=> {
                        return (<li key={index}>{pokemonN.name}</li>)
                    })
                }
            </ul>
        </div>
    );
}

export  default Pokemon;