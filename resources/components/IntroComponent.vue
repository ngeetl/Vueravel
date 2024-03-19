<template>
    <div class="intro h-lvh relative space px-40">
        <div class="flex h-[90%] justify-center items-center container mx-auto">
            <div ref="event1" class=" opacity-0 text-white absolute txt-shadow font-light">
                <div class=" text-[1.9rem]">
                  Welcome! We're
                </div>
                <div  class=" text-8xl font-bold font-sans">SANDBURG</div>
                <div class=" text-[1.46rem]">
                    국내 유일, 커머스와 핀테크를 잇는 데이터 전문기업 <br/>
                </div>
            </div>
            <div ref="event2" class="absolute opcity-0">
                <dotlottie-player src="https://lottie.host/644d1237-0fb9-4f4b-881c-c6f491c18995/oedx7CtBW3.json" background="transparent" speed=".3" style="opacity: .2; filter: grayscale(100%); width: 550px; height: 550px;" loop autoplay></dotlottie-player>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, onUnmounted } from 'vue';

export default {
  name: 'IntroComponent',
  setup() {
    // observer
    const event1 = ref(null);
    const event2 = ref(null);

    const enventHandler = () => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              event1.value.classList.add('event1');
              event2.value.classList.add('event2');
              observer.unobserve(entry.target); // 더 이상 관찰하지 않음
            }
          });
        });
  
        if (event1.value) {
          observer.observe(event1.value);
        }
    }

    onMounted(() => {
      enventHandler()
    });

    onUnmounted(() => {
      if (observer) {
        observer.disconnect();
      }
    });

    return { event1, event2 }
  }

};
</script>


<style scoped>
/* background */
.space {
    background: linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(15, 13, 13) 35%, rgb(49, 49, 49) 48%, rgb(26, 26, 26) 73%, rgb(0, 0, 0) 100%);
}
 
/* text shadow */
.txt-shadow {
    text-shadow: 2px 2px 16px rgba(23, 23, 23, 0.679);
}

/* event */
.event1 {
  animation: event1 2.1s forwards; 
}
.event2 {
  animation: event2 2.1s forwards; 
}

@keyframes event1 {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes event2 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


</style>