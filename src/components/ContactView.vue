<script setup>
import { computed } from "vue";
import { useContactStore } from '../stores/ContactStore';
import { ArrowPathIcon } from '@heroicons/vue/24/solid' 
import Footer from './Footer.vue';   

const contactStore = useContactStore();

const isSubmitDisabled = computed(() => {
  const { name, email, message, sending } = contactStore;
  return !name || !email || !message || sending;
});

const send = () => {
  contactStore.submitToFirestore();
};

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Main Content -->
    <section class="flex-grow pt-16 lg:pt-20 pb-16">
      <div class="flex flex-col items-center">
        <h2 class="text-5xl font-semibold text-gray-800 pb-5">Contact Us</h2>

        <form class="w-full max-w-lg space-y-4 bg-white p-6 shadow-md rounded-lg">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              v-model="contactStore.name"
              class="mt-1 p-2 block w-full rounded-md border border-blue-300 shadow focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="contactStore.email"
              class="mt-1 p-2 block w-full rounded-md border border-blue-300 shadow focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your email"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              v-model="contactStore.message"
              class="mt-1 p-2 block w-full rounded-md border border-blue-300 shadow focus:border-blue-500 focus:ring-blue-500"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>

          <div class="flex justify-end">
            <button
              type="button"
              @click="send"
              :disabled="isSubmitDisabled"
              class="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="contactStore.sending" class="flex items-center space-x-2">
                <ArrowPathIcon class="w-5 h-5 animate-spin" />
              </span>
              <span v-else>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-4 text-center">
      <Footer />
    </footer>
  </div>
</template>

