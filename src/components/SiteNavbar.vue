<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container flex justify-between items-center py-4">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center">
        <img :src="logo" alt="Tooling Hero Logo" class="h-10 w-auto" />
      </RouterLink>

      <!-- Navigation Links -->
      <nav class="flex items-center gap-6">
        <RouterLink to="/" exact-active-class="active-link" class="nav-link"
          >Home</RouterLink
        >
        <RouterLink
          to="/about"
          exact-active-class="active-link"
          class="nav-link"
          >About</RouterLink
        >
        <RouterLink to="/dang" exact-active-class="active-link" class="nav-link"
          >DANG</RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import logo from "@/assets/logo.png";
</script>

<style scoped>
.nav-link {
  color: #1f2937; /* Gray-800 */
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #2563eb; /* Blue-600 */
}

.active-link {
  border-bottom: 2px solid #2563eb;
  color: #2563eb;
}
</style>
