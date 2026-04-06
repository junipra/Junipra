export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Web Services", href: "/web-services" },
  { label: "Collective", href: "/collective" },
  { label: "Music", href: "/music" },
  { label: "Contact", href: "/contact" },
] as const

export const branchStatusLabel: Record<"active" | "coming-soon", string> = {
  active: "Active",
  "coming-soon": "Coming Soon",
}
