<script setup lang="ts">
import type { BranchPageContent } from "@/lib/types"
import { ArrowRight, Compass, Layers3, Sparkles } from "lucide-vue-next"
import { computed } from "vue"
import AppLink from "@/components/site/AppLink.vue"
import SectionHeader from "@/components/site/SectionHeader.vue"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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

const props = defineProps<{
  page: BranchPageContent
}>()

const branchHighlights = computed(() => {
  if (props.page.slug === "web-services") {
    return [
      "Fast-loading, responsive builds",
      "Clear content structure and launch readiness",
      "Maintainable systems without unnecessary complexity",
    ]
  }

  if (props.page.slug === "collective") {
    return [
      "Small-batch design with thoughtful detail",
      "Products shaped for weddings, events, and gifting",
      "A calm visual direction rooted in warmth and care",
    ]
  }

  return [
    "Creative exploration in progress",
    "Space for future releases and experiments",
    "Built to expand naturally as the work develops",
  ]
})
</script>

<template>
  <div class="space-y-20 pb-20 pt-8 sm:space-y-24 sm:pt-12">
    <section class="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
      <div class="space-y-8">
        <Badge variant="outline" class="eyebrow-chip rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
          {{ page.hero.eyebrow }}
        </Badge>

        <div class="space-y-5">
          <h1 class="font-heading text-5xl leading-none text-balance sm:text-6xl">
            {{ page.hero.title }}
          </h1>
          <p class="max-w-2xl text-lg leading-8 text-muted-foreground">
            {{ page.hero.description }}
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row">
          <AppLink
            v-if="page.primaryCta"
            :href="page.primaryCta.href"
            :class="cn(buttonVariants({ size: 'lg' }), 'rounded-xl')"
          >
            <span>{{ page.primaryCta.label }}</span>
            <ArrowRight class="size-4" />
          </AppLink>
        </div>
      </div>

      <Card class="hero-panel overflow-hidden rounded-4xl border border-border/70">
        <CardContent class="space-y-5 p-6 sm:p-8">
          <div class="flex items-center justify-between gap-4">
            <div class="space-y-2">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Branch overview
              </p>
              <p class="text-sm leading-6 text-muted-foreground">
                A focused direction with a simple operating model.
              </p>
            </div>
            <div class="ornament-ring">
              <Sparkles class="size-5 text-primary" />
            </div>
          </div>

          <div class="grid gap-3">
            <div
              v-for="item in branchHighlights"
              :key="item"
              class="soft-row flex items-start gap-3 rounded-3xl px-4 py-4"
            >
              <div class="ornament-ring h-10 w-10 shrink-0">
                <Compass class="size-4 text-primary" />
              </div>
              <p class="text-sm leading-6 text-foreground">
                {{ item }}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>

    <section class="section-divider">
      <SectionHeader
        eyebrow="Overview"
        :title="page.intro.title"
        :description="page.intro.description"
      />
    </section>

    <section v-if="page.services?.length" class="section-divider space-y-8">
      <SectionHeader
        eyebrow="Offerings"
        title="Focused work, clearly defined."
        description="Each offer is scoped to stay practical, understandable, and easy to build on."
      />

      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <Card
          v-for="service in page.services"
          :key="service.slug"
          class="glass-panel rounded-4xl border-border/70"
        >
          <CardHeader class="space-y-4">
            <div class="flex items-start justify-between gap-3">
              <div class="ornament-ring">
                <Layers3 class="size-5 text-primary" />
              </div>
              <Badge v-if="service.featured" variant="outline" class="status-active">Featured</Badge>
            </div>
            <div class="space-y-2">
              <CardTitle class="font-heading text-2xl">
                {{ service.title }}
              </CardTitle>
              <CardDescription class="text-base leading-7 text-muted-foreground">
                {{ service.shortDescription }}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent v-if="service.bullets?.length" class="pt-0">
            <ul class="space-y-3">
              <li
                v-for="bullet in service.bullets"
                :key="bullet"
                class="soft-row rounded-2xl px-4 py-3 text-sm leading-6 text-foreground"
              >
                {{ bullet }}
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>

    <section v-if="page.process?.length" class="section-divider space-y-8">
      <SectionHeader
        eyebrow="Process"
        title="A direct path from idea to launch."
        description="The process stays clear so the work can move forward without unnecessary drag."
      />

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card
          v-for="(step, index) in page.process"
          :key="step"
          class="glass-panel rounded-4xl border-border/70"
        >
          <CardHeader class="space-y-4">
            <Badge variant="outline" class="status-soon">
              Step {{ index + 1 }}
            </Badge>
            <CardTitle class="font-heading text-2xl leading-tight">
              {{ step }}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </section>

    <section v-if="page.faq?.length" class="section-divider space-y-8">
      <SectionHeader
        eyebrow="FAQ"
        title="A few common questions."
        description="Answers kept clear, direct, and grounded in how the work is actually approached."
      />

      <Card class="glass-panel rounded-4xl border-border/70">
        <CardContent class="p-6 sm:p-8">
          <Accordion type="single" collapsible class="w-full">
            <AccordionItem
              v-for="item in page.faq"
              :key="item.question"
              :value="item.question"
              class="border-b border-border/70 last:border-b-0"
            >
              <AccordionTrigger class="text-base font-medium">
                {{ item.question }}
              </AccordionTrigger>
              <AccordionContent class="pb-4 text-sm leading-7 text-muted-foreground">
                {{ item.answer }}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  </div>
</template>
