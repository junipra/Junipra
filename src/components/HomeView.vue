<script setup>
import { ref, computed } from 'vue';
import ContactForm from './ContactView.vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid';
import logoIcon from '../assets/Junipra-logo-icon.png';
import logoFull from '../assets/Junipra_logo.svg';

const isMenuOpen = ref(false);
const currentYear = computed(() => new Date().getFullYear());

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#playbook', label: 'Playbook' },
  { href: '#contact', label: 'Contact' },
];

const services = [
  {
    title: 'Custom Software',
    description: 'We build bespoke software tailored to your exact needs. From internal dashboards to complex enterprise systems, we deliver robust and scalable solutions.',
    icon: { paths: ['M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'], strokeWidth: 1 },
  },
  {
    title: 'AI & Automation',
    description: 'Unlock the power of AI to automate tasks, gain insights from your data, and create intelligent applications that give you a competitive edge.',
    icon: { paths: ['M13 10V3L4 14h7v7l9-11h-7z'], strokeWidth: 1 },
  },
  {
    title: 'Application Development',
    description: 'We design and develop beautiful, intuitive, and high-performance web and mobile applications that your users will love.',
    icon: { paths: ['M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'], strokeWidth: 1 },
  },
];

const playbookItems = [
  {
    title: 'Clarity from Complexity',
    description: 'We excel at untangling complex business logic and technical challenges, delivering simple and elegant solutions that are easy to use and understand.',
    icon: { paths: ['M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H7a2 2 0 00-2 2v2'], strokeWidth: 2 },
  },
  {
    title: 'Automate & Accelerate',
    description: 'We identify opportunities to automate manual processes and leverage AI, freeing up your team to focus on what they do best.',
    icon: { paths: ['M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'], strokeWidth: 2 },
  },
  {
    title: 'Build & Belong',
    description: 'We believe in true partnership. We work closely with you, fostering a collaborative environment where your team feels like an extension of ours.',
    icon: { paths: ['M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'], strokeWidth: 2 },
  },
];

</script>

<template>
  <div class="bg-linear-to-br from-brand-purple to-brand-blue text-white min-h-screen font-sans overflow-x-hidden scroll-smooth">
    <header class="fixed top-0 left-0 right-0 z-50 bg-brand-purple/80 backdrop-blur-md shadow-md">
      <div class="container mx-auto flex items-center justify-between px-6 py-4">
        <div class="flex items-center space-x-2 md:space-x-4">
          <a href="#" class="flex items-center space-x-2 md:space-x-4 cursor-pointer">
            <img :src="logoIcon" alt="Junipra Logo" class="w-10 md:w-12" />
            <span class="text-2xl md:text-3xl font-bold font-heading">Junipra</span>
          </a>
        </div>
        <nav class="hidden md:flex space-x-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-lg hover:text-gray-300 transition-colors"
          >
            {{ link.label }}
          </a>
        </nav>
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen">
            <Bars3Icon v-if="!isMenuOpen" class="w-8 h-8" />
            <XMarkIcon v-else class="w-8 h-8" />
          </button>
        </div>
      </div>
    </header>

    <div v-if="isMenuOpen" class="fixed inset-0 z-40 bg-brand-purple/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 md:hidden">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        @click="isMenuOpen = false"
        class="text-3xl font-bold"
      >
        {{ link.label }}
      </a>
    </div>

    <main class="container mx-auto px-6 pt-24">
      <section id="hero" class="text-center relative py-16 md:py-24 scroll-mt-24">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <img :src="logoFull" alt="Junipra Logo" class="w-40 md:w-64 mx-auto mb-6 md:mb-8 animate-float" />
        <h1 class="text-4xl md:text-7xl font-extrabold leading-tight font-heading">Junipra Software Studio</h1>
        <p class="mt-4 text-base md:text-xl text-gray-200 max-w-xs md:max-w-3xl mx-auto">
          Crafting elegant solutions to complex digital problems.
        </p>
        <a href="#contact">
          <button
            class="relative mt-8 inline-block bg-white text-brand-purple font-bold rounded-full px-6 md:px-8 py-3 hover:bg-gray-200 transition-colors text-base md:text-lg cursor-pointer">
            Start Your Project
          </button>
        </a>
      </section>

      <section id="services" class="mt-32 scroll-mt-24">
        <h2 class="text-4xl font-bold text-center font-heading">What We Do</h2>
        <div class="mt-16 space-y-16">
          
          <div
            v-for="(service, index) in services"
            :key="service.title"
            class="flex flex-col md:flex-row items-center gap-8"
            :class="{'md:flex-row-reverse': index === 1}"
          >
            <div class="w-full md:w-1/2 flex justify-center">
              <svg
                class="w-40 h-40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                :stroke-width="service.icon.strokeWidth || 1"
              >
                <path
                  v-for="(path, pathIndex) in service.icon.paths"
                  :key="`${service.title}-path-${pathIndex}`"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  :d="path"
                />
              </svg>
            </div>
            <div class="w-full md:w-1/2">
              <h3 class="text-3xl font-bold font-heading">{{ service.title }}</h3>
              <p class="mt-4 text-gray-300 text-lg">{{ service.description }}</p>
            </div>
          </div>

        </div>
      </section>

      <section id="playbook" class="mt-24 scroll-mt-24">
        <h2 class="text-4xl font-bold text-center font-heading">Our Playbook</h2>
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div
            v-for="item in playbookItems"
            :key="item.title"
            class="bg-white/10 p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
          >
            <svg
              class="w-16 h-16 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              :stroke-width="item.icon.strokeWidth || 2"
            >
              <path
                v-for="(path, pathIndex) in item.icon.paths"
                :key="`${item.title}-icon-${pathIndex}`"
                stroke-linecap="round"
                stroke-linejoin="round"
                :d="path"
              />
            </svg>
            <h3 class="text-2xl font-bold font-heading">{{ item.title }}</h3>
            <p class="mt-4 text-gray-300">{{ item.description }}</p>
          </div>
        </div>
      </section>

      <section id="contact" class="mt-24 scroll-mt-24">
        <ContactForm />
      </section>
    </main>

    <footer class="py-8 text-center text-gray-300">
      <p>&copy; {{ currentYear }} Junipra. All rights reserved.</p>
      <a href="mailto:info@junipra.com" class="hover:text-white">info@junipra.com</a>
    </footer>
  </div>
</template>
