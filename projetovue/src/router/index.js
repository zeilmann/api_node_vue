import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import allMovies from '../views/allMovies.vue'
import searchClient from '../views/searchClient.vue'
import searchMoviebyname from '../views/searchMoviebyname.vue'
import movieregister from '../views/registerMovie.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  
  {
    path: '/searchMoviebyname',
    name: 'searchMovietbyname',
    component: searchMoviebyname
  },

  {
    path: '/movieregister/',
    name: 'movieregister',
    component: movieregister

  },

  {
    path: '/allmovies/',
    name: 'allmovies',
    component: allMovies

  },

  {
    path: '/searchclient/',
    name: 'searchclient',
    component: searchClient

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
