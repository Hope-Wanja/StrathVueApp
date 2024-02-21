import {createRouter, createWebHistory} from 'vue-router'

import HomePage from "@/components/Homepage.vue"
import AboutUs from "@/components/AboutUs.vue"
import ContactUs from "@/components/ContactUs.vue"
import Courses from "@/components/Courses.vue"
import Events from "@/components/Events.vue"
import Library from "@/components/Library.vue"
import Partnership from "@/components/Partnerships.vue"
import Alumni from "@/components/Alumni.vue"

const routes =[
    {
        path:'/homepage',
        name:'homepage',
        component: HomePage,
    },
    {
        path:'/events',
        name:'events',
        component: Events,
    },
    {
        path:'/contactus',
        name:'contactus',
        component: ContactUs,
    },
    {
        path:'/courses',
        name:'courses',
        component: Courses,
    },
    {
        path:'/library',
        name:'library',
        component: Library,
    },
    {
        path:'/partnerships',
        name:'partnerships',
        component: Partnership,
    },
    {
        path:'/alumni',
        name:'alumni',
        component: Alumni,
    },
    {
        path:'/aboutus',
        name:'aboutus',
        component: AboutUs,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router