<script setup lang="ts">
import { Menu } from "lucide-vue-next"
import { computed, ref } from "vue"
import { useRoute } from "vue-router"
import AppLink from "@/components/site/AppLink.vue"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { navigationLinks } from "@/lib/site"

const route = useRoute()
const mobileMenuOpen = ref(false)

const isActive = computed(() => (href: string) => {
  if (href === "/") {
    return route.path === href
  }

  return route.path.startsWith(href)
})

function closeMobileMenu() {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="site-shell sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
    <div class="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-3xl px-4 py-3 sm:px-5">
      <AppLink href="/" class="flex items-center gap-3 no-underline">
        <img
          alt="Junipra logo"
          class="h-10 w-10 rounded-full border border-border/70 bg-card object-cover p-1"
          src="/Junipra_logo.svg"
        >
        <div class="flex flex-col">
          <span class="font-heading text-lg leading-none text-foreground">Junipra</span>
        </div>
      </AppLink>

      <nav class="hidden items-center gap-1 md:flex">
        <AppLink
          v-for="item in navigationLinks"
          :key="item.href"
          :href="item.href"
          :class="cn('rounded-full px-4 py-2 text-sm font-medium no-underline transition', isActive(item.href) ? 'nav-pill-active' : 'nav-pill')"
        >
          {{ item.label }}
        </AppLink>
      </nav>

      <div class="hidden md:block">
        <AppLink href="/contact" class="button-chip">
          Start a Conversation
        </AppLink>
      </div>

      <Sheet v-model:open="mobileMenuOpen">
        <SheetTrigger as-child class="md:hidden">
          <Button size="icon" variant="outline" class="rounded-full">
            <Menu class="size-5" />
            <span class="sr-only">Open navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" class="rounded-l-3xl border-border/80 px-6">
          <SheetHeader class="pt-6 text-left">
            <SheetTitle class="font-heading text-2xl">Junipra</SheetTitle>
          </SheetHeader>

          <nav class="mt-8 flex flex-col gap-3">
            <AppLink
              v-for="item in navigationLinks"
              :key="item.href"
              :href="item.href"
              @click="closeMobileMenu"
              :class="cn('rounded-2xl px-4 py-3 text-base font-medium no-underline transition', isActive(item.href) ? 'nav-pill-active' : 'nav-pill')"
            >
              {{ item.label }}
            </AppLink>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </header>
</template>
