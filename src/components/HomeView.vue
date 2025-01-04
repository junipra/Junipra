<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToContact = () => {
    router.push('/contact');
};

const goToPost = () => {
    router.push('/post');
};

</script>

<template>
  <div class="pt-8">
    <div class="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
      <div class="w-full lg:w-1/2 flex lg:justify-end justify-center">
        <img
          src="/src/assets/Junipra_logo.svg"
          alt="Junipra Logo"
          class="max-w-full h-60"
        />
      </div>

      <div class="w-full lg:w-1/2 mt-12 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
        <h1 class="text-3xl mb-4">pick one</h1>
        <div class="flex space-x-4">
          <button
            class="h-10 px-6 font-semibold rounded-full bg-blue-600 hover:bg-blue-700 text-white"
            @click="goToContact"
          >
            Contact
          </button>
          <button
            class="h-10 px-6 font-semibold rounded-full border border-slate-500 hover:bg-slate-300 text-slate-900"
            @click="goToPost"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
