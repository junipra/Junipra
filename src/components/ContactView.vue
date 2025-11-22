<script setup>
import { computed } from "vue";
import { useContactStore } from '../stores/ContactStore';
import { ArrowPathIcon } from '@heroicons/vue/24/solid'
import { useToast } from "vue-toastification";

const contactStore = useContactStore();
const toast = useToast();

const isSubmitDisabled = computed(() => {
  const { name, email, message, sending } = contactStore;
  return !name || !email || !message || sending;
});

const send = async () => {
  try {
    await contactStore.submitToFirestore();
    toast.success("Your message was sent successfully!");
  } catch (err) {
    console.error(err);
    toast.error("Failed to send your message. Please try again.");
  }
};

</script>

<template>
  <div class="w-full max-w-2xl mx-auto bg-white/10 p-8 rounded-lg shadow-lg">
    <h2 class="text-4xl font-bold text-center text-white font-heading">Let's Build Together</h2>
    <p class="text-center text-gray-300 mt-2">Tell us about your project and we'll be in touch.</p>
    <form class="mt-8 space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-300">Name</label>
        <input
          type="text"
          id="name"
          v-model="contactStore.name"
          class="mt-1 p-3 block w-full rounded-md bg-white/20 text-white border-transparent focus:border-white focus:ring-0 placeholder-gray-400 placeholder"
          placeholder="Your name"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
        <input
          type="email"
          id="email"
          v-model="contactStore.email"
          class="mt-1 p-3 block w-full rounded-md bg-white/20 text-white border-transparent focus:border-white focus:ring-0 placeholder-gray-400 placeholder"
          placeholder="Your email"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-300">Message</label>
        <textarea
          id="message"
          v-model="contactStore.message"
          class="mt-1 p-3 block w-full rounded-md bg-white/20 text-white border-transparent focus:border-white focus:ring-0 placeholder-gray-400 placeholder"
          rows="4"
          placeholder="Your message"
        ></textarea>
      </div>

      <div class="flex justify-end">
        <button
          type="button"
          @click="send"
          :disabled="isSubmitDisabled"
          class="inline-flex justify-center rounded-full border border-transparent bg-white py-3 px-8 text-sm font-bold text-brand-purple shadow-xs hover:bg-gray-200 focus:outline-hidden focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-purple disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="contactStore.sending" class="flex items-center space-x-2">
            <ArrowPathIcon class="w-5 h-5 animate-spin" />
          </span>
          <span v-else>Send Message</span>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.placeholder::placeholder {
      color: rgb(203, 203, 203);
      opacity: 1;
    }
</style>

