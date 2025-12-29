"use client"

import { Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { mockTopTherapists } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

export function TopTherapistsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performing Therapists</CardTitle>
        <CardDescription>Ranked by revenue this month</CardDescription>
      </CardHeader>
      <CardContent>
          <Table className="bg-background">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-12">#</TableHead>
              <TableHead>Therapist</TableHead>
              <TableHead className="text-right">Bookings</TableHead>
              <TableHead className="text-right">Revenue</TableHead>
              <TableHead className="text-right">Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTopTherapists.map((therapist, index) => (
              <TableRow key={therapist.id}>
                <TableCell>
                  <span
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold",
                      index === 0 && "bg-[#b8860b] text-black",
                      index === 1 && "bg-[#C0C0C0] text-black",
                      index === 2 && "bg-[#CD7F32] text-white",
                      index > 2 && "bg-muted text-muted-foreground",
                    )}
                  >
                    {index + 1}
                  </span>
                </TableCell>
                <TableCell className="font-medium">{therapist.name}</TableCell>
                <TableCell className="text-right">{therapist.bookings}</TableCell>
                <TableCell className="text-right font-medium">${therapist.revenue.toLocaleString()}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Star className="h-3 w-3 fill-[#b8860b] text-[#b8860b]" />
                    <span className={cn(therapist.rating >= 4.9 && "text-[#b8860b] font-medium")}>
                      {therapist.rating.toFixed(2)}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
