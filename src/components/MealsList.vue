<template>
    <div class="mt-8">
        <div class="container grid justify-center gap-6 px-2 mx-auto overflow-hidden meals-list md:grid-cols-3 lg:grid-cols-4 py-7">
            <template v-for="(meal,index) in meals.meals" :key="index">
                <div class="grid justify-center overflow-hidden border border-gray-800 rounded-lg hover:shadow-md shadow-black dark:hover:border-slate-100 bg-slate-100 dark:bg-gray-800 dark:text-white meal-card">
                    <div class="overflow-hidden thumbnal">
                        <img :src="meal.strMealThumb" :alt="meal.strMeal">
                    </div>
                    <div class="grid gap-3 px-2 pt-1 pb-3 details grid-cols-subgrid">
                        <h3 class="text-3xl font-bold text-center">{{meal.strMeal}}</h3>
                        <div class="flex flex-wrap justify-between py-1 border-gray-800 border-y dark:border-slate-100">
                            <p><span class="font-bold">Origin: </span>{{meal.strArea}}</p>
                            <p><span class="font-bold">Category: </span>{{meal.strCategory}}</p>
                        </div>
                        <router-link :to="`/get-cooking/recipe/${meal.idMeal}`" class="text-center">
                            <button class="p-3 mt-3 text-white border rounded-md hover:border-black bg-rose-600 hover:shadow-lg hover:bg-rose-300 hover:text-black">Get Recipe</button>
                        </router-link>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
const meals = defineProps({
    meals: Array
})
</script>

<style scoped>
.meal-card:hover img{
    transform: scale(1.1);
    transition: all .5s ease;
}
</style>