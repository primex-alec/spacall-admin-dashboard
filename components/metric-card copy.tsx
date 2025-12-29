import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
  highlight?: boolean
}

export function MetricCard({ title, value, subtitle, icon: Icon, trend, highlight }: MetricCardProps) {
  return (
    <Card
      className={cn(
        "border transition-all hover:shadow-lg",
        highlight ? "border-[#b8860b] bg-[#000000] text-white" : "border-border",
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className={cn("text-sm font-medium", highlight ? "text-[#999999]" : "text-muted-foreground")}>{title}</p>
            <p className={cn("text-3xl font-bold tracking-tight", highlight && "text-[#b8860b]")}>{value}</p>
            {subtitle && (
              <p className={cn("text-xs", highlight ? "text-[#666666]" : "text-muted-foreground")}>{subtitle}</p>
            )}
            {trend && (
              <div className="flex items-center gap-1 text-xs">
                <span className={trend.isPositive ? "text-green-500" : "text-red-500"}>
                  {trend.isPositive ? "+" : ""}
                  {trend.value}%
                </span>
                <span className={highlight ? "text-[#666666]" : "text-muted-foreground"}>vs last month</span>
              </div>
            )}
          </div>
          <div className={cn("rounded-lg p-3", highlight ? "bg-[#b8860b]" : "bg-secondary")}>
            <Icon className={cn("h-5 w-5", highlight ? "text-black" : "text-foreground")} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
