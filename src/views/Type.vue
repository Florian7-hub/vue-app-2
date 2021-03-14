<template>
  <div class="about">
    <h1>Pokemon type</h1>
  <ul id="type-pokemon">
      <li v-for="item in items" :key="item.type">
        <button @click="getType(item.type)"> {{ "Type : " + item.type }} </button>
      </li>
    </ul>
    <ul>
      <li v-for="pokemons in pokemon" :key="pokemons">
        <button class="button button2" @click="getUrlPoke(pokemons.pokemon.url)">{{ pokemons.pokemon.name }}</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'type-pokemon',
  data() {
    return {
      pokemon: [],
      allData: [],
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
      this.pokemon = data.pokemon;
      console.log(data.pokemon)
    },
    getUrlPoke: async function(urlPoke){
      const response = await fetch(`${urlPoke }`)
      const data = await response.json();
      this.allData = data.allData;
      console.log(data.allData)
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
</style>