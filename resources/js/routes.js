import VueRouter from "vue-router";
import Example2 from "./components/Example2";
import Bookables from "./bookables/Bookables";

const routes = [
  {
    path: "/",
    name: "home",
    component: Bookables
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