<template>
  <div class="container mx-auto">
    <div class="p-2 mt-5">
      <h-1>Select a category below</h-1>
    </div>
    <div class="container grid justify-center grid-cols-1 gap-3 px-2 mx-auto mt-10 md:grid-cols-2 lg:grid-cols-3">
      <router-link :to="`/get-cooking/results/category/${category}`" v-for="(category,index) of categories" :key="index" class="p-2 text-center border border-black rounded-md lg:text-4xl md:text-3xl hover:font-bold hover:text-rose-600 hover:border-2 hover:border-rose-600 bg-slate-100 dark:bg-gray-800 dark:text-white dark:border-slate-100">
          {{ category }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import H1 from './H1.vue'
import { onMounted, ref } from 'vue';
import {kitchenStore} from '../stores';

  const kitchen = kitchenStore()
  const categories = ref([])

  onMounted(() =>{
    kitchen.getCategories()
    categories.value = kitchen.$state.categories
  })
</script>

<style>

</style>