<template>
    <div class="culture container py-20 xl:px-72 h-lvh flex-col justify-center items-center">
        <div class="flex">

            <div ref="event1" class="opacity-0 border-black border-t-[20px] border-b-[20px] flex-1 mr-20 flex-col flex items-center justify-center text-lg noto-serif font-normal text-center leading-[2.5rem] ">
                <div class="">
                    <div class="font-bold text-2xl mb-5">The Essence is Time</div>
                    시간의 가치를 누구보다 소중하게 생각하며 <br/>
                    효율성 극대화를 통해 시간을 줄일 수 있도록<br/> 
                    돕는 모든 것들을 사랑하고, 만듭니다.
                </div>
            </div>

            <div ref="event2" class="opacity-0 sandburg w-full h-[520px] rounded-3xl relative flex-1">
                <div class="flex w-100vw">
                    <div v-for="(item, idx) of 300" :key="idx" :style="{ left: Math.random() * 100 + '%', animationDuration: Math.random() * 3 + 3.5 + 's' }" class="sand"></div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { onMounted, ref, onUnmounted } from 'vue';

export default {
    name: 'CultureComponent',
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
}

</script>

<style scoped>
/* 모래시계 */
.sand {
    position: absolute;
    width: 2px;
    height: 6px;
    background-color: #452300e9;
    border-radius: 50%;
    animation: fall ease-out infinite;
    top: 0;
    will-change: top, opacity, left;
}


.sandburg {
    background: linear-gradient(to bottom, #74562c, #caa97b 50%, #dfb56c 75%, #523400 94%, #2f1e00 100%);
} 

@keyframes fall {
    0% { top: 0%; opacity: .5; }
    50% { top: 46%; opacity: 1; left: 50%;}
    60% { top: 50%; opacity: 1; left: 50%;}
    100% { top: 100%; opacity: 0.1; }

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
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes event2 {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>