import { createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    {
      path: "/",
      redirect: "/home"
    },
    {
      path:"/home",
      component: ()=>import("../views/home/HomeView.vue")
    },
    {
      path:"/favor",
      component: ()=>import("../views/favor/FavorView.vue")      
    },
    {
      path:"/order",
      component: ()=>import("../views/order/OrderView.vue")      
    },
    {
      path:"/message",
      component: ()=>import("../views/message/MessageView.vue")      
    }
  ]
})

export default router;