<script setup>
import { useRouter } from 'vue-router';
import Footer from './Footer.vue';

const router = useRouter();

const goToContact = () => {
    router.push('/contact');
};

const goToServices = () => {
    router.push('/services');
};

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <section class="flex-grow pt-16 lg:pt-20 pb-16">
      <div class="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:space-x-12">
        <div class="lg:w-1/2 text-center lg:text-left">
          <h1 class="text-5xl font-semibold text-gray-800 leading-tight">
            Empowering Small Businesses with Exceptional Web Solutions
          </h1>
          <p class="mt-4 text-lg text-gray-700">
            From stunning websites to expert SEO and custom software development, Junipra helps your business thrive online.
          </p>
          <div class="mt-6 flex flex-col lg:justify-end sm:justify-center sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <button
              class="h-12 px-8 font-semibold rounded-full bg-blue-600 hover:bg-blue-700 text-white"
              @click="goToServices()"
            >
              Explore Services
            </button>
            <button
              class="h-12 px-8 font-semibold rounded-full bg-white hover:bg-stone-100 text-gray-800"
              @click="goToContact()"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div class="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <div class="flex items-center justify-center w-3/5 h-3/5 rounded-full bg-white">
            <img src="/src/assets/Junipra_logo.svg" alt="Junipra Logo" class="w-auto" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto text-center px-6">
        <h2 class="text-4xl font-bold text-gray-800">What We Do</h2>
        <p class="mt-4 text-gray-700">
          Junipra offers a range of services designed to help small businesses succeed in the digital space.
        </p>
        <div class="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h3 class="text-2xl font-bold text-gray-800">Website Development</h3>
            <p class="mt-2 text-gray-700">
              Custom-built, professional websites tailored to your business needs.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h3 class="text-2xl font-bold text-gray-800">Custom Software</h3>
            <p class="mt-2 text-gray-700">
              Tailored solutions, including Apple iOS apps, MacOS applications, and more.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h3 class="text-2xl font-bold text-gray-800">SEO Services</h3>
            <p class="mt-2 text-gray-700">
              Increase your visibility and attract more customers with strategic SEO.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h3 class="text-2xl font-bold text-gray-800">Domain Registration</h3>
            <p class="mt-2 text-gray-700">
              Get your business online with seamless domain setup and management.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <Footer/>
    </section>
  </div>
</template>
