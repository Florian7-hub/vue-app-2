<template>
  <div class="about">
    <h1>Pokemon type</h1>
  <ul id="type-pokemon">
      <li v-for="item in items" :key="item.type">
        <button @click="getType(item.type)"> {{ "Type : " + item.type }} </button>
      </li>
    </ul>
    <ul>
      <li v-for="pokemon in listPokemons" :key="pokemon.name">
        <button class="button button2" @click="getDetailPokemon(pokemon.pokemon.url)" >{{ pokemon.pokemon.name }}</button>
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
  name: 'type-pokemon',
  data() {
    return {
      listPokemons: [],
      allData: [],
      pokemonImg:"",
      pokemonId:"",
      pokemonName:"",
      detailNews:{
        urlImage:"",
        id:"",
        name:""
      },
      items : [
        {
          type: "normal"
        },
        {
          type: "fighting"
        },
        {
          type: "flying"
        },
        {
          type: "poison"
        },
        {
          type: "ground"
        },
        {
          type: "rock"
        },
        {
          type: "bug"
        },
        {
          type: "ghost"
        },
        {
          type: "steel"
        },
        {
          type: "fire"
        },
        {
          type: "water"
        },
        {
          type: "grass"
        },
        {
          type: "electric"
        },
        {
          type: "psychic"
        },
        {
          type: "ice"
        },
        {
          type: "dragon"
        },
        {
          type: "dark"
        },
        {
          type: "fairy"
        },
        {
          type: "unknown"
        },
        {
          type: "shadow"
        }
      ]
    }
  },
  methods:  {
    getType: async function(typeName){
      const response = await fetch(`${this.$pokeUrl}type/${typeName}`)
      const data = await response.json();
      this.listPokemons = data.pokemon;
      console.log(data.pokemon)
    },
    getDetailPokemon: async function(newUrl){
      const response = await fetch(`${newUrl}`)
      const data = await response.json()
      this.pokemonImg = data.sprites.front_default
      this.pokemonId = data.id
      this.pokemonName = data.name
      console.log(data.sprites.front_default)
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
button {
  padding: 10px;
}
.button2 {
  border: solid;
  color: blue ;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
}
  .detailPokemon{
    color: black;
  }
</style>