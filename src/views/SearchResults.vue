<template>
  <primary-layout>
  <div class="container mx-auto">
    <div class="p-2 mt-5">
      <h-1>Results: meals {{heading}}</h-1>
      <small class="block my-2 dark:text-white"><span class="font-bold">Total Meals Found:</span> {{totalMeals}}</small>
      <back-button></back-button>
    </div>
    <div class="mt-8 text-center py-7" id="no-results" v-if="totalMeals===0">
      <p class="mb-3 text-lg font-bold">No meals were found based on your search criteria</p>
      <div class="w-2/12 mx-auto"><img src="../assets/crying.svg" alt="" class="w-full object-fit"></div>
    </div>
  </div>
  <MealsList :meals="meals"/>
  </primary-layout>
</template>

<script setup>
import H1 from '../components/H1.vue'
import BackButton from '../components/BackButton.vue'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import PrimaryLayout from "../layouts/PrimaryLayout.vue"
import MealsList from "../components/MealsList.vue";
import {kitchenStore} from '../stores';

const kitchen = kitchenStore()
const route = useRoute()
const searchBy = ref(route.params.searchBy)
const id = ref(route.params.id)
const heading = ref('')
const totalMeals = ref(0)
const meals = ref([])

onMounted(()=>{
  switch(searchBy.value){
    case 'letter':
      meals.value = kitchen.$state.theMeals.filter(meal => String(meal.strMeal).startsWith(id.value))
      heading.value = `starting with the letter "${id.value}"`
      break;
    case 'area':
      meals.value = kitchen.$state.theMeals.filter(meal => String(meal.strArea) === id.value)
      heading.value = `from ${id.value} origin`
      break;
    case 'category':
      meals.value = kitchen.$state.theMeals.filter(meal => String(meal.strCategory) === id.value)
      heading.value = `from the "${id.value}" category`
      break;
    case 'ingredient':
      kitchen.scanByIngredient(id.value)
      meals.value = kitchen.$state.mealsByIngredient
      heading.value = `with "${id.value}" as an ingredient`
      break;
    default:
      console.log('Sorry, Invalid Search Param...');
  }
  totalMeals.value = meals.value.length
})
</script>

<style>

</style>