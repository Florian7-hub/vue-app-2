<template>
  <div class="home">
    <img v-tooltip.top-center="message" alt="Vue logo" src="../assets/logo.png">
    <Welcome msg="Welcome to the Pokemon fan page !"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'
import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)

export default {
  name: 'Home',
  components: {
    Welcome
  },
  data(){
    return{
      message: 'Catch them all !'
    }
  }
}
</script>