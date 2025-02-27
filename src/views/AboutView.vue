<template>
  <div class="about">
    <Graph />
  </div>
</template>

<script setup>
import Graph from '../components/graph/index.vue'

</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
