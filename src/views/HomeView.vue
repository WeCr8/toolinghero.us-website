<template>
  <section class="bg-white pt-24 pb-32">
    <div class="container text-center fade-in">
      <!-- Hero Section -->
      <h1 class="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
        Welcome to <span class="text-blue-600">Tooling Hero</span>
      </h1>
      <p class="text-lg text-gray-600 max-w-xl mx-auto mb-12">
        Empowering manufacturers with smarter tooling workflows — from shop
        floor to digital twin.
      </p>

      <router-link to="/dang" class="btn-primary mb-20 inline-block">
        🚀 Start App
      </router-link>

      <!-- Feature Section: DANG -->
      <div
        class="bg-gray-50 border border-blue-100 p-10 rounded-xl shadow-md max-w-3xl mx-auto"
      >
        <h2 class="text-3xl font-bold text-blue-800 mb-4">🔥 Meet DANG</h2>
        <p class="text-gray-700 mb-8 leading-relaxed">
          <strong>DANG</strong> (Description And Naming Generator) standardizes
          your tooling language across Zoller, Mastercam, and ERP systems —
          cutting confusion and boosting productivity.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link to="/dang" class="btn-primary">
            ⚙️ Launch DANG
          </router-link>
          <router-link to="/about" class="btn-secondary">
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

<style scoped>
@media (max-width: 640px) {
  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 1.75rem;
  }
}
</style>
