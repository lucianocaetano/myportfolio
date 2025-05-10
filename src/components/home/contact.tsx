"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import HeadText from "../head-text"
import Image from "next/image"

const formSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string(),
})

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  
  return (
    <div className="flex flex-col items-center justify-center space-y-6 mb-16">
      <HeadText>Contact</HeadText>
      <Image src="/separatorBlack 6.png" alt="" width={130} height={170}></Image>
      <div className="mx-auto w-full max-w-4xl mt-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto w-2/3 space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field}  className="border-s-4 border-b-4 p-6 border-black rounded-none"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Phone*" {...field}  className="border-s-4 border-b-4 p-6 border-black rounded-none"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Message" {...field}  className="border-s-4 border-b-4 p-6 border-black rounded-none"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit"
              className="uppercase border-s-4 border-e-4 p-2 border-black my-16 text-center w-64 scale-80 bg-transition text-black rounded-none shadow-none text-xl font-bold py-6 cursor-pointer hover:text-white"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default Contact
