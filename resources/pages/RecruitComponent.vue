<template>
  <div class="bg-white">
    <!-- nav -->
    <div class="w-full container p-4 fixed top-0 left-0 bg-white">
      <a href="/">SANDBURG Inc.</a>
    </div>

    <div class="recruit container py-32 xl:px-72 min-h-fit flex-col justify-center items-center">

      <h1 class="text-4xl font-bold border-b-[2px] border-stone-300 pb-2 mb-14"><span class=" text-stone-400">SANDBURG</span> RECRUIT</h1>

      <!-- welfare -->
      <div class="">
        <div class="flex mb-6">
          <div class="mr-3 mt-1 min-h-fit w-1 bg-stone-400"></div>
          <h2 class=" text-3xl font-normal text-stone-400">WELFARE</h2>
        </div>

        <div class=" grid grid-cols-2 gap-8">

          <div class="">
            <div class="mb-1 text-lg">샌드버그 의류 지원</div>
            <div class="bg-gray-100 p-5 rounded-sm font-normal">
              <p>👗 샌드버그 의류를 지원합니다.</p> 
              <p class="mt-2 ml-8">✔️ 100% 리사이클링 반팔, 아우터 제공</p>
            </div>
          </div>

          <div class="">
            <div class="mb-1 text-lg">아낌 없는 성장 지원</div>
            <div class="bg-gray-100 p-5 rounded-sm font-normal">
              <p>✍🏻 성장을 도와줍니다.</p> 
              <p class="mt-2 ml-8">✔️ 도서비&500만 원 상당 교육 제공</p>
            </div>
          </div>

          <div class="">
            <div class="mb-1 text-lg">업무 장비 지원</div>
            <div class="bg-gray-100 p-5 rounded-sm font-normal">
              <p>🖥️ 아낌없이 지원합니다.</p> 
              <p class="mt-2 ml-8">✔️ 최신 IT 장비 제공</p>
            </div>
          </div>

          <div class="">
            <div class="mb-1 text-lg">간식 및 식대 지원</div>
            <div class="bg-gray-100 p-5 rounded-sm font-normal">
              <p>🍴 마르지 않는 간식을 지원합니다.</p> 
              <p class="mt-2 ml-8">✔️ 무제한 간식 제공</p>
            </div>
          </div>

        </div>
      </div>

      <!-- pilot -->
      <div>
        <div class="flex mb-6 mt-20">
          <div class="mr-3 mt-1 min-h-fit w-1 bg-stone-400"></div>
          <h2 class=" text-3xl font-normal text-stone-400">PILOT</h2>
        </div>

        <div class="bg-gray-100 p-5 rounded-sm font-normal">
          <p>샌드버그 팀은 회사, 그리고 동료들과 함께 성장하고자 합니다. 실력과 열정이 가득한 샌드버그의 파일럿을 소개합니다!</p> 
        </div>
      </div>

      <!-- recruit -->
      <div>
        <div class="flex mb-6 mt-20">
          <div class="mr-3 mt-1 min-h-fit w-1 bg-stone-400"></div>
          <h2 class=" text-3xl font-normal text-stone-400">RECRUIT</h2>
        </div>

        <div>
          <div class="mb-14">
            <div class="mb-2 text-lg">G&A (General & Administartion) Team</div>
            <div class="grid grid-cols-3 gap-10">
                <RecruitBoxComponent title="untitle"></RecruitBoxComponent>
            </div>
          </div>

          <div class="mb-14">
            <div class="mb-2 text-lg">R&D (Research & Development) Team</div>
            <div class="grid grid-cols-3 gap-10">
              <RecruitBoxComponent title="Frontend Engineer"></RecruitBoxComponent>
              <RecruitBoxComponent title="Backend Engineer"></RecruitBoxComponent>
              <RecruitBoxComponent title="시니어 Backend Engineer"></RecruitBoxComponent>
            </div>
          </div>
    
          <div>
            <div class="mb-2 text-lg">S&M (Sales & Marketing) Team</div>
            <div class="grid grid-cols-3 gap-10">
              <RecruitBoxComponent title="untitle"></RecruitBoxComponent>
            </div>
          </div>

        </div>
      </div>

    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';
import RecruitBoxComponent from '../components/RecruitBoxComponent.vue';

  
 export default {
  name: 'RecruitComponent',
  components: { RecruitBoxComponent, FooterComponent }
};
</script>


<style>

</style>