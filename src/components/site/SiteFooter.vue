<script setup lang="ts">
import AppLink from "@/components/site/AppLink.vue"
import { Separator } from "@/components/ui/separator"
import { navigationLinks } from "@/lib/site"
</script>

<template>
  <footer class="site-shell px-4 pb-6 pt-16 sm:px-6 lg:px-8">
    <div class="glass-panel mx-auto max-w-6xl rounded-4xl px-6 py-8 sm:px-8 sm:py-10">
      <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div class="space-y-4">
          <p class="eyebrow-chip inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
            Junipra
          </p>
          <div class="space-y-3">
            <h2 class="font-heading text-3xl text-balance sm:text-4xl">
              Practical work, steady progress, thoughtful ventures.
            </h2>
            <p class="max-w-2xl text-base leading-7 text-muted-foreground">
              A focused home for digital services, creative products, and future-facing ideas.
            </p>
          </div>
        </div>

        <div class="grid gap-3 sm:grid-cols-2">
          <AppLink
            v-for="item in navigationLinks"
            :key="item.href"
            :href="item.href"
            class="nav-pill rounded-2xl px-4 py-3 text-sm font-medium no-underline"
          >
            {{ item.label }}
          </AppLink>
        </div>
      </div>

      <Separator class="my-8 bg-border/70" />

      <div class="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {{ new Date().getFullYear() }} Junipra. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
