'use client'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {useState} from "react"


const MenuMobile = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="">
      <Sheet open={open}>
        <SheetTrigger asChild>
          <button
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            menu
          </button>
        </SheetTrigger>
        <SheetContent 
          side={'top'} 
          className="bg-gradient-to-b h-full from-black/60 to-transparent"
        >
          <SheetHeader>
            <div
              className="flex items-center justify-between w-full"
            >
              <SheetTitle className="text-white text-2xl">Menu</SheetTitle>
              <div className="text-white">
                <button
                  className="cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  close 
                </button>
              </div>
            </div>
          </SheetHeader>
          
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MenuMobile
