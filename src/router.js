import Vue from "vue";
import Router from "vue-router";
import Rank from "_c/rank";
import Recommend from "_c/recommend";
import Search from "_c/search";
import Singer from "_c/singer";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/recommend"
    },
    {
      path: "/recommend",
      component: Recommend
    },
    {
      path: "/rank",
      component: Rank
    },
    {
      path: "/singer",
      component: Singer
    },
    {
      path: "/search",
      component: Search
    }
  ]
});
