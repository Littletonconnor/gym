import { AppSidebar } from '@/components/app-sidebar'
import { SiteHeader } from '@/components/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { IconPlus } from '@tabler/icons-react'

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader header="Workouts" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-10 md:py-6 px-4 lg:px-6">
              {/* Header */}
              <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-semibold">Workouts</h2>
                <p className="text-base text-foreground">Create and manage your workout plans.</p>
                <Button asChild className="mt-2 w-fit">
                  <Link href="/workouts/new">
                    <IconPlus />
                    Start workout
                  </Link>
                </Button>
              </div>

              {/* TODO: Insights */}

              {/* Recent workouts  */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-semibold">Recent workouts</h2>
                </div>
                <div>Recent workout: 1</div>
                <div>Recent workout: 2</div>
              </div>

              {/* Workout Templates */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
                  <div>
                    <h2 className="text-xl font-semibold">Templates</h2>
                    <p className="text-sm text-foreground">
                      Create and save a new workout template.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Button asChild className="mt-2 w-fit">
                      <Link href="/templates/new">Create a new template</Link>
                    </Button>
                  </div>
                </div>
                <div>Template: 1</div>
                <div>Template: 2</div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
