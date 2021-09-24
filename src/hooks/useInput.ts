import React, { useState } from 'react'

type useInputType = [
    string,
    (e: React.ChangeEvent<HTMLInputElement>) => void
]

export const useInput = (initialValue: string): useInputType => {
  const [value, setValue] = useState<string>(initialValue)

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return [value, handleValue]
}
