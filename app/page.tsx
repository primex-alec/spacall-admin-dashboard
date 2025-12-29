import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl items-center gap-3.5 py-32 px-16 bg-background">
        <Button size="lg">
          <Link href="/admin/dashboard">Go to Dashboard</Link>
        </Button>
        <ModeToggle />
      </main>
    </div>
  );
}
