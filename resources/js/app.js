import { createApp } from 'vue';
import App from './App.vue';
import HeaderComponent from '../components/HeaderComponent.vue';

const app = createApp(App); // App.vue를 루트 컴포넌트로 사용

app.component('header-component', HeaderComponent); // 글로벌 컴포넌트 등록

app.mount('#app');