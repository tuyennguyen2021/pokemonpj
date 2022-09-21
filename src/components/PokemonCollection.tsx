import React from 'react'
import { Pokemon, Detail, PokemonDetail } from '../interface'
import PokemonList from './PokemonList'
import "./pokemon.css"

interface Props {
    pokemons: PokemonDetail[]
    viewDetail: Detail;
    setDetail: React.Dispatch<React.SetStateAction<Detail>>
}

const PokemonCollection:React.FC<Props> = (props) => {
    const {pokemons, viewDetail, setDetail} = props
    console.log(pokemons);
    const seclectPokemon = (id:number)=>{
        if(!viewDetail.isOpened){
            setDetail({
                id: id,
                isOpened: true
            })
            
        }

    }
    
  return (
    <>
        <section className={viewDetail.isOpened ? 'collection-container-active' : 'collection-container'}>
            {viewDetail.isOpened ? (
                <div className='overlay'></div>
            ):(<div></div>)}
            {pokemons.map((pokemon)=>{
                return (<div className="" onClick={()=>{seclectPokemon(pokemon.id)}}>
                   <PokemonList 
                   key={pokemon.id} 
                   name={pokemon.name} 
                   id={pokemon.id} 
                   image={pokemon.sprites.front_default} 
                   abilities={pokemon.abilities}
                   viewDetail={viewDetail}
                   setDetail={setDetail}

                   
                   />
                </div>)
            })}
        </section>
    </>
  )
}

export default PokemonCollection