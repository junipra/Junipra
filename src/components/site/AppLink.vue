<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { RouterLink } from "vue-router"

const props = defineProps<{
  href: string
  class?: HTMLAttributes["class"]
}>()

const isInternalRoute = computed(() => props.href.startsWith("/"))
</script>

<template>
  <RouterLink v-if="isInternalRoute" :to="href" :class="props.class">
    <slot />
  </RouterLink>

  <a v-else :href="href" :class="props.class">
    <slot />
  </a>
</template>
