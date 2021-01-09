import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Servicios from "../views/Servicios.vue";
import Nosotros from "../views/Nosotros.vue";
import Contacto from "../views/Contacto.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/servicios",
    name: "Servicios",
    component: Servicios,
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    component: Nosotros,
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
