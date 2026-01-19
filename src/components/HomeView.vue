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
  <div class="min-h-screen overflow-x-hidden scroll-smooth">
    <header
      class="sticky top-0 z-50 border-b backdrop-blur-md"
      style="background: var(--color-bg); border-color: var(--color-border);"
    >
      <div class="container-page flex items-center justify-between py-4">
        <div class="flex items-center space-x-2 md:space-x-4">
          <a href="#" class="flex items-center space-x-2 md:space-x-4 cursor-pointer">
            <img :src="logoFull" alt="Junipra Logo" class="w-12 md:w-16" />
            <span class="text-2xl md:text-3xl font-bold font-heading">Junipra</span>
          </a>
        </div>
        <nav class="hidden md:flex space-x-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-semibold"
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

    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-40 backdrop-blur-md flex flex-col items-center justify-center space-y-8 md:hidden"
      style="background: var(--color-bg);"
    >
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        @click="isMenuOpen = false"
        class="text-2xl font-semibold"
      >
        {{ link.label }}
      </a>
    </div>

    <main class="min-h-screen">
      <section id="hero" class="section scroll-mt-24">
        <div class="container-page text-center">
          <img :src="logoFull" alt="Junipra Logo" class="w-32 md:w-40 mx-auto mt-6 animate-float" />
          <h1 class="mt-6 text-4xl sm:text-5xl font-semibold leading-tight">Junipra Web Services</h1>
          <p class="mt-4 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto" style="color: var(--color-text-muted);">
            Crafting elegant solutions to complex digital problems with calm, clear, and capable delivery.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#contact" class="btn btn-primary">Start Your Project</a>
            <a href="#services" class="btn btn-secondary">View Services</a>
          </div>
        </div>
      </section>

      <section id="services" class="section section-muted scroll-mt-24">
        <div class="container-page">
          <h2 class="text-2xl sm:text-3xl font-semibold text-center">What We Do</h2>
          <div class="mt-10 grid gap-6 md:grid-cols-3">
            <div v-for="service in services" :key="service.title" class="card">
              <div class="flex items-start gap-4">
                <div
                  class="h-9 w-9 rounded-xl p-2 flex items-center justify-center"
                  style="background: var(--color-juniper-100); border: 1px solid var(--color-juniper-300);"
                >
                  <component :is="service.icon" class="h-5 w-5" style="color: var(--color-juniper-800);" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold">{{ service.title }}</h3>
                  <p class="mt-2 text-sm leading-relaxed" style="color: var(--color-text-muted);">
                    {{ service.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="playbook" class="section scroll-mt-24">
        <div class="container-page">
          <h2 class="text-2xl sm:text-3xl font-semibold text-center">Our Playbook</h2>
          <div class="grid gap-6 md:grid-cols-3 mt-10">
            <div v-for="item in playbookItems" :key="item.title" class="card text-center">
              <div
                class="h-12 w-12 rounded-2xl flex items-center justify-center mx-auto"
                style="background: var(--color-juniper-100); border: 1px solid var(--color-juniper-300);"
              >
                <component :is="item.icon" class="h-6 w-6" style="color: var(--color-juniper-800);" />
              </div>
              <h3 class="mt-4 text-lg font-semibold">{{ item.title }}</h3>
              <p class="mt-3 text-sm leading-relaxed" style="color: var(--color-text-muted);">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section section-muted scroll-mt-24">
        <div class="container-page">
          <ContactForm />
        </div>
      </section>
    </main>

    <footer class="section section-muted">
      <div class="container-page text-center">
        <h3 class="text-xl font-semibold">Junipra</h3>
        <p class="mt-2 text-sm" style="color: var(--color-text-muted);">
          &copy; {{ currentYear }} Junipra. All rights reserved.
        </p>
        <div class="mt-3 flex justify-center gap-6 text-sm">
          <a href="#services">Services</a>
          <a href="#playbook">Playbook</a>
          <a href="mailto:info@junipra.com">info@junipra.com</a>
        </div>
      </div>
    </footer>
  </div>
</template>
