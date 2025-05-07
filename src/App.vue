<script setup>
import SiteNavbar from './components/SiteNavbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <SiteNavbar />
    <main class="p-6">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
main {
  min-height: 100vh;
  background-color: #f9fafb;
}
</style>
