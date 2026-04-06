<script setup lang="ts">
import AppLink from "@/components/site/AppLink.vue"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
</script>

<template>
  <div class="flex min-h-[60vh] items-center justify-center py-16">
    <Card class="glass-panel w-full max-w-2xl rounded-4xl border-border/70">
      <CardContent class="space-y-5 p-8 text-center sm:p-12">
        <p class="eyebrow-chip mx-auto inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
          Not found
        </p>
        <div class="space-y-3">
          <h1 class="font-heading text-4xl sm:text-5xl">That page is not here.</h1>
          <p class="text-base leading-7 text-muted-foreground">
            The route may have moved, or it may not exist yet in this build.
          </p>
        </div>
        <AppLink href="/" :class="cn(buttonVariants({ size: 'lg' }), 'rounded-xl')">
          Back to Home
        </AppLink>
      </CardContent>
    </Card>
  </div>
</template>
