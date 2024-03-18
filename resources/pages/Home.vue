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
</template>

<script>
import ContactComponent from '../components/ContactComponent.vue';
import CultureComponent from '../components/CultureComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import HistoryComponent from '../components/HistoryComponent.vue';
import IndicatorComponent from '../components/IndicatorComponent.vue';
import IntroComponent from '../components/IntroComponent.vue';
import MapComponent from '../components/MapComponent.vue';
import SnapComponent from '../components/SnapComponent.vue';
import SplitComponent from '../components/SplitComponent.vue';
import TeamComponent from '../components/TeamComponent.vue';
  
 export default {
  name: 'HomeComponent',
  components: {
      IntroComponent,
      SnapComponent,
      CultureComponent,
      TeamComponent,
      MapComponent,
      HistoryComponent,
      FooterComponent,
      ContactComponent,
      SplitComponent,
      IndicatorComponent,
  }
};
</script>


<style>

</style>