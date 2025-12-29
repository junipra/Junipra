<script setup>
import { ref, computed } from 'vue';
import ContactForm from './ContactView.vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid';
import {
  CogIcon,
  SparklesIcon,
  DevicePhoneMobileIcon,
  RectangleStackIcon,
  ClockIcon,
  UserGroupIcon,
} from '@heroicons/vue/24/outline';
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
    icon: CogIcon,
  },
  {
    title: 'AI & Automation',
    description: 'Unlock the power of AI to automate tasks, gain insights from your data, and create intelligent applications that give you a competitive edge.',
    icon: SparklesIcon,
  },
  {
    title: 'Application Development',
    description: 'We design and develop beautiful, intuitive, and high-performance web and mobile applications that your users will love.',
    icon: DevicePhoneMobileIcon,
  },
];

const playbookItems = [
  {
    title: 'Clarity from Complexity',
    description: 'We excel at untangling complex business logic and technical challenges, delivering simple and elegant solutions that are easy to use and understand.',
    icon: RectangleStackIcon,
  },
  {
    title: 'Automate & Accelerate',
    description: 'We identify opportunities to automate manual processes and leverage AI, freeing up your team to focus on what they do best.',
    icon: ClockIcon,
  },
  {
    title: 'Build & Belong',
    description: 'We believe in true partnership. We work closely with you, fostering a collaborative environment where your team feels like an extension of ours.',
    icon: UserGroupIcon,
  },
];

</script>

<template>
  <div class="bg-linear-to-br from-brand-purple to-brand-blue text-white min-h-screen font-sans overflow-x-hidden scroll-smooth">
    <header class="fixed top-0 left-0 right-0 z-50 bg-brand-purple backdrop-blur-md shadow-md">
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
        <h1 class="text-4xl md:text-7xl font-extrabold leading-tight font-heading">Junipra Web Services</h1>
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
              <component :is="service.icon" class="w-40 h-40 text-white" />
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
            <component :is="item.icon" class="w-16 h-16 mx-auto mb-4 text-white" />
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
