<script setup>

import { RouterView } from 'vue-router';

</script>

<template>
  <div class="flex flex-col h-screen bg-blue-100">
    <header class="flex items-center justify-between px-4 py-2 bg-[#ffdcbb] shadow-md">
      <div class="flex items-center space-x-4">
        <RouterLink to="/">
          <img src="/src/assets/Junipra_logo.svg" alt="Junipra Logo" class="h-16 w-16" />
          <span class="text-3xl font-mystery text-gray-800">Junipra Innovations</span>
        </RouterLink>
      </div>

      <nav class="flex space-x-4">
        <RouterLink to="/contact" class="text-gray-600 hover:text-gray-900">Contact</RouterLink>
        <RouterLink to="/post" class="text-gray-600 hover:text-gray-900">Post</RouterLink>
      </nav>
    </header>

    <main class="flex-1 overflow-y-auto">
      <div class="pt-8">
        <RouterView />
      </div>
    </main>
  </div>
</template>
