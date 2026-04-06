<script setup lang="ts">
import { RouterView } from "vue-router"
import SiteFooter from "@/components/site/SiteFooter.vue"
import SiteHeader from "@/components/site/SiteHeader.vue"
</script>

<template>
  <div class="site-canvas">
    <SiteHeader />

    <main class="site-shell mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <RouterView />
    </main>

    <SiteFooter />
  </div>
</template>
