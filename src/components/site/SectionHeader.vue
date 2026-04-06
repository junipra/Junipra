<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="max-w-2xl space-y-4">
    <p v-if="eyebrow" class="eyebrow-chip inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
      {{ eyebrow }}
    </p>
    <div class="space-y-3">
      <h2 class="font-heading text-3xl leading-tight text-balance sm:text-4xl">
        {{ title }}
      </h2>
      <p class="text-base leading-7 text-muted-foreground sm:text-lg">
        {{ description }}
      </p>
    </div>
  </div>
</template>
