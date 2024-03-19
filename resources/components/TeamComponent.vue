<template>
    <div class="team container mx-auto py-28 xl:px-72 min-h-fit flex-col justify-center items-center bg-slate-50">
        <div ref="event1" class="opacity-0 tag-cloud flex justify-end relative font-light">
            <div class="tag w-[25rem] h-[25rem] top-0 right-2 bg-slate-200 text-3xl"><div></div></div>
            <div class="tag w-[22rem] h-[22rem] top-3 right-6 bg-slate-300 text-3xl"><div></div></div>

            <div class="tag w-60 h-60 top-10 right-20 bg-slate-900 text-3xl"><div>DATA</div></div>
            <div class="tag w-36 h-36 -top-3 -right-10 bg-slate-400"><div>시간</div></div>
            <div class="tag w-24 h-24 top-8 right-[19.2rem] bg-slate-400"><div>언더독</div></div>
            <div class="tag w-36 h-36 top-[10.3rem] right-[19.5rem] bg-slate-500 text-lg"><div>부적응자</div></div>
            <div class="tag w-[6.4rem] h-[6.4rem] top-[17rem] right-[14rem] bg-slate-700"><div>변화</div></div>
            <div class="tag w-28 h-28 top-[8.3rem] -right-10 bg-slate-400"><div>BM</div></div>
            <div class="tag w-24 h-24 top-60 right-8 bg-slate-300 text-sm"><div>물음표</div></div>
        </div>

        <div ref="event2" class=" opacity-0"> 
            <div class="mb-7">
                <div class="w-1/2 mb-1 text-end text-gray-400 font-normal text-xl">샌드버그를 소개합니다</div>
                <div class="h-[1px] w-1/2 bg-gray-300 mb-3"></div>
                <div class="font-sans text-2xl mb-2">WE PROVE OURSELVES WITH DATA</div>
                    <div class="text-[1.05rem] font-normal">
                        우리가 뛰어나다는 것을 증명하는 많은 수단이 있지만,<br/>
                        우리는 데이터로 그것을 증명하고<br/>
                        데이터로 세상을 효율적으로 만들어갑니다.
                    </div>
            </div>
            <div class="mb-7">
                <div class="font-sans text-2xl mb-2">WE ARE UNDERDOG</div>
                <div class="text-[1.05rem] font-normal">
                    언더독 마인드셋을 기반으로,<br/>
                    실패를 두려워않는 사람들을 사랑합니다.
                </div>
            </div>
            <div class="mb-5">
                <div class="font-sans text-2xl mb-2">WE ARE MISFITS</div>
                <div class="text-[1.05rem] font-normal">
                    불편함 속에 물음을 던지고,<br/>
                    본질을 파헤치는 과정을 즐기고 사랑하며,<br/>
                    변화를 만들어내는 조직입니다
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, onUnmounted } from 'vue';

export default {
    name: 'TeamComponent',

    setup () {
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
/* tag */
.tag {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 50%;
    opacity: .5;
    color: aliceblue;
    transition-duration: 1.2s;    
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
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes event2 {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}



</style>