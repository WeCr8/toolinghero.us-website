<template>
  <section class="bg-white py-20 px-6">
    <div class="container max-w-2xl mx-auto">
      <div class="card shadow-md rounded-xl">
        <h1 class="text-3xl font-extrabold text-blue-600 mb-6 text-center">
          📬 Contact Us
        </h1>

        <p class="text-base text-gray-700 mb-8 text-center">
          We're here to help. Please reach out with any questions about Tooling
          Hero or DANG.
        </p>

        <!-- Placeholder contact form -->
        <form @submit.prevent class="flex flex-col gap-6">
          <div>
            <label for="name" class="block font-semibold mb-1 text-gray-800"
              >Name</label
            >
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>

          <div>
            <label for="email" class="block font-semibold mb-1 text-gray-800"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label for="message" class="block font-semibold mb-1 text-gray-800"
              >Message</label
            >
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message..."
            ></textarea>
          </div>

          <div class="text-right">
            <button type="submit" class="btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
// Placeholder only – no JS logic yet
</script>
