<template>
  <header class="px-2 bg-gray-300 border-b shadow-xl border-b-gray-400 dark:bg-gray-800 dark:border-b-black dark:text-white">
    <nav class="container mx-auto divide-y divide-solid">
      <div class="relative flex justify-between py-3">
          <div class="size-10 logo">
              <router-link to="/"><img src="/src/assets/food.svg" alt="logo" class="drop-shadow-sm"></router-link>
          </div>
          <div class="menu-icon size-10">
            <img :src="`${menu ? menuClose:menuOpen}`" alt="menu-icon" class="hover:cursor-pointer" @click="toggleMenu">
          </div>
          <div class="bg-gray-300 menu-options closed dark:bg-gray-800 dark:text-white">
            <router-link activeClass="active" class="hover:text-rose-500 hover:font-semibold" @click="menu=false" to="/get-cooking">Home</router-link>
            <router-link activeClass="active" class="hover:text-rose-500 hover:font-semibold" @click="menu=false" to="/get-cooking/letter">Search by Letters</router-link>
            <router-link activeClass="active" class="hover:text-rose-500 hover:font-semibold" @click="menu=false" to="/get-cooking/area">Search by Area</router-link>
            <router-link activeClass="active" class="hover:text-rose-500 hover:font-semibold" @click="menu=false" to="/get-cooking/categories">Search by Category</router-link>
            <router-link activeClass="active" class="hover:text-rose-500 hover:font-semibold" @click="menu=false" to="/get-cooking/ingredient">Search by Ingredients</router-link>
          </div>
          <div class="size-10 theme">
              <img :src="`${darkTheme ? moonSVG:sunSVG}`" alt="theme-icon" class="hover:cursor-pointer" @click="themeChange">
          </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import {kitchenStore} from '../stores'

const kitchen = kitchenStore()

const menu = ref(false)
const darkTheme = ref(false)
const body = document.getElementById('body')
const moonSVG = new URL('../assets/moon.svg', import.meta.url).href
const sunSVG = new URL('../assets/sun.svg', import.meta.url).href
const menuOpen = new URL('../assets/menu-open.svg', import.meta.url).href
const menuClose = new URL('../assets/menu-close.svg', import.meta.url).href

const themeChange = () =>{
  darkTheme.value = kitchen.$state.darkTheme = !kitchen.$state.darkTheme
  body.classList.remove('dark')
  if(kitchen.$state.darkTheme){body.classList.add('dark')}
}

function toggleMenu(){
  const menuOptions = document.querySelector('.menu-options')
  menu.value = !menu.value
  menuOptions.classList.add('closed')
  if(menu.value){menuOptions.classList.remove('closed')}
}

onMounted(()=>{
  darkTheme.value=kitchen.$state.darkTheme
  body.classList.remove('dark')
  if(darkTheme.value){body.classList.add('dark')}
})
</script>

<style scoped>
  .menu-options{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .menu-icon{
    display: none;
  }
@media screen and (max-width: 991.98px) {
  nav>div{
    justify-content: space-around;
  }
  .menu-options{
    position: absolute;
    align-items: flex-end;
    gap: 0;
    z-index: 10;
    inset: 70px 0 0 0;
    width: 100%;
    height: 250px;
    padding-bottom: 10px;
    margin: 0;
    box-shadow: 0 10px 10px rgba(0, 0, 0, .6);
  }
  .menu-options a{
    width: 100%;
    text-align: center;
  }
  .menu-options.closed{
    display: none;
  }
  .menu-icon{
    display: inline-block;
  }
}
</style>