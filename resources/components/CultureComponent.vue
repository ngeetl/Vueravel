<template>
    <div class="bg-gray-100 culturepy-20 px-80 min-h-1vh flex-col justify-center items-center">
        <div>
            <div>SANDBURG CORE-VALUE</div>
            <div>샌드버그가 지향하는 가치들을 소개합니다.</div>
        </div>

        <div class="grid gap-16 grid-cols-2">
            <div class="">
                <div class="sandburg w-full h-[520px] rounded-3xl relative">
                    <div class="flex w-100vw">
                        <div v-for="(item, idx) of 400" :key="idx" :style="{ left: Math.random() * 100 + '%', animationDuration: Math.random() * 3 + 4 + 's' }" class="sand"></div>
                    </div>
                </div>
                <div>
                    <div>본질은 시간입니다.</div>
                    <div>
                        시간의 가치를 누구보다 소중하게 생각하며<br/>
                        효율성 극대화를 통해 시간을 줄일 수 있도록<br/>
                        돕는 모든 것들을 사랑하고, 만듭니다.
                    </div>
                </div>
            </div>
            <div class="">
                <div class="bg-gray-300 w-full h-[520px] rounded-3xl overflow-hidden">
                    <img loading="lazy" src="https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff1bf31d5-349b-441c-8b57-3a4a8601ecf8%2Frishi-WiCvC9u7OpE-unsplash.jpg&amp;blockId=a9ae1248-04dc-40d5-bf2e-9ec55b5aa051">
                </div>
                <div>
                    <div>본질은 시간입니다.</div>
                    <div>
                        시간의 가치를 누구보다 소중하게 생각하며<br/>
                        효율성 극대화를 통해 시간을 줄일 수 있도록<br/>
                        돕는 모든 것들을 사랑하고, 만듭니다.
                    </div>
                </div>
            </div>
            <div class="">
                <div class="bg-gray-300 w-full h-[520px] rounded-3xl overflow-hidden">
                    <img loading="lazy" src="https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8bca5446-d496-41ce-af0e-13aec4178898%2Fzachary-kadolph-hwHHq82Enf0-unsplash.jpg&amp;blockId=ea70bb0a-ec27-4f8a-9bfd-51c92ae48d16">
                </div>
                <div>
                    <div>본질은 시간입니다.</div>
                    <div>
                        시간의 가치를 누구보다 소중하게 생각하며<br/>
                        효율성 극대화를 통해 시간을 줄일 수 있도록<br/>
                        돕는 모든 것들을 사랑하고, 만듭니다.
                    </div>
                </div>
            </div>
            <div class="">
                <div class="bg-gray-300 w-full h-[520px] rounded-3xl overflow-hidden">
                    <img loading="lazy" src="https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe60f12c3-62fd-4a96-8936-10aa0058e6df%2Frohan-makhecha-jw3GOzxiSkw-unsplash.jpg&amp;blockId=d769bfef-33ba-4d48-b38b-1aab70ae9a45">
                </div>
                <div>
                    <div>본질은 시간입니다.</div>
                    <div>
                        시간의 가치를 누구보다 소중하게 생각하며<br/>
                        효율성 극대화를 통해 시간을 줄일 수 있도록<br/>
                        돕는 모든 것들을 사랑하고, 만듭니다.
                    </div>
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
    width: 1.5px;
    height: 1.5px;
    background-color: #e8e8e8;
    border-radius: 50%;
    animation: fall ease-out 6.5s infinite;
    top: 0;
}

.sandburg {
    background: linear-gradient(to bottom, #000000, #111012 50%, #2d2631 75%, #361545 95%, #7517a0 100%);
} 

@keyframes fall {
    0% { top: 0%; opacity: .5; }
    50% { top: 46%; opacity: 1; left: 50%;}
    60% { top: 48%; opacity: 1; left: 50%;}
    100% { top: 100%; opacity: 0.1; }

}
</style>