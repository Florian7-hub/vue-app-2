<template>
  <div class="all">
    <h1>All Pokémon</h1>
    <ul id="gen-pokemon">
      <li v-for="i in 8" :key="i">
        <button @click="getGen(i)"> {{ "Génération " + i }} </button>
      </li>
    </ul>
    <ul>
        <li v-for="pokemon in pokemon_species" :key="pokemon.name">
        <button class="button button2" @click="getDetailPokemon(pokemon.url)">{{ pokemon.name }}</button>
      </li>
    </ul>
    <div class ="detailPokemon">
      <img :src="pokemonImg">
      <br>
      <span>
        {{ pokemonId }} {{ pokemonName }}
      </span>
    </div>
  </div>
</template>

<script>


export default {

  name: 'gen-pokemon',
  data() {
    return { 
      pokemon_species: [],
      pokemonImg:"",
      pokemonId:"",
      pokemonName:"",
      detailNews:{
        urlImage:"",
        id:"",
        name:""
      }
    }
  },
  methods: {
    getGen: async function(generationIndex){
      const response = await fetch(`${this.$pokeUrl}generation/${generationIndex}`)
      const data = await response.json()
      this.pokemon_species = data.pokemon_species
    },
    getIdPokemon: async function(speciesUrl){
      const response = await fetch(`${speciesUrl}`)
      const data = await response.json()
      return this.pokemonId = data.id
    },
    getDetailPokemon: async function(speciesUrl){
      const pokeId = await this.getIdPokemon(speciesUrl)
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      const data = await response.json()
      this.pokemonImg = data.sprites.front_default
      this.pokemonId = data.id
      this.pokemonName = data.name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 10px 10px;
}
.button2 {
  border: solid;
  color: red ;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
}
.detailPokemon{
    color: black;
  }
</style>