import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";
import Example2 from "./components/Example2";

const routes = [
  {
    path: "/",
    name: "home",
    component: ExampleComponent
  },
  {
    path: "/second",
    name: "second",
    component: Example2
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;