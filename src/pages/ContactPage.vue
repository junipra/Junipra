<script setup lang="ts">
import { ArrowRight, BriefcaseBusiness, MessageSquareText, Shapes } from "lucide-vue-next"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { computed, reactive, ref } from "vue"
import AppLink from "@/components/site/AppLink.vue"
import SectionHeader from "@/components/site/SectionHeader.vue"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { db } from "@/lib/firebase"
import { cn } from "@/lib/utils"

const cards = [
  {
    title: "Project inquiries",
    description: "Web builds, landing pages, or focused improvements for an existing site.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Creative collaborations",
    description: "Ideas related to products, events, or future Junipra branches.",
    icon: Shapes,
  },
  {
    title: "General questions",
    description: "A simple place to start the conversation and point it in the right direction.",
    icon: MessageSquareText,
  },
]

const form = reactive({
  name: "",
  email: "",
  project: "",
  website: "",
})

const submitted = ref(false)
const isSubmitting = ref(false)
const errorMessage = ref("")
const contactRecipient = import.meta.env.VITE_CONTACT_RECIPIENT || "info@junipra.com"
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const isSubmitDisabled = computed(() =>
  !form.name.trim() || !form.email.trim() || !form.project.trim() || isSubmitting.value,
)

async function handleSubmit() {
  if (isSubmitting.value) {
    return
  }

  isSubmitting.value = true
  errorMessage.value = ""
  submitted.value = false

  const trimmedName = form.name.trim()
  const trimmedEmail = form.email.trim()
  const trimmedProject = form.project.trim()

  if (form.website.trim()) {
    submitted.value = true
    isSubmitting.value = false
    return
  }

  if (!emailPattern.test(trimmedEmail)) {
    errorMessage.value = "Please enter a valid email address."
    isSubmitting.value = false
    return
  }

  try {
    await addDoc(collection(db, "submissions"), {
      to: [contactRecipient],
      replyTo: trimmedEmail,
      message: {
        subject: `New Junipra submission from ${trimmedName}`,
        text: [
          `Name: ${trimmedName}`,
          `Email: ${trimmedEmail}`,
          "",
          trimmedProject,
        ].join("\n"),
        html: createContactEmailHtml({
          name: trimmedName,
          email: trimmedEmail,
          project: trimmedProject,
        }),
      },
      form: {
        name: trimmedName,
        email: trimmedEmail,
        project: trimmedProject,
      },
      submittedAt: serverTimestamp(),
    })

    submitted.value = true
    form.name = ""
    form.email = ""
    form.project = ""
    form.website = ""
  } catch {
    errorMessage.value = "The message could not be sent right now. Please try again in a moment."
  } finally {
    isSubmitting.value = false
  }
}

function createContactEmailHtml(input: { name: string, email: string, project: string }) {
  return `
    <!doctype html>
    <html lang="en">
      <body style="margin:0;padding:24px;background:#F0F0E0;color:#103040;font-family:Inter,Arial,sans-serif;">
        <div style="max-width:640px;margin:0 auto;">
          <div style="background:#FAFAF2;border:1px solid #DADAC8;border-radius:24px;padding:24px;">
            <img src="https://junipra.com/JunipraHD.PNG" alt="Junipra" style="display:block;width:120px;height:auto;margin-bottom:16px;">
            <h1 style="margin:0 0 16px;font-size:24px;line-height:1.2;color:#103040;">New contact submission</h1>
            <div style="display:grid;gap:14px;">
              <div>
                <div style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#2B4A5A;font-weight:700;">Name</div>
                <div style="font-size:16px;line-height:1.7;">${escapeHtml(input.name)}</div>
              </div>
              <div>
                <div style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#2B4A5A;font-weight:700;">Email</div>
                <div style="font-size:16px;line-height:1.7;"><a href="mailto:${escapeHtml(input.email)}" style="color:#2C5F7F;">${escapeHtml(input.email)}</a></div>
              </div>
              <div>
                <div style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#2B4A5A;font-weight:700;">Project overview</div>
                <div style="font-size:16px;line-height:1.7;white-space:pre-line;">${escapeHtml(input.project)}</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}
</script>

<template>
  <div class="space-y-20 pb-20 pt-8 sm:space-y-24 sm:pt-12">
    <section class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div class="space-y-8">
        <Badge variant="outline" class="eyebrow-chip rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
          Contact
        </Badge>

        <div class="space-y-5">
          <h1 class="font-heading text-5xl leading-none text-balance sm:text-6xl">
            Tell us what you're building.
          </h1>
          <p class="max-w-2xl text-lg leading-8 text-muted-foreground">
            Junipra is built around practical collaboration, thoughtful pacing, and clear communication. If there is a project, product idea, or creative direction worth exploring, this is where that conversation can begin.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <Card
            v-for="card in cards"
            :key="card.title"
            class="glass-panel rounded-3xl border-border/70"
          >
            <CardHeader class="space-y-4">
              <div class="ornament-ring">
                <component :is="card.icon" class="size-5 text-primary" />
              </div>
              <div class="space-y-2">
                <CardTitle class="font-heading text-2xl">
                  {{ card.title }}
                </CardTitle>
                <CardDescription class="text-base leading-7 text-muted-foreground">
                  {{ card.description }}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>

      <Card class="hero-panel rounded-4xl border border-border/70">
        <CardHeader class="space-y-4 p-6 sm:p-8">
          <SectionHeader
            eyebrow="Inquiry form"
            title="A clear place to capture the basics."
            description="Share a few details about your project and we will follow up with the next steps."
          />
        </CardHeader>

        <CardContent class="px-6 pb-6 sm:px-8 sm:pb-8">
          <div v-if="submitted" class="glass-panel rounded-3xl border-border/70 p-6">
            <div class="space-y-3">
              <Badge variant="outline" class="status-active">Message queued</Badge>
              <h2 class="font-heading text-3xl">Message sent.</h2>
              <p class="text-base leading-7 text-muted-foreground">
                Thanks for reaching out. Your message is on its way, and we will get back to you as soon as we can.
              </p>
              <AppLink
                href="/"
                :class="cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'mt-3 rounded-xl')"
              >
                Return Home
              </AppLink>
            </div>
          </div>

          <form v-else class="space-y-5" @submit.prevent="handleSubmit">
            <div class="space-y-2">
              <label class="text-sm font-medium text-foreground" for="name">Name</label>
              <Input id="name" v-model="form.name" class="rounded-xl border-border/80 bg-background/80" placeholder="Your name" />
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-foreground" for="email">Email</label>
              <Input id="email" v-model="form.email" class="rounded-xl border-border/80 bg-background/80" placeholder="you@example.com" type="email" />
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-foreground" for="project">Project overview</label>
              <Textarea
                id="project"
                v-model="form.project"
                class="min-h-40 rounded-xl border-border/80 bg-background/80"
                placeholder="A short note about what you are building, what stage you are in, and what kind of help you need."
              />
            </div>

            <div class="hidden" aria-hidden="true">
              <label for="website">Website</label>
              <Input id="website" v-model="form.website" autocomplete="off" tabindex="-1" />
            </div>

            <p
              v-if="errorMessage"
              class="rounded-2xl border border-destructive/25 bg-destructive/8 px-4 py-3 text-sm leading-6 text-destructive"
            >
              {{ errorMessage }}
            </p>

            <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button class="rounded-xl" size="lg" type="submit" :disabled="isSubmitDisabled">
                <span>{{ isSubmitting ? "Sending..." : "Send Inquiry" }}</span>
                <ArrowRight class="size-4" />
              </Button>
              <p class="text-sm leading-6 text-muted-foreground">
                We review every inquiry carefully and respond with the most useful next step.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  </div>
</template>
