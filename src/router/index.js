// src/router/index.js
/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router';
/* eslint-disable */ 
import MergeAll from '../components/MergeAll.vue'; // 라우터 컴포넌트의 경로에 맞게 수정해야 합니다.


const routes = [
  {
    path: '/',
    name: 'MergeAll',
    component: MergeAll,
  }
  // 다른 라우트들 추가 가능
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
