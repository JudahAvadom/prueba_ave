<template>
  <NavbarVue />
  <div class="p-6 flex">
    <div>
      <input type="search" placeholder="Search" class="p-2 border-neutral-600 border-2 rounded-lg" v-model="search"
        v-on:keyup="handleInput()">
    </div>
    <div class="px-4">
      <div v-if="results">
        <img :src="results.sprites.front_default" :alt="results.name" height="150" width="150">
        <div>
          <span class="text-xl text-neutral-700 font-medium px-2">ID</span>
          <span class="text-xl">{{ results.id }}</span>
        </div>
        <div>
          <span class="text-xl text-neutral-700 font-medium px-2">NAME</span>
          <span class="text-xl">{{ results.name }}</span>
        </div>
        <div>
          <span class="text-xl text-neutral-700 font-medium px-2">HEIGHT</span>
          <span class="text-xl">{{ results.height }}</span>
        </div>
        <div>
          <span class="text-xl text-neutral-700 font-medium px-2">WEIGHT</span>
          <span class="text-xl">{{ results.weight }}</span>
        </div>
        <div>
          <span class="text-xl text-neutral-700 font-medium px-2">ABILITIES</span>
          <span v-for="abilities in results.abilities" class="text-xl px-4">
            {{ abilities.ability.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from "axios"
import NavbarVue from './components/Navbar.vue';

type resultArray = {
  id: string;
  name: string;
  abilities: any,
  height: number,
  weight: number,
  sprites: any
}

const search = ref("")
const results = ref<resultArray>()

const handleInput = async () => {
  if (search.value !== "") {
    const { data, status } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.value}`)
    if (status == 200) {
      results.value = data
      console.log(results.value);

    }
  }
}
</script>