<template>
  <section class="bg-white pt-24 pb-32">
    <div class="container text-center fade-in">
      <!-- DANG Hero Section -->
      <h1 class="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
        Meet <span class="text-blue-600">DANG</span>
      </h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        The <strong>Description And Naming Generator</strong> that brings order
        to your tooling chaos. Eliminate guesswork, reduce errors, and align
        teams from shop floor to ERP.
      </p>

      <!-- Feature Block -->
      <div
        class="bg-gray-50 border border-blue-100 p-10 rounded-xl shadow-md max-w-3xl mx-auto text-left"
      >
        <h2 class="text-3xl font-bold text-blue-800 mb-4">⚙️ What DANG Does</h2>
        <ul class="text-gray-700 leading-relaxed space-y-4 list-disc pl-6">
          <li>
            <strong>Standardizes tooling descriptions</strong> across Zoller,
            Mastercam, and ERP systems
          </li>
          <li>
            <strong>Eliminates human error</strong> with repeatable, structured
            naming formulas
          </li>
          <li>
            <strong>Reduces setup and programming delays</strong> by making
            tools easy to identify and verify
          </li>
          <li>
            <strong>Improves communication</strong> across engineering,
            programming, and shop floor teams
          </li>
        </ul>

        <p class="mt-8 text-gray-600">
          Built for real-world shops and scalable to enterprise operations —
          DANG is your first step toward smarter tooling.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a
            href="https://dang.toolinghero.us"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
          >
            🚀 Launch DANG Now
          </a>
          <a
            href="https://github.com/WeCr8"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary"
          >
            📁 View Documentation
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed for now
</script>

<style scoped>
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
