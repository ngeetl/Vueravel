<template>
  <indicator-component></indicator-component>
  <intro-component></intro-component>
  <team-component></team-component>
  <split-component></split-component>
  <culture-component></culture-component>
  <snap-component></snap-component>
  <history-component></history-component>
  <map-component></map-component>
  <contact-component></contact-component>
  <footer-component></footer-component>
  <recruit-icon-component></recruit-icon-component>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import RecruitIconComponent from '../components/RecruitIconComponent.vue';
import IntroComponent from '../components/IntroComponent.vue';
  
 export default {
  name: 'HomeComponent',
  components: {
    IntroComponent,
    SnapComponent: defineAsyncComponent(() => import('../components/SnapComponent.vue')),
    CultureComponent: defineAsyncComponent(() => import('../components/CultureComponent.vue')),
    TeamComponent: defineAsyncComponent(() => import('../components/TeamComponent.vue')),
    MapComponent: defineAsyncComponent(() => import('../components/MapComponent.vue')),
    HistoryComponent: defineAsyncComponent(() => import('../components/HistoryComponent.vue')),
    FooterComponent: defineAsyncComponent(() => import('../components/FooterComponent.vue')),
    ContactComponent: defineAsyncComponent(() => import('../components/ContactComponent.vue')),
    SplitComponent: defineAsyncComponent(() => import('../components/SplitComponent.vue')),
    IndicatorComponent: defineAsyncComponent(() => import('../components/IndicatorComponent.vue')),
    RecruitIconComponent,
  }
};
</script>


<style>

</style>