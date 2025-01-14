<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { Bars3Icon } from '@heroicons/vue/24/solid';

const route = useRoute();

const isMenuOpen = ref(false);
const getLinkClass = (path) =>
  route.path === path
    ? 'text-gray-950 text-lg'
    : 'text-gray-600 text-lg hover:text-gray-900';

</script>

<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-b from-blue-300 to-white">
    <header class="relative flex items-center justify-between px-4 py-2 bg-[#ffdcbb] shadow-md">
      <div class="flex items-center space-x-4">
        <RouterLink to="/" class="flex items-center space-x-4">
          <img src="/src/assets/Junipra-logo-icon.png" alt="Junipra Logo" class="w-12" />
          <span class="text-4xl font-mystery text-gray-800">Junipra</span>
        </RouterLink>
      </div>

      <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden">
        <Bars3Icon class="w-12 h-12 p-3 text-gray-800" />
      </button>

      <nav class="hidden lg:flex lg:space-x-4">
        <RouterLink to="/about" :class="getLinkClass('/about')">About</RouterLink>
        <RouterLink to="/services" :class="getLinkClass('/services')">Services</RouterLink>
        <RouterLink to="/contact" :class="getLinkClass('/contact')">Contact</RouterLink>
      </nav>

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div
          v-if="isMenuOpen"
          class="absolute top-full right-4 mt-2 w-auto rounded-md bg-[#ffdcbb] shadow-lg ring-1 ring-black/5 z-10"
        >
          <nav class="flex flex-col space-y-2 py-4 px-6">
            <RouterLink to="/about" :class="getLinkClass('/about')" @click="isMenuOpen = false">
              About
            </RouterLink>
            <RouterLink to="/services" :class="getLinkClass('/services')" @click="isMenuOpen = false">
              Services
            </RouterLink>
            <RouterLink to="/contact" :class="getLinkClass('/contact')" @click="isMenuOpen = false">
              Contact
            </RouterLink>
          </nav>
        </div>
      </transition>
    </header>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto">
      <slot />
    </main>

  </div>
</template>
