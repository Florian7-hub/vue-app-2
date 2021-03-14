<template>
  <div class="all">
    <h1>All Pokémon</h1>
    <ul id="gen-pokemon">
      <li v-for="i in 8" :key="i">
        <button @click="getGen(i)"> {{ "Génération " + i }} </button>
      </li>
    </ul>
    <ul>
        <li v-for="pokemon in pokemon_species" :key="pokemon">
        <span>{{ pokemon.name }}</span>
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
  margin: 0 10px;
}
</style>