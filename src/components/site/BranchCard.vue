<script setup lang="ts">
import type { HomeBranchContent } from "@/lib/types"
import { computed } from "vue"
import { ArrowUpRight, Gem, Globe, Music4, Sparkles } from "lucide-vue-next"
import AppLink from "@/components/site/AppLink.vue"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { branchStatusLabel } from "@/lib/site"

const props = defineProps<{
  branch: HomeBranchContent
}>()

const icons = {
  "web-services": Globe,
  collective: Gem,
  music: Music4,
} as const

const cardIcon = computed(() => icons[props.branch.slug as keyof typeof icons] ?? Sparkles)
const badgeClass = computed(() =>
  props.branch.status === "active" ? "status-active" : "status-soon",
)
const ctaLabel = computed(() =>
  props.branch.status === "active" ? "Explore Branch" : "View Direction",
)
</script>

<template>
  <Card class="glass-panel group flex h-full flex-col justify-between overflow-hidden rounded-4xl border border-border/70">
    <CardHeader class="space-y-5">
      <div class="flex items-start justify-between gap-4">
        <div class="ornament-ring">
          <component :is="cardIcon" class="size-5 text-primary" />
        </div>
        <Badge variant="outline" :class="badgeClass">
          {{ branchStatusLabel[branch.status] }}
        </Badge>
      </div>

      <div class="space-y-3">
        <CardTitle class="font-heading text-2xl">
          {{ branch.title }}
        </CardTitle>
        <CardDescription class="text-base leading-7 text-muted-foreground">
          {{ branch.description }}
        </CardDescription>
      </div>
    </CardHeader>

    <CardFooter class="pt-0">
      <AppLink
        :href="branch.href"
        :class="cn(buttonVariants({ variant: branch.status === 'active' ? 'default' : 'outline', size: 'lg' }), 'w-full justify-between rounded-xl')"
      >
        <span>{{ ctaLabel }}</span>
        <ArrowUpRight class="size-4" />
      </AppLink>
    </CardFooter>
  </Card>
</template>
