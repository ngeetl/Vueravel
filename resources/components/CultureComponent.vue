<template>
    <div class="culture py-20 xl:px-72 h-lvh flex-col justify-center items-center">
        <div class="flex">
            <div class="border-black border-t-[20px] border-b-[20px] flex-1 mr-20 flex-col flex items-center justify-center text-lg noto-serif font-normal text-center leading-[2.5rem] ">
                <!-- <div class="h-[1px] w-1/2 bg-gray-300 mb-3"></div> -->

                <!-- <div>"</div> -->
                <div class="">
                    <div class="font-bold text-2xl mb-5">The Essence is Time</div>
                    시간의 가치를 누구보다 소중하게 생각하며 <br/>
                    효율성 극대화를 통해 시간을 줄일 수 있도록<br/> 
                    돕는 모든 것들을 사랑하고, 만듭니다.
                </div>
                <!-- <div>"</div> -->
            </div>
            <div class="sandburg w-full h-[520px] rounded-3xl relative flex-1">
                <div class="flex w-100vw">
                    <div v-for="(item, idx) of 500" :key="idx" :style="{ left: Math.random() * 100 + '%', animationDuration: Math.random() * 3 + 3.5 + 's' }" class="sand"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'CultureComponent'
}
</script>

<style scoped>
/* 모래시계 */
.sand {
    position: absolute;
    width: 2px;
    height: 2px;
    background-color: #452300e9;
    border-radius: 50%;
    animation: fall ease-out infinite;
    top: 0;
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
</style>