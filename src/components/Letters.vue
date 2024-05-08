<template>
  <div class="container mx-auto">
    <div class="p-2 mt-5">
      <h-1>Select a letter below</h-1>
    </div>
    <div class="container grid justify-center grid-cols-3 gap-3 px-2 mx-auto mt-10 lg:grid-cols-6 py-7">
      <router-link :to="`/get-cooking/results/letter/${letter}`" v-for="letter of letters" :key="letter" class="p-2 text-6xl text-center border border-black rounded-md dark:border-slate-100 hover:font-bold hover:text-rose-600 hover:border-2 hover:border-rose-600 bg-slate-100 dark:bg-gray-800 dark:text-white">
          {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
  import H1 from './H1.vue'
  import {kitchenStore} from '../stores';

  const kitchen = kitchenStore()
  const letters = kitchen.$state.letters
</script>

<style>

</style>