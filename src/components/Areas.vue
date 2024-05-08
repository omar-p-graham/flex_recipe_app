<template>
  <div class="container mx-auto">
    <div class="p-2 mt-5">
      <h-1>Select an area below</h-1>
    </div>
    <div class="container grid justify-center grid-cols-2 gap-3 px-2 mx-auto mt-10 lg:grid-cols-3 py-7">
      <router-link :to="`/get-cooking/results/area/${area}`" v-for="(area,index) of areas" :key="index" class="p-0 text-center hover:font-bold">
        <div class="grid area">
          <div class="area-flag">
            <img :src="`../src/assets/flags/${(area).toLowerCase()}.svg` || '../assets/flags/unknown.svg'" :alt="`${area}-Flag`" class="object-fit">
          </div>
          <div class="area-name">
            <h3 class="text-xl">{{ area }}</h3>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
  import H1 from './H1.vue'
  import { onMounted, ref } from 'vue';
  import {kitchenStore} from '../stores';

  const kitchen = kitchenStore()
  const areas = ref([])

  onMounted(() =>{
    kitchen.getAreas()
    areas.value = kitchen.$state.areas
  })
</script>

<style scoped>
.area{
  overflow: hidden;
  position: relative;
}
.area img{
  display: block;
	width: 100%;
	height: auto;
	-o-object-fit: fill;
	   object-fit: fill;
}
.area:hover .area-name{
  height: 20%;
  filter: drop-shadow(0 0 0.7rem black);
  -webkit-text-stroke-width: .3px;
  -webkit-text-stroke-color: white;
}
.area-name{
  position: absolute;
  height: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>