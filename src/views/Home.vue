<template>
  <primary-layout>
  <SearchBar @push-keyword="filterMeals" @random-meal="getRandomMeal" :randomKey="randomKey"/>
  <MealsList :meals="meals"/>
  </primary-layout>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import SearchBar from "../components/SearchBar.vue";
import MealsList from "../components/MealsList.vue";
import PrimaryLayout from "../layouts/PrimaryLayout.vue"
import {kitchenStore} from '../stores';

const kitchen = kitchenStore()
const meals = ref([])
const randomKey = ref('')

onMounted(()=>{
  meals.value = kitchen.shuffle(kitchen.$state.theMeals).slice(0,30) //retrieve 30 random meals to display, then assign to the 'meals' variable
})

const filterMeals = (keyword) => {
  meals.value = keyword ? kitchen.$state.theMeals.filter(ing => ing.strMeal.toLowerCase().includes(keyword.toLowerCase())) : kitchen.shuffle(kitchen.$state.theMeals).slice(0,30)
}

const getRandomMeal = () => {
  meals.value = kitchen.shuffle(kitchen.$state.theMeals).slice(0,1)
  randomKey.value = String(meals.value[0].strMeal)
}
</script>

<style scoped>

</style>