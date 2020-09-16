import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";

const routes = [
  {
    path: "/",
    name: "home",
    component: ExampleComponent
  }
];

const router = new VueRouter({
  routes
});

export default router;