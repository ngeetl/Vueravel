<template>
    <div class="intro h-lvh relative space px-40">
        <div class="flex h-[90%] justify-center items-center">
            <div class=" text-white absolute txt-shadow">
                <div class=" text-4xl">
                Welcome! We're
                </div>
                <div class=" text-8xl font-bold font-sans">SANDBURG</div>
                <div class=" text-2xl mt-1">
                    국내 유일, 커머스와 핀테크를 잇는 데이터 전문기업 <br/>
                </div>
            </div>
            <div class="absolute">
                <dotlottie-player src="https://lottie.host/644d1237-0fb9-4f4b-881c-c6f491c18995/oedx7CtBW3.json" background="transparent" speed=".3" style="opacity: .1; filter: grayscale(100%); width: 550px; height: 550px;" loop autoplay></dotlottie-player>
            </div>
        </div>
        <!-- 스크롤 버튼 -->
        <div class="flex justify-center"> 
            <button @click="scrollToBottom"><img src="../../public/icon-down.png" class="w-14 pulse over opacity-35" /></button>
        </div>


    </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  name: 'IntroComponent',
  setup() {
    // 스크롤 이벤트
    const scrollToBottom = () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    };

    return { scrollToBottom };
  },
};
</script>


<style scoped>
@keyframes pulse {
  0% {
    transform: scale(1); 
  }
  50% {
    transform: scale(.8); 
  }
  100% {
    transform: scale(1); 
  }
}

.pulse {
  animation: pulse 1.3s infinite; 
}

.over:hover {
    animation: none;
}

.txt-shadow {
    text-shadow: 2px 2px 16px rgba(53, 53, 53, 0.919);
}



</style>