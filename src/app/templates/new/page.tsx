import { AppSidebar } from '@/components/app-sidebar'
import { SiteHeader } from '@/components/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

import { Button } from '@/components/ui/button'
import React from 'react'
import { Input } from '@/components/ui/input'

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
        <SiteHeader header="Create a new template" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-10 md:py-6 px-4 lg:px-6">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
                  <EditableButton />
                  <Button variant="default" className="mt-2 w-fit">
                    Finish workout
                  </Button>
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

// A title that starts off as a button but once clicked turns into a textfield
function EditableButton() {
  const [isEditing, setIsEditing] = React.useState(false)

  return (
    <div>
      {isEditing ? (
        <Input value="blah" />
      ) : (
        <Button variant="ghost" className="mt-2 w-fit" onClick={() => setIsEditing(true)}>
          <h2 className="text-3xl font-semibold">New Workout2</h2>
        </Button>
      )}
    </div>
  )
}
