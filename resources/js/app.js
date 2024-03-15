import { createApp } from 'vue';
import App from './App.vue';
import './bootstrap';
import '../css/app.css'


const app = createApp(App); // App.vue를 루트 컴포넌트로 사용


app.mount('#app');