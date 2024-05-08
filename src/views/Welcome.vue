<template>
  <main class="grid min-h-screen place-items-center min-h-svh">
    <div class="container px-3 text-white">
        <div class="w-full px-5 py-7 lg:w-6/12">
          <h1 class="mb-12 text-5xl text-center puff-in-center">Welcome to <br><span class="text-6xl italic font-bold text-rose-600">Flex Recipe Hub</span></h1>
          <div class="text-xl font-semibold slide-in-blurred-bottom" id="summary">
              <p>Come embark on a culinary voyage with meals from around the world. From the spicy jerk chicken of Jamaica to the sophisticated pastries of France, the ultimate online portal for discovering and mastering international cuisine.</p>
              <p class="mt-5">Flex Recipe Hub is more than just a recipe site; it's a journey for the senses, inviting you to savor the world one plate at a time.</p>
          </div>
          <div class="py-3 mt-10 text-center cta slide-in-bottom">
              <router-link to="/get-cooking" id="cta-btn" class="p-4 transition duration-1000 ease-out border border-white rounded bg-gradient-to-r from-neutral-600 hover:from-rose-600 hover:to-rose-800 hover:ease-in">Let's Start Cooking!!!</router-link>
          </div>
        </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {kitchenStore} from '../stores';

const kitchen = kitchenStore()

onMounted(()=>{
  kitchen.initialize()
})
</script>

<style scoped>
main{
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0, 0.45)), url('../assets/ingredients.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
}
span{
  -webkit-text-stroke-width: .8px;
  -webkit-text-stroke-color: white;
}

@media screen and (max-width: 991.98px) {
  #summary p{
    text-align: center;
  }
}
</style>