<template>
  <section class="max-w-4xl mx-auto py-12 px-6">
    <h1 class="text-5xl font-bold text-blue-900 mb-6">Welcome to Tooling Hero</h1>

    <p class="text-lg text-gray-700 leading-relaxed">
      Your smart tooling companion for modern manufacturing. Tooling Hero helps machinists, programmers,
      and manufacturers eliminate guesswork by standardizing tool descriptions, IDs, and processes.
    </p>

    <div class="mt-8 bg-white shadow-md rounded-lg p-6 border border-blue-100">
      <h2 class="text-2xl font-semibold text-blue-800 mb-4">🔥 Introducing DANG</h2>
      <p class="text-gray-600">
        <strong>DANG</strong> — our <em>Description And Naming Generator</em> — lets you build
        consistent tool IDs and descriptions in seconds. Perfect for Zoller, Mastercam, and ERP integrations.
      </p>
      <router-link to="/about" class="inline-block mt-6 text-blue-700 hover:underline font-medium">
        Learn more →
      </router-link>
    </div>
  </section>
</template>

<script setup>
// No logic required for this view
</script>

<style scoped>
@media (max-width: 640px) {
  section {
    padding: 2rem 1rem;
  }
}
</style>
