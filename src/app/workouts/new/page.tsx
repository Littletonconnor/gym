import { AppSidebar } from '@/components/app-sidebar'
import { SiteHeader } from '@/components/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { EditableButton } from '@/app/workouts/new/editable-button'
import { Button } from '@/components/ui/button'
import React from 'react'

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
        <SiteHeader header="Create a new workout" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-10 md:py-6 px-4 lg:px-6">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
                  <EditableButton />
                  <div className="flex gap-2">
                    <Button variant="default" className="mt-2 w-fit">
                      Finish
                    </Button>
                    <Button variant="destructive" className="mt-2 w-fit">
                      Cancel
                    </Button>
                  </div>
                </div>
                <Button variant="outline" className="mt-2 w-fit">
                  Add exercise
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
