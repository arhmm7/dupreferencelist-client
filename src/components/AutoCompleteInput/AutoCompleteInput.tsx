import { useState } from "react"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"

interface Props {
  options: string[]
  value: string
  setValue: (val: string) => void
  onSelect: (val: string) => void
  placeholder?: string
}

export default function AutoCompleteInput({ options, value, setValue, onSelect, placeholder }: Props) {
  const [open, setOpen] = useState(false)

  const filtered = options.filter((item) =>
    item.toLowerCase().includes(value.toLowerCase())
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Input
          className="text-start"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
        />
      </PopoverTrigger>
      <PopoverContent className="p-0" side="bottom" align="start" sideOffset={4} avoidCollisions={false}>
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {filtered.map((item) => (
              <CommandItem
                key={item}
                onSelect={() => {
                  onSelect(item)
                  setValue(item)
                  setOpen(false)
                }}
              >
                {item}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
