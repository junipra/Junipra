<script setup>
import { ref, computed } from 'vue';
import ContactForm from './ContactView.vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid';

const isMenuOpen = ref(false);
const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <div class="bg-gradient-to-br from-brand-purple to-brand-blue text-white min-h-screen font-sans overflow-x-hidden">
    <header class="fixed top-0 left-0 right-0 z-50 bg-brand-purple/80 backdrop-blur-md shadow-md">
      <div class="container mx-auto flex items-center justify-between px-6 py-4">
        <div class="flex items-center space-x-4">
          <a href="#" class="flex items-center space-x-4 cursor-pointer">
            <img src="/src/assets/Junipra-logo-icon.png" alt="Junipra Logo" class="w-12" />
            <span class="text-3xl font-bold font-heading">Junipra</span>
          </a>
        </div>
        <nav class="hidden md:flex space-x-8">
          <a href="#services" class="text-lg hover:text-gray-300 transition-colors">Services</a>
          <a href="#playbook" class="text-lg hover:text-gray-300 transition-colors">Playbook</a>
          <a href="#contact" class="text-lg hover:text-gray-300 transition-colors">Contact</a>
        </nav>
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen">
            <Bars3Icon v-if="!isMenuOpen" class="w-8 h-8" />
            <XMarkIcon v-else class="w-8 h-8" />
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="fixed inset-0 z-40 bg-brand-purple/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 md:hidden">
      <a href="#services" @click="isMenuOpen = false" class="text-3xl font-bold">Services</a>
      <a href="#playbook" @click="isMenuOpen = false" class="text-3xl font-bold">Playbook</a>
      <a href="#contact" @click="isMenuOpen = false" class="text-3xl font-bold">Contact</a>
    </div>

    <main class="container mx-auto px-6 pt-24">
      <section id="hero" class="text-center relative py-24 scroll-mt-24">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <img src="/src/assets/Junipra_logo.svg" alt="Junipra Logo" class="w-64 mx-auto mb-8 animate-float" />
        <h1 class="text-5xl md:text-7xl font-extrabold leading-tight font-heading">Junipra Software Studio</h1>
        <p class="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Crafting elegant solutions to complex digital problems.
        </p>
        <a href="#contact" class="mt-8 inline-block bg-white text-brand-purple font-bold rounded-full px-8 py-3 hover:bg-gray-200 transition-colors">Start Your Project</a>
      </section>

      <section id="services" class="mt-32 scroll-mt-24">
        <h2 class="text-4xl font-bold text-center font-heading">What We Do</h2>
        <div class="mt-16 space-y-16">
          
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="w-full md:w-1/2 flex justify-center">
              <svg class="w-40 h-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <div class="w-full md:w-1/2">
              <h3 class="text-3xl font-bold font-heading">Custom Software</h3>
              <p class="mt-4 text-gray-300 text-lg">We build bespoke software tailored to your exact needs. From internal dashboards to complex enterprise systems, we deliver robust and scalable solutions.</p>
            </div>
          </div>

          <div class="flex flex-col md:flex-row-reverse items-center gap-8">
            <div class="w-full md:w-1/2 flex justify-center">
              <svg class="w-40 h-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div class="w-full md:w-1/2">
              <h3 class="text-3xl font-bold font-heading">AI & Automation</h3>
              <p class="mt-4 text-gray-300 text-lg">Unlock the power of AI to automate tasks, gain insights from your data, and create intelligent applications that give you a competitive edge.</p>
            </div>
          </div>

          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="w-full md:w-1/2 flex justify-center">
              <svg class="w-40 h-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div class="w-full md:w-1/2">
              <h3 class="text-3xl font-bold font-heading">Application Development</h3>
              <p class="mt-4 text-gray-300 text-lg">We design and develop beautiful, intuitive, and high-performance web and mobile applications that your users will love.</p>
            </div>
          </div>

        </div>
      </section>

      <section id="playbook" class="mt-24 scroll-mt-24">
        <h2 class="text-4xl font-bold text-center font-heading">Our Playbook</h2>
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div class="bg-white/10 p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
            <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H7a2 2 0 00-2 2v2"></path></svg>
            <h3 class="text-2xl font-bold font-heading">Clarity from Complexity</h3>
            <p class="mt-4 text-gray-300">We excel at untangling complex business logic and technical challenges, delivering simple and elegant solutions that are easy to use and understand.</p>
          </div>
          <div class="bg-white/10 p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
            <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h3 class="text-2xl font-bold font-heading">Automate & Accelerate</h3>
            <p class="mt-4 text-gray-300">We identify opportunities to automate manual processes and leverage AI, freeing up your team to focus on what they do best.</p>
          </div>
          <div class="bg-white/10 p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
            <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            <h3 class="text-2xl font-bold font-heading">Build & Belong</h3>
            <p class="mt-4 text-gray-300">We believe in true partnership. We work closely with you, fostering a collaborative environment where your team feels like an extension of ours.</p>
          </div>
        </div>
      </section>

      <section id="contact" class="mt-24 scroll-mt-24">
        <ContactForm />
      </section>
    </main>

    <footer class="py-8 text-center text-gray-300">
      <p>&copy; {{ currentYear }} Junipra. All rights reserved.</p>
      <!-- <div class="flex justify-center space-x-4 mt-4">
        <a href="#" class="hover:text-white">Twitter</a>
        <a href="#" class="hover:text-white">LinkedIn</a>
        <a href="#" class="hover:text-white">GitHub</a>
      </div> -->
    </footer>
  </div>
</template>
