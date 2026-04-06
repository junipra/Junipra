<script setup lang="ts">
import { ArrowRight, Compass, Gem, Globe, Music4, PenTool } from "lucide-vue-next"
import AppLink from "@/components/site/AppLink.vue"
import BranchCard from "@/components/site/BranchCard.vue"
import SectionHeader from "@/components/site/SectionHeader.vue"
import { homePage } from "@/content/site-copy"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

const principles = [
  {
    title: "Clarity first",
    description:
      "Every branch is designed to stay simple, useful, and easy to understand.",
    icon: Compass,
  },
  {
    title: "Craft over noise",
    description:
      "We aim for thoughtful details, clean execution, and work that feels intentional.",
    icon: PenTool,
  },
  {
    title: "Built to evolve",
    description:
      "Each venture starts focused, then grows steadily as the next right step becomes clear.",
    icon: Gem,
  },
]

const branchIcons = {
  "web-services": Globe,
  collective: Gem,
  music: Music4,
} as const
</script>

<template>
  <div class="space-y-20 pb-20 pt-8 sm:space-y-24 sm:pt-12">
    <section class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div class="space-y-8">
        <Badge variant="outline" class="eyebrow-chip rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
          {{ homePage.hero.eyebrow }}
        </Badge>

        <div class="space-y-5">
          <h1 class="font-heading text-5xl leading-none text-balance sm:text-6xl lg:text-7xl">
            {{ homePage.hero.title }}
          </h1>
          <p class="max-w-2xl text-lg leading-8 text-muted-foreground">
            {{ homePage.hero.description }}
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row">
          <AppLink
            :href="homePage.hero.primaryCta.href"
            :class="cn(buttonVariants({ size: 'lg' }), 'rounded-xl')"
          >
            <span>{{ homePage.hero.primaryCta.label }}</span>
            <ArrowRight class="size-4" />
          </AppLink>

          <AppLink
            :href="homePage.hero.secondaryCta.href"
            :class="cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-xl')"
          >
            <span>{{ homePage.hero.secondaryCta.label }}</span>
          </AppLink>
        </div>

        <div class="grid gap-3 sm:grid-cols-3">
          <Card class="glass-panel rounded-3xl border-border/70">
            <CardHeader class="space-y-2">
              <CardTitle class="font-heading text-xl">Independent</CardTitle>
              <CardDescription class="leading-6">
                A small umbrella built around practical work and creative range.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card class="glass-panel rounded-3xl border-border/70">
            <CardHeader class="space-y-2">
              <CardTitle class="font-heading text-xl">Focused</CardTitle>
              <CardDescription class="leading-6">
                Clear scopes, simple systems, and room to grow without excess.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card class="glass-panel rounded-3xl border-border/70">
            <CardHeader class="space-y-2">
              <CardTitle class="font-heading text-xl">Long-term</CardTitle>
              <CardDescription class="leading-6">
                The goal is useful work that holds up and evolves over time.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      <Card class="hero-panel relative overflow-hidden rounded-4xl border border-border/70">
        <CardContent class="grid gap-6 p-6 sm:p-8">
          <div class="flex items-start justify-between gap-4">
            <div class="space-y-2">
              <Badge variant="outline" class="status-active">A calm operating home</Badge>
              <p class="max-w-sm text-sm leading-6 text-muted-foreground">
                Web, product, and creative branches collected under one clear identity.
              </p>
            </div>

            <div class="ornament-ring shrink-0">
              <img
                alt="Junipra mark"
                class="h-8 w-8 object-contain"
                src="/Junipra_logo.svg"
              >
            </div>
          </div>

          <div class="grid gap-3">
            <div
              v-for="branch in homePage.branches"
              :key="branch.slug"
              class="soft-row flex items-center justify-between gap-4 rounded-3xl px-4 py-4"
            >
              <div class="flex items-center gap-3">
                <div class="ornament-ring h-11 w-11">
                  <component :is="branchIcons[branch.slug as keyof typeof branchIcons]" class="size-4 text-primary" />
                </div>
                <div class="space-y-1">
                  <p class="font-medium text-foreground">{{ branch.title }}</p>
                  <p class="text-sm leading-6 text-muted-foreground">{{ branch.description }}</p>
                </div>
              </div>

              <Badge variant="outline" :class="branch.status === 'active' ? 'status-active' : 'status-soon'">
                {{ branch.status === "active" ? "Active" : "Coming Soon" }}
              </Badge>
            </div>
          </div>

          <img
            alt="Junipra berries"
            class="pointer-events-none absolute -bottom-10 -right-8 w-56 opacity-40 mix-blend-multiply sm:w-72"
            src="/JunipraHDBerries.png"
          >
        </CardContent>
      </Card>
    </section>

    <section class="section-divider grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <SectionHeader
        eyebrow="Approach"
        :title="homePage.intro.title"
        :description="homePage.intro.description"
      />

      <div class="grid gap-4 md:grid-cols-3">
        <Card
          v-for="principle in principles"
          :key="principle.title"
          class="glass-panel rounded-3xl border-border/70"
        >
          <CardHeader class="space-y-4">
            <div class="ornament-ring">
              <component :is="principle.icon" class="size-5 text-primary" />
            </div>
            <div class="space-y-2">
              <CardTitle class="font-heading text-2xl">
                {{ principle.title }}
              </CardTitle>
              <CardDescription class="text-base leading-7 text-muted-foreground">
                {{ principle.description }}
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    </section>

    <section id="branches" class="section-divider space-y-8 scroll-mt-28">
      <SectionHeader
        eyebrow="Branches"
        title="Each branch stays focused on what it does best."
        description="The structure stays simple: distinct ventures, clear purpose, and a shared standard for quality and longevity."
      />

      <div class="grid gap-5 lg:grid-cols-3">
        <BranchCard
          v-for="branch in homePage.branches"
          :key="branch.slug"
          :branch="branch"
        />
      </div>
    </section>

    <section class="section-divider">
      <Card class="hero-panel overflow-hidden rounded-4xl border border-border/70">
        <CardContent class="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div class="space-y-5">
            <Badge variant="outline" class="eyebrow-chip rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
              Final note
            </Badge>
            <div class="space-y-4">
              <h2 class="font-heading text-4xl leading-tight text-balance sm:text-5xl">
                {{ homePage.closingCta.title }}
              </h2>
              <p class="max-w-2xl text-lg leading-8 text-muted-foreground">
                {{ homePage.closingCta.description }}
              </p>
            </div>
          </div>

          <div class="space-y-4">
            <AppLink
              :href="homePage.closingCta.primaryCta.href"
              :class="cn(buttonVariants({ size: 'lg' }), 'w-full justify-between rounded-xl')"
            >
              <span>{{ homePage.closingCta.primaryCta.label }}</span>
              <ArrowRight class="size-4" />
            </AppLink>
            <p class="text-sm leading-6 text-muted-foreground">
              Whether the next step is a website, a product concept, or a creative branch, the goal stays the same: make it simple, make it solid, and move it forward.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  </div>
</template>
