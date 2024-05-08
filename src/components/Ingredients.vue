<template>
  <div class="container mx-auto">
    <div class="p-2 mt-5">
      <h-1>Select an ingredient below</h-1>
    </div>
    <div class="w-3/4 px-1 mx-auto mt-6 mb-3 bg-white border border-gray-800 rounded-md md:w-1/2">
      <input type="text" name="filter-input" id="filter-input" placeholder="Filter Ingredients" class="w-full p-2 border-none outline-none placeholder:text-gray-600" @keyup="filterIngredients()" v-model="keyword">
    </div>
    <div class="container grid justify-center grid-cols-1 gap-3 px-2 mx-auto mt-10 md:grid-cols-2 lg:grid-cols-3">
      <router-link :to="`/get-cooking/results/ingredient/${ingredient}`" v-for="(ingredient,index) of ingredients" :key="index" class="p-2 text-center border border-black rounded-md lg:text-4xl md:text-3xl hover:font-bold hover:text-rose-600 dark:border-slate-100 bg-slate-100 dark:bg-gray-800 dark:text-white hover:border-2 hover:border-rose-600">
          {{ kitchen.capitalize(ingredient) }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
  import H1 from './H1.vue'
  import { onMounted, ref } from 'vue';
  import {kitchenStore} from '../stores';

  const kitchen = kitchenStore()
  const ingredients = ref([])
  const keyword = ref('')

  onMounted(() =>{
    kitchen.getIngredients()
    ingredients.value = kitchen.$state.ingredients
  })

  const filterIngredients = () => {
    ingredients.value = keyword.value ? kitchen.$state.ingredients.filter(ing => ing.toLowerCase().includes(keyword.value)) : kitchen.$state.ingredients
  }
</script>

<style>

</style>