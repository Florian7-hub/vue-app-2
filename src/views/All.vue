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
        <button class="button button2">{{ pokemon.name }}</button>
      </li>
    </ul>
  </div>
</template>

<script>


export default {

  name: 'gen-pokemon',
  data() {
    return { 
      pokemon_species: []
    }
  },
  methods: {
    getGen: async function(generationIndex){
      const response = await fetch(`${this.$pokeUrl}generation/${generationIndex}`)
      const data = await response.json();
      this.pokemon_species = data.pokemon_species;
    
      console.log(data.pokemon_species)
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
</style>