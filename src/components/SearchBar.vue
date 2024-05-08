<template>
  <div class="flex items-center justify-center gap-3 my-3">
    <div class="w-3/4 p-0 pl-1 my-1 overflow-hidden bg-white border border-gray-800 rounded-md md:w-1/2">
        <input type="text" id="search-input" placeholder="Search Recipes" class="w-full px-3 py-2 border-none outline-none placeholder:text-gray-600" v-model="keyword" @keyup="getKeyword">
    </div>
    <div class="my-1 w-11 h-11 hover:cursor-pointer hover:scale-110" title="Unable to decide? Select a random meal" @click="randomizeMeal">
      <img src="/src/assets/dice-random.svg" alt="dice-random-icon">
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const emits = defineEmits(['pushKeyword','randomMeal'])
const randomKeyword = defineProps({randomKey: String})
const keyword = ref(randomKeyword.randomKey)
const getKeyword = () => {emits('pushKeyword', keyword.value)}
const randomizeMeal = () => {emits('randomMeal')}

watch(randomKeyword, () => keyword.value = randomKeyword.randomKey)
</script>

<style>

</style>