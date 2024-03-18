<template>
  <div class="notfoundpage">
      <h1 class="text-9xl">404</h1>
      <p class="text-2xl mt-4 font-normal mb-4">요청하신 페이지를 찾을 수 없습니다.</p>
      <router-link to="/" class="home-link shadow-lg">샌드버그 홈페이지</router-link>
  </div>
</template>

<script>
  
 export default {
  name: 'NotFoundPageComponent',
};
</script>


<style>
.notfoundpage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.home-link {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ffffff;
  color: #2d2d2d;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.home-link:hover {
  background-color: #020202;
  color: #ffffff;
}
</style>