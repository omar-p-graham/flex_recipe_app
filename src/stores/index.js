// stores/counter.js
import { defineStore } from 'pinia'
import axiosInstance from '../axios-defaults';

export const kitchenStore = defineStore('recipes', {
    state: () => (
        {
            letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
            darkTheme: false,
            theMeals: [],
            areas: [],
            categories: [],
            ingredients: [],
            mealsByIngredient: []
        }
    ),
    actions: {
        async getMeals(letter){
            try {
                const response = await axiosInstance(`/search.php?f=${letter}`)
                if(response.data.meals){
                    for(let x=0; x<response.data.meals.length;x++){
                        this.theMeals.push(response.data.meals[x])
                    }
                }
            } catch (error) {
                console.log(error)
            }
        },
        async getAreas(){
            for(let x=0;x<this.theMeals.length;x++){
                if(!this.areas.includes(this.theMeals[x].strArea)){
                    this.areas.push(this.theMeals[x].strArea)
                }
            }
            this.areas = this.areas.filter(area => area!=='Unknown').sort()
            this.areas.push('Unknown')
        },
        async getCategories(){
            for(let x=0;x<this.theMeals.length;x++){
                if(!this.categories.includes(this.theMeals[x].strCategory)){
                    this.categories.push(this.theMeals[x].strCategory)
                }
            }
            this.categories.sort()
        },
        async getIngredients(){
            for(let x=0;x<this.theMeals.length;x++){
                for(let y=1;y<=20;y++){
                    if(this.theMeals[x][`strIngredient${y}`] && !this.ingredients.includes(this.theMeals[x][`strIngredient${y}`].toLowerCase())){
                        this.ingredients.push(this.theMeals[x][`strIngredient${y}`].toLowerCase())
                    }
                }
            }
            this.ingredients.sort()
        },
        scanByIngredient(ing){
            this.mealsByIngredient = [] //reset variable
            let ings //store the ingredients after scanning 
            for(let x=0;x<this.theMeals.length;x++){
                ings = []
                for(let y=1;y<=20;y++){
                    if(this.theMeals[x][`strIngredient${y}`] && !ings.includes(this.theMeals[x][`strIngredient${y}`].toLowerCase())){
                        ings.push(this.theMeals[x][`strIngredient${y}`].toLowerCase())
                    }
                }
                if(ings.includes(ing)){this.mealsByIngredient.push(this.theMeals[x])}
            }
        },
        async initialize(){
            this.theMeals = []
            for(let x = 0; x<this.letters.length; x++){
                this.getMeals(this.letters[x])
            }
        },
        shuffle: (array) => { 
            return array.sort(() => Math.random() - 0.5); 
        },
        capitalize: (string) => {
            return string && string[0].toUpperCase() + string.slice(1);
        }
    },
    persist: {
        paths: ['theMeals','darkTheme'], // Only store 'theMeals' and 'darkTheme' state to the session storage
        storage: sessionStorage, // data in sessionStorage is cleared when the page session ends.
    },
})