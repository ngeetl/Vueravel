<template> 
    <div class="history py-20 xl:px-72 min-h-screen flex flex-col justify-center">

        <div class="text-base font-base flex flex-col justify-center items-center border-[1px] border-gray-300 rounded-3xl px-3 py-5 mb-5">
            <div class="text-4xl font-sans font-thin"><span class="font-bold">SANDBURG</span> HISTORY</div>
            <div class="text-center mt-1 text-lg">
                샌드버그의 시작부터 현재까지, 저희가 걸어온 길을 만나보세요
            </div>
        </div>

        <div class="py-6" v-for="(item, year) in companyHistory" :key="year">
            <h1 class="text-2xl font-bold">{{ year }}</h1>
            <div v-for="(event, idx) in item" :key="idx" class="my-4 flex items-center">

                <div class="flex items-center justify-end pr-5">
                    <span class="w-12 text-lg font-semibold">{{ event.date }}</span>
                </div>

                <div class="mx-3 h-10 w-1 bg-gray-300"></div>

                <div class="bg-[#cee2f8] p-4 rounded-lg shadow-md pl-5">
                    <div class=" font-normal text-gray-600">{{ event.description }}</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HistoryComponent',

    setup() {
        const companyHistory = {
            '2023년': [
                { date: '10월', description: 'TIPS 일반형 선정 ' },
                { date: '9월', description: '소상공인 행정처리 자동화 솔루션 “SNAP” 출시 ' },
                { date: '8월', description: '스마트서비스 지원사업 선정' },
                { date: '3월', description: '부산광역시 기술창업기업 인증 (브라이트클럽)' },
                { date: '1월', description: '블루포인트파트너스 시드 투자 유치' },
            ],
            '2022년': [
                { date: '11월', description: '다올벤처챌린지 우수상 수상 (상금 2,000만 원)' },
                { date: '9월', description: '매출 채권 분석 기반 당일정산 솔루션 “크레닷” 출시' },
                { date: '5월', description: 'Google for Startup x Sparklabs 선정 및 수료' },
                { date: '4월', description: 'BEF 5기 선정' },
                { date: '3월', description: '청년창업사관학교 투자특화형 선정 및 수료' },
                { date: '2월', description: '신용보증기금 NEST 11기 선정' },
            ],
            '2021년': [
                { date: '12월', description: '스타벅스 x 중소벤처기업부 창업챌린지 최우수상 수상 (서울창조경제혁신센터장상 수상)' },
                { date: '11월', description: '부스타락셀 2021 최우수상 수상 (부산중소벤처기업청장상)' },
                { date: '10월', description: '주식회사 샌드버그 법인 설립' },
                { date: '6월', description: 'U-300 교육부 장관 인증' },
                { date: '4월', description: '2021 예비창업패키지 일반분야 선정 및 수료' },
                { date: '3월', description: '사회적기업가 육성사업 선정 및 수료' },
                { date: '2월', description: 'IP 디딤돌 선정' },
                { date: '1월', description: '실리콘벨리 창업연수 선정 및 수료' },
            ],
        };


        return { companyHistory }
    }
}
</script>


<style scoped>

</style>