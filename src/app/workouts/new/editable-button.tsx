'use client'

import React from 'react'
import { Button } from '@/components/ui/button'

export function EditableButton() {
  const [isEditing, setIsEditing] = React.useState(false)
  const [title, setTitle] = React.useState('New Workout2')
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleOnClick = () => {
    setIsEditing(true)
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleOnBlur = () => {
    setIsEditing(false)
  }

  React.useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing, inputRef])

  return (
    <div className="h-9">
      {isEditing ? (
        <input
          ref={inputRef}
          className="text-3xl font-semibold h-9 outline-none"
          value={title}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
      ) : (
        <Button variant="ghost" className="px-0" onClick={handleOnClick}>
          <h2 className="text-3xl font-semibold">{title}</h2>
        </Button>
      )}
    </div>
  )
}
