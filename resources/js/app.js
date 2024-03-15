import { createApp } from 'vue';
import App from './App.vue';
import './bootstrap';
import '../css/app.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons' // 사용할 아이콘 import
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronDown) // 사용할 아이콘을 library에 추가


const app = createApp(App); // App.vue를 루트 컴포넌트로 사용

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app');