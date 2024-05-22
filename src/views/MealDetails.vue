<template>
  <primary-layout>
  <div class="container mx-auto">
    <div class="p-2 mt-5">
      <h-1>Recipe</h-1>
      <back-button></back-button>
    </div>
    <div class="px-2 mx-auto mt-8 py-7 md:w-1/2">
      <h1 class="py-1 mb-3 text-lg font-bold text-center border-gray-800 dark:border-slate-100 border-y lg:text-3xl text-rose-600">{{ meal.strMeal }}</h1>
      <div class="grid justify-center overflow-hidden border border-gray-800 rounded-md bg-slate-100 dark:bg-gray-800 dark:text-white dark:border-slate-100">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full object-fit md:aspect-video">
        <section class="flex flex-wrap justify-between p-2">
          <div class="">
            <h3 class="font-bold underline">Origin</h3>
            <p class="flex items-center"><img :src="`/assets/flags/${meal.strArea}.svg` || '/assets/flags/unknown.svg'" :alt="`${meal.strArea}-Flag`" class="mr-2 object-fit size-11"> {{ meal.strArea }}</p>
          </div>
          <div class="">
            <h3 class="font-bold underline">Category</h3>
            <p>{{ meal.strCategory }}</p>
          </div>
          <div class="">
            <h3 class="font-bold underline">Tags</h3>
            <p class="flex flex-wrap">
              <template v-if="meal.strTags" v-for="tag in meal.strTags.split(',')" :key="tag">
                <span class="p-1 mx-1 border rounded border-rose-600 text-rose-600">{{tag}}</span>
              </template>
            </p>
          </div>
        </section>
        <section class="p-2 grid-cols-subgrid">
          <div class="mt-1">
            <h3 class="font-bold underline">Instructions</h3>
            <p>{{ meal.strInstructions }}</p>
          </div>
          <div class="flex flex-wrap justify-between mt-1">
            <div class="min-w-72">
              <h3 class="mt-1 font-bold underline">Ingredients</h3>
              <div class="ingredients">
                <ul>
                  <template v-for="n in 20">
                    <li v-if="meal[`strIngredient${n}`] && meal[`strIngredient${n}`]!==' '">{{ n }}. {{ meal[`strIngredient${n}`] }}</li>
                  </template>
                </ul>
              </div>
            </div>
            <div class="min-w-72">
              <h3 class="mt-1 font-bold underline">Measurements</h3>
              <div class="measurements">
                <ul>
                  <template v-for="n in 20">
                    <li v-if="meal[`strMeasure${n}`] && meal[`strMeasure${n}`]!==' '">{{ n }}. {{ meal[`strMeasure${n}`] }}</li>
                  </template>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div class="flex p-2 mt-6 border-t border-gray-800 dark:border-slate-100 buttons" v-if="meal.strYoutube || meal.strSource">
          <a :href="meal.strYoutube" target="_blank" class="flex gap-1 px-2 py-1 mr-2 text-white bg-red-600 border rounded hover:shadow-md hover:bg-rose-400" v-if="meal.strYoutube">
            <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M14 12L10.5 14V10L14 12Z" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 12.7075V11.2924C2 8.39705 2 6.94939 2.90549 6.01792C3.81099 5.08645 5.23656 5.04613 8.08769 4.96549C9.43873 4.92728 10.8188 4.8999 12 4.8999C13.1812 4.8999 14.5613 4.92728 15.9123 4.96549C18.7634 5.04613 20.189 5.08645 21.0945 6.01792C22 6.94939 22 8.39705 22 11.2924V12.7075C22 15.6028 22 17.0505 21.0945 17.9819C20.189 18.9134 18.7635 18.9537 15.9124 19.0344C14.5613 19.0726 13.1812 19.1 12 19.1C10.8188 19.1 9.43867 19.0726 8.0876 19.0344C5.23651 18.9537 3.81097 18.9134 2.90548 17.9819C2 17.0505 2 15.6028 2 12.7075Z" stroke="#FFFFFF" stroke-width="1.5"></path></svg>
            YouTube
          </a>
          <a :href="meal.strSource" target="_blank" class="flex gap-1 px-2 py-1 mr-2 text-red-600 border border-red-600 rounded bg-slate-100 hover:text-red-400 hover:border-red-400 hover:shadow-md" v-if="meal.strSource">
            <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#dc2626"><path d="M9.17137 14.8284L14.8282 9.17152M14.8282 9.17152H9.87848M14.8282 9.17152V14.1213" stroke="#dc2626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" stroke="#dc2626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            Source
          </a>
        </div>
      </div>
    </div>
  </div>
  </primary-layout>
</template>

<script setup>
import { useRoute } from 'vue-router'
import PrimaryLayout from "../layouts/PrimaryLayout.vue"
import H1 from '../components/H1.vue'
import BackButton from '../components/BackButton.vue'
import {kitchenStore} from '../stores';
import { onMounted, ref } from 'vue';

const kitchen = kitchenStore()
const route = useRoute()
const id = ref(route.params.id)
const meal = ref([])

onMounted(() => {
  meal.value = kitchen.$state.theMeals.filter(m => m.idMeal===id.value)[0]
})
</script>

<style>

</style>