import {createRouter, createWebHistory} from 'vue-router'
import Welcome from '../views/Welcome.vue'

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome
    },
    {
        path: '/get-cooking',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/get-cooking/letter',
        name: 'byLetter',
        component: () => import('../views/SearchByLetter.vue')
    },
    {
        path: '/get-cooking/area',
        name: 'byArea',
        component: () => import('../views/SearchByArea.vue')
    },
    {
        path: '/get-cooking/ingredient',
        name: 'byIngredient',
        component: () => import('../views/SearchByIngredient.vue')
    },
    {
        path: '/get-cooking/categories',
        name: 'byCategory',
        component: () => import('../views/SearchByCategory.vue')
    },
    {
        path: '/get-cooking/results/:searchBy/:id',
        name: 'results',
        component: () => import('../views/SearchResults.vue')
    },
    {
        path: '/get-cooking/recipe/:id',
        name: 'recipeDetails',
        component: () => import('../views/MealDetails.vue')
    },    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;