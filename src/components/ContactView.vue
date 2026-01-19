<script setup>
import { computed } from "vue";
import { useContactStore } from '../stores/ContactStore';
import { ArrowPathIcon } from '@heroicons/vue/24/solid'
import { useToast } from "vue-toastification";

const contactStore = useContactStore();
const toast = useToast();
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isSubmitDisabled = computed(() => {
  const { name, email, message, sending } = contactStore;
  return !name.trim() || !email.trim() || !message.trim() || sending;
});

const send = async () => {
  contactStore.clearStatus();

  if (!emailRegex.test(contactStore.email.trim())) {
    contactStore.error = "Please enter a valid email address.";
    return;
  }

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
  <div class="w-full max-w-2xl mx-auto card">
    <h2 class="text-2xl sm:text-3xl font-semibold text-center">Let's Build Together</h2>
    <p class="text-center mt-2" style="color: var(--color-text-muted);">
      Tell us about your project and we'll be in touch.
    </p>
    <form class="mt-8 grid gap-4" @submit.prevent="send">
      <div class="grid gap-4 md:grid-cols-2">
        <div>
          <label for="name" class="block text-sm font-semibold">Name</label>
          <input
            type="text"
            id="name"
            v-model.trim="contactStore.name"
            class="input mt-2"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-semibold">Email</label>
          <input
            type="email"
            id="email"
            v-model.trim="contactStore.email"
            class="input mt-2"
          />
        </div>
      </div>

      <div>
        <label for="message" class="block text-sm font-semibold">Message</label>
        <textarea
          id="message"
          v-model.trim="contactStore.message"
          class="textarea mt-2"
        ></textarea>
      </div>

      <div v-if="contactStore.error" class="rounded-md bg-red-500/10 border border-red-500/50 px-4 py-3 text-red-100 text-sm">
        {{ contactStore.error }}
      </div>
      <div v-else-if="contactStore.success" class="rounded-md bg-emerald-500/10 border border-emerald-500/50 px-4 py-3 text-emerald-100 text-sm">
        Thanks! Your message was sent.
      </div>

      <div class="flex justify-end">
        <button
          type="submit"
          :disabled="isSubmitDisabled"
          class="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
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
