import { ClientTable } from "@/components/client-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, Calendar, Star } from "lucide-react"
import { mockClients } from "@/lib/mock-data"

export default function ClientsPage() {
  const totalClients = mockClients.length
  const totalRevenue = mockClients.reduce((acc, c) => acc + c.totalSpent, 0)
  const totalBookings = mockClients.reduce((acc, c) => acc + c.totalBookings, 0)
  const vipClients = mockClients.filter((c) => c.totalSpent >= 5000).length

  return (
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-[color:var(--color-border)]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[color:var(--color-muted-foreground)]">Total Clients</CardTitle>
              <Users className="h-4 w-4 text-[color:var(--color-muted-foreground)]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalClients}</div>
              <p className="text-xs text-[color:var(--color-muted-foreground)]">+3 this week</p>
            </CardContent>
          </Card>

          <Card className="border-[color:var(--color-border)]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[color:var(--color-muted-foreground)]">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-[color:var(--color-primary)]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-[color:var(--color-muted-foreground)]">From all clients</p>
            </CardContent>
          </Card>

          <Card className="border-[color:var(--color-border)]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[color:var(--color-muted-foreground)]">Total Bookings</CardTitle>
              <Calendar className="h-4 w-4 text-[color:var(--color-muted-foreground)]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalBookings}</div>
              <p className="text-xs text-[color:var(--color-muted-foreground)]">All time</p>
            </CardContent>
          </Card>

          <Card className="bg-[color:var(--color-sidebar)] border-[color:var(--color-sidebar-border)]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[color:var(--color-muted-foreground)]">VIP Clients</CardTitle>
              <Star className="h-4 w-4 text-[color:var(--color-primary)]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[color:var(--color-primary)]">{vipClients}</div>
              <p className="text-xs text-[color:var(--color-muted-foreground)]">$5,000+ spent</p>
            </CardContent>
          </Card>
        </div>

        {/* Client Table */}
        <ClientTable />
      </div>
  )
}
