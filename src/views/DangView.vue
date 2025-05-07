<template>
  <section class="max-w-5xl mx-auto py-12 px-6 space-y-12">
    <h1 class="text-5xl font-bold text-blue-900">Meet DANG: Description and Naming Generator</h1>

    <!-- Why DANG -->
    <div class="space-y-4">
      <h2 class="text-3xl font-semibold text-blue-800">🧠 Why use DANG?</h2>
      <p class="text-gray-700 text-lg">
        Naming tools inconsistently across CAM software, presetters, and ERP systems creates confusion,
        errors, and wasted time. Tool libraries become a mess, programmers can't find what they need,
        and operators have to guess.
      </p>
      <p class="text-gray-600">
        <strong>DANG</strong> eliminates the chaos by generating clean, human-readable, and
        machine-consistent tool names and descriptions — every single time.
      </p>
    </div>

    <!-- How DANG Works -->
    <div class="space-y-4">
      <h2 class="text-3xl font-semibold text-blue-800">⚙️ How does DANG work?</h2>
      <p class="text-gray-700 text-lg">
        DANG uses structured formulas and dropdown inputs tailored to your tooling environment.
        Whether you're working in Mastercam, using Zoller TMS, or exporting to an ERP system,
        DANG builds the name and description using consistent formatting and terminology.
      </p>
      <ul class="list-disc list-inside text-gray-600">
        <li>Choose tool type, diameter, flute count, coating, holder, and more</li>
        <li>Auto-generates a full ID and description instantly</li>
        <li>Output formats for Zoller, Mastercam, Excel, or custom needs</li>
      </ul>
    </div>

    <!-- Benefits -->
    <div class="space-y-4">
      <h2 class="text-3xl font-semibold text-blue-800">🚀 Benefits</h2>
      <ul class="list-disc list-inside text-gray-700 text-lg">
        <li>Standardize tool names across your shop floor</li>
        <li>Reduce errors in CAM and setup sheets</li>
        <li>Speed up programming and tool selection</li>
        <li>Integrate seamlessly with Zoller TMS and presetters</li>
        <li>Easy to train new programmers and machinists</li>
      </ul>
    </div>

    <!-- CTA -->
    <div class="mt-10 p-6 bg-blue-50 border border-blue-200 rounded-lg text-center">
      <h3 class="text-2xl font-bold text-blue-900 mb-2">Ready to bring order to your tool libraries?</h3>
      <p class="text-gray-700 mb-4">Start using DANG and experience how smart tooling should feel.</p>
      <router-link to="/contact" class="btn">Request Access to DANG</router-link>
    </div>
  </section>
</template>

<script setup>
// No logic needed for now — static content
</script>

<style scoped>
/* Reuse global btn style if defined in main.css */
</style>
