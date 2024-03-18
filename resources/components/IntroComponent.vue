<template>
    <div ref="observedElement" class="intro h-lvh relative space px-40">
        <div class="flex h-[90%] justify-center items-center container mx-auto">
            <div ref="event1" class=" text-white absolute txt-shadow font-light">
                <div class=" text-3xl">
                  Welcome! We're
                </div>
                <div  class=" text-8xl font-bold font-sans">SANDBURG</div>
                <div class=" text-2xl mt-1">
                    국내 유일, 커머스와 핀테크를 잇는 데이터 전문기업 <br/>
                </div>
            </div>
            <div ref="event2" class="absolute">
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
    const observedElement = ref(null);
    const event1 = ref(null);
    const event2 = ref(null);

    const enventHandler = () => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              event1.value.classList.add('fadeIn-up');
              event2.value.classList.add('fadeIn-down');
              observer.unobserve(entry.target); // 더 이상 관찰하지 않음
            }
          });
        });
  
        if (observedElement.value) {
          observer.observe(observedElement.value);
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

    return { observedElement, event1, event2 }
  },

};
</script>


<style scoped>
/* background */
.space {
    background: linear-gradient(180deg, rgba(16,0,41,1) 0%, rgba(23,50,122,1) 35%, rgb(88, 103, 189) 48%, rgb(20, 24, 100) 73%, rgb(5, 0, 18) 100%);
}
 
/* text shadow */
.txt-shadow {
    text-shadow: 2px 2px 16px rgba(23, 23, 23, 0.679);
}

/* event */
.fadeIn-up {
  animation: fadeIn-up 2.1s forwards; 
}
.fadeIn-down {
  animation: fadeIn-down 2.1s forwards; 
}

@keyframes fadeIn-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeIn-down {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


</style>