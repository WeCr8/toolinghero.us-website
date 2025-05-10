<template>
  <section class="bg-white pt-24 pb-32">
    <div class="container text-center fade-in">
      <!-- Hero Section -->
      <h1 class="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
        Welcome to <span class="text-blue-600">Tooling Hero</span>
      </h1>
      <p class="text-lg text-gray-600 max-w-xl mx-auto mb-12">
        Empowering manufacturers with smarter tooling workflows — from shop floor to digital twin.
      </p>

      <!-- Start App Button (external) -->
      <div class="mb-20">
        <a href="https://dang.toolinghero.us" target="_blank" rel="noopener noreferrer" class="btn-primary">
          🚀 Start App
        </a>
      </div>

      <!-- DANG Section -->
      <div class="bg-gray-50 border border-blue-100 p-10 rounded-xl shadow-md max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-blue-800 mb-4">🔥 Meet DANG</h2>
        <p class="text-gray-700 mb-8 leading-relaxed">
          <strong>DANG</strong> (Description And Naming Generator) standardizes your tooling language across Zoller, Mastercam, and ERP systems — cutting confusion and boosting productivity.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <!-- External Link -->
          <a href="https://dang.toolinghero.us" target="_blank" rel="noopener noreferrer" class="btn-primary">
            ⚙️ Launch DANG
          </a>

          <!-- Internal Route to DangView.vue -->
          <router-link to="/dang" class="btn-secondary">
            📘 Learn More
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed
</script>
