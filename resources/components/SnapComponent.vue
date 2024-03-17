<template>
    <div class="container mx-auto snap py-20 xl:px-60 min-h-1vh flex-col justify-center items-center bg-gray-100">

        <div class="text-lg font-thin">
            <div class="text-4xl font-sans font-thin"><span class="font-bold">SANDBURG</span> SOLUTION</div>
            <div>
                샌드버그는 온라인 사장님들의 커머스 운영 난이도를 완화하기 위해 “스냅” 솔루션을 출시했습니다.
                <div>snapshop.kr</div>
            </div>
        </div>

        <div class="flex items-center my-10">

            <div class="w-full">
                <ul class="snap-list text-lg">
                    <li>‣ 온라인 커머스 개설을 위한 행정처리 (사업자등록 등) 자동화 제공</li>
                    <li>‣ 다중 커머스 입접 자동화 제공</li>
                    <li>‣ 다중 커머스 상품 등록 및 관리 대시보드 제공</li>
                </ul>
            </div>

            <div class="flex justify-center items-center mx-8">
                <div class="w-60 h-60 flex justify-center items-center">
                    <img class="w-40 bounce" src="https://snapshop.kr/themes/snap/snap/img/SnapMain/snap-3d-icon-lg.png" alt="inquiry-icon">
                </div>
            </div>

            <div class="w-full">
                <ul class="snap-list text-lg">
                    <li>‣ 상세 페이지 제작 솔루션 제공</li>
                    <li>‣ 마진 계산 및 목표 마진 기반 판매가 추천 솔루션 제공</li>
                    <li>‣ 커머스 순위 추적 및 키워드 분석 제공</li>
                </ul>
            </div>


        </div>

        <div>
            
        </div>

        <div>
            샌드버그는 비용적 부담을 완화하는 것이 온라인 사업자를 설득할 수 있는 가장 좋은 방법이라는 것을 알고 있고,
            이러한 점을 활용하여 온라인 사업자를 모으는 것에 힘쓰고 있습니다.
            다수의 온라인 사업자들이 모였을 때, 이들의 데이터를 활용하여 만들어 나가는 BM을 구축하고 있으며,
            데이터를 기반으로 금융 영역에서부터 온라인 사업자의 니즈와 금융사의 니즈를 연결하는 역할을 하고 있습니다.
        </div>

    </div>
</template>

<script>
export default {
name: 'SnapComponent'
}
</script>


<style scoped>
/* list-bg */
.snap-list li {
    background: rgb(255, 192, 31);
    border-radius: 14px;
    padding: 10px 22px;
    margin: 20px auto;
    color: white;
    font-weight: 200;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

/* 바운스 애니메이션 */
.bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(-8%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
        transform: translateY(3%);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}


</style>