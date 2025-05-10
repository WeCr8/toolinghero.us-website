<template>
  <header class="navbar">
    <div class="container flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center">
        <img :src="logo" alt="Tooling Hero Logo" class="logo-md" />
      </RouterLink>

      <!-- Navigation -->
      <nav class="flex items-center gap-6 ml-auto">
        <RouterLink to="/" exact-active-class="active-link" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" exact-active-class="active-link" class="nav-link">About</RouterLink>
        <RouterLink to="/dang" exact-active-class="active-link" class="nav-link">DANG</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import logo from '@/assets/logo.png'
</script>
