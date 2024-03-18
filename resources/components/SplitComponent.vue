<template>
    <div class="split">
        <div ref="event1" class="opacity-0 h-[17rem] overflow-hidden">
            <div  class="text-white bg h-[17rem] flex flex-col justify-center items-center">
                <div class=" text-4xl font-sans font-thin"><span class="font-bold">SANDBURG</span> INVESTMENT</div>
                <div class="text-xl font-thin">블루포인트파트너스 투자 유치 이후 팁스 일반형 선정</div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, onUnmounted } from 'vue';


export default {
    name: 'SplitComponent',
    setup() {
    // observer
    const event1 = ref(null);

    const enventHandler = () => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              event1.value.classList.add('event1');
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

    return { event1 }
  }
}
</script>


<style scoped>
/* background */
.bg {
    background-image: url("../../public/componentBG.jpg");
    background-size: cover;
}

/* event */
.event1 {
  animation: event1 1.2s forwards; 
}

@keyframes event1 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


</style>