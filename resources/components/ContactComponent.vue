<template>
    <div ref="event1" class="opacity-0 contact container mx-auto pb-40 xl:px-60 min-h-fit flex-col justify-center items-center ">
        <div class="bg-gray-100 p-10 rounded-xl">
            <div class="text-2xl font-sans font-bold mb-2">
                CONTACT US
            </div>
            <div class=" font-normal">
                <div>
                    채용 문의 | recruit@sandburg.co.kr (051-711-4488)
                </div>
                <div>
                    사업 및 제휴 문의 | contact@sandburg.co.kr (010-2413-4498)
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, onUnmounted } from 'vue';

export default {
    name: 'ContactComponent',
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
/* event */
.event1 {
  animation: event1 2.1s .5s forwards; 
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