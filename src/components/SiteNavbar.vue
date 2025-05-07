<template>
  <header class="navbar">
    <div class="container">
      <RouterLink to="/" class="logo">Tooling Hero</RouterLink>
      <nav class="nav-links">
        <RouterLink to="/" exact-active-class="active">Home</RouterLink>
        <RouterLink to="/about" exact-active-class="active">About</RouterLink>
        <RouterLink to="/dang" exact-active-class="active">DANG</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  background-color: #1e3a8a; /* Deep blue */
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links a {
  margin-left: 1.25rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #93c5fd;
}

.active {
  border-bottom: 2px solid #fff;
}
</style>
