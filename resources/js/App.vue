<template>
    <intro-component></intro-component>
    <team-component></team-component>
    <split-component></split-component>
    <culture-component></culture-component>
    <snap-component></snap-component>
    <map-component></map-component>
    <history-component></history-component>
    <contact-component></contact-component>
    <footer-component></footer-component>
  </template>
  
  <script>
import ContactComponent from '../components/ContactComponent.vue';
import CultureComponent from '../components/CultureComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import HistoryComponent from '../components/HistoryComponent.vue';
import IntroComponent from '../components/IntroComponent.vue';
import MapComponent from '../components/MapComponent.vue';
import SnapComponent from '../components/SnapComponent.vue';
import SplitComponent from '../components/SplitComponent.vue';
import TeamComponent from '../components/TeamComponent.vue';
  
  export default {
    components: {
        IntroComponent,
        SnapComponent,
        CultureComponent,
        TeamComponent,
        MapComponent,
        HistoryComponent,
        FooterComponent,
        ContactComponent,
        SplitComponent
    }
  };
  </script>

  
  <style>
  
  </style>