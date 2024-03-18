<template>
    <div class="indicator">
        <div class=" fixed bg-slate-400 top-0 left-0 h-1 w-0 z-50" :style="{ width: scrollWidth + '%' }"></div>
    </div>
</template>

<script>
import { onMounted, ref, onUnmounted } from 'vue';

export default {
    setup () {
        let scrollWidth = ref(0);

        const scrollUpdate = () => {
            const currentScroll = document.documentElement.scrollTop; // 현재 스크롤 위치에서 top값
            const totalHeight = document.documentElement.scrollHeight; // 페이지 전체 heigt
            const viewportHeight = document.documentElement.clientHeight; // 사용자 화면의 heigt
            const height = totalHeight - viewportHeight; // currentScroll이 top값인데 bottom 값을 알아야 하기 때문에 client height를 빼줌
            const scrolled = (currentScroll / height) * 100; // 현재 위치의 백분율 값

            scrollWidth.value = scrolled;
        }

        onMounted(() => {
            window.addEventListener('scroll', scrollUpdate);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', scrollUpdate);
        });

        return { scrollWidth };
    }
}
</script>

<style>

</style>