<template>
    <div class="team container mx-auto py-28 xl:px-72 min-h-fit flex-col justify-center items-center bg-slate-50">
        <div class="tag-cloud flex justify-end relative font-thin">
            <div class="tag w-60 h-60 top-10 right-20 bg-slate-900 text-3xl"><div>Data</div></div>
            <div class="tag w-36 h-36 -top-8 -right-8 bg-slate-400"><div>시간</div></div>
            <div class="tag w-20 h-20 top-8 right-[18.8rem] bg-slate-600"><div>언더독</div></div>
            <div class="tag w-36 h-36 top-44 right-[19rem] bg-slate-500"><div>부적응자</div></div>
            <div class="tag w-24 h-24 top-[17rem] right-[13.5rem] bg-slate-700"><div>변화</div></div>
            <div class="tag w-28 h-28 top-32 -right-10 bg-slate-400"><div>BM</div></div>
            <div class="tag w-24 h-24 top-60 right-8 bg-slate-300 text-sm"><div>물음표</div></div>
        </div>
        <div class=""> 
            <div class="mb-7">
                <div class="font-sans text-2xl">WE DATA</div>
                    <div>
                        우리가 뛰어나다는 것을 증명하는 많은 수단이 있지만,<br/>
                        우리는 데이터로 그것을 증명하고<br/>
                        데이터로 세상을 효율적으로 만들어갑니다.
                    </div>
            </div>
            <div class="mb-7">
                <div class="font-sans text-2xl">WE ARE UNDERDOG</div>
                <div>
                    언더독 마인드셋을 기반으로,<br/>
                    실패를 두려워않는 사람들을 사랑합니다.
                </div>
            </div>
            <div class="mb-5">
                <div class="font-sans text-2xl">WE ARE DJDJD</div>
                <div>
                    불편함 속에 물음을 던지고,<br/>
                    본질을 파헤치는 과정을 즐기고 사랑하며,<br/>
                    변화를 만들어내는 조직입니다
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeamComponent',

    setup () {
      
    }
}
</script>


<style scoped>

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

.tag:hover {
    opacity: .9;
    
}


</style>