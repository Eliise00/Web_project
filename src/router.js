import FoodGallery from '@/page/Food.vue'
import RecipeDetails from '@/page/Recipe.vue'


const routes = [
    {
        path: '/',
        component: FoodGallery,
    },
    {
        path: '/RecipeDetails',
        name: 'RecipeDetails',
        component: RecipeDetails,
        props: true,
    },
]

export default routes