<script setup>
import DefaultLayout from './components/Default.vue';
</script>

<template>
  <DefaultLayout>
    <transition
      name="fade"
      mode="out-in"
      enter-active-class="transition-opacity duration-500"
      leave-active-class="transition-opacity duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <RouterView />
    </transition>
  </DefaultLayout>
</template>
