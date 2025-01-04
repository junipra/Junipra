<script setup>
import { useContactStore } from '../stores/ContactStore';

const contactStore = useContactStore();

const send = () => {
  contactStore.submitToFirestore();
};

</script>

<template>
  <div class="flex flex-col items-center py-8 px-4">
    <h1 class="text-3xl text-gray-800 mb-6">Contact Us</h1>

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
          class="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
            {{ contactStore.sending ? "Sending..." : "Submit" }}
        </button>
      </div>
    </form>
  </div>
</template>
