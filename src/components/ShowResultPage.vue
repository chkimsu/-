<template>
    <div>
      <h1>Vuex Test with Composition API</h1>
      {{test}}
      <br>
      '금융 상속 재산 : ' {{ testResult }}
    </div>
  </template>
  
  <script>
  import { computed } from "vue";
  import { useStore } from "vuex";
  
  export default {
    setup() {
      const store = useStore();
      const test = computed(() => store.state.datafromChild);
      const testResult = computed(() => store.state.datafromChild['금융 상속 재산 :']);
      return {test, testResult}
    }
  }
  </script>
  
  <style>
  </style>
