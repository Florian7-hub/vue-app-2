<template>
  <div class="about">
    <h1>Pokemon type</h1>
  <ul id="type-pokemon">
      <li v-for="item in items" :key="item.type">
        <button @click="getType(item.type)"> {{ "Type : " + item.type }} </button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'type-pokemon',
  data() {
    return {
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
      console.log(response)
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
</style>