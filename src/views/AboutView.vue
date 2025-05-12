<template>
  <section class="bg-white pt-24 pb-32">
    <div class="container text-center fade-in">
      <!-- About Hero Section -->
      <h1 class="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
        About <span class="text-blue-600">Tooling Hero</span>
      </h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        Built by machinists for machinists — Tooling Hero simplifies and
        standardizes tooling data across CAM, presetters, and ERP systems.
      </p>

      <!-- About Content Box -->
      <div
        class="bg-gray-50 border border-blue-100 p-10 rounded-xl shadow-md max-w-3xl mx-auto text-left"
      >
        <h2 class="text-3xl font-bold text-blue-800 mb-4">
          🛠 What is Tooling Hero?
        </h2>
        <p class="text-gray-700 mb-6 leading-relaxed">
          <strong>Tooling Hero</strong> is a WeCr8 Solutions product that
          empowers manufacturers to build and maintain smart, standardized
          tooling libraries. From naming conventions to digital twin
          consistency, we bridge gaps between software like Zoller, Mastercam,
          and ERP platforms.
        </p>
        <p class="text-gray-700 mb-6 leading-relaxed">
          Our flagship module, <strong>DANG</strong> (Description And Naming
          Generator), removes the guesswork and chaos of unstructured tool data.
          It generates consistent IDs and descriptions so shops can boost
          productivity and reduce programming errors at scale.
        </p>
        <p class="text-gray-700 leading-relaxed">
          Whether you're a small shop beginning your digital journey or a large
          aerospace team syncing across systems, Tooling Hero gives you the
          clarity and tools to scale.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic required
</script>

<style scoped>
/* Keep fade-in effect consistent if reused */
.fade-in {
  animation: fadeIn 0.8s ease-in-out both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
