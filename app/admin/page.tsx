import type { Metadata } from "next"
import { AdminDashboard } from "@/components/admin/admin-dashboard"
import { AdminLayout } from "@/components/admin/admin-layout"

export const metadata: Metadata = {
  title: "Admin Dashboard | Premium Blog",
  description: "Admin dashboard for managing Premium Blog content and settings.",
  robots: "noindex, nofollow",
}

export default function AdminPage() {
  return (
    <AdminLayout>
      <AdminDashboard />
    </AdminLayout>
  )
}
