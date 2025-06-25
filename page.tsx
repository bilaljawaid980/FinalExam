"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createTask } from "../app/serverAction/Task"
import { task } from "@/lib/generated/prisma"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "TaskName must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "TaskName must be at least 2 characters.",
  }),
  isCompleted:z.boolean()
})

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      isCompleted:false
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createTask(values as task);
    form.reset()
    console.log(values)
    toast("Task Added Successfully")
  }

  return (
   <div className="flex items-center justify-center h-screen">
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>TaskName</FormLabel>
              <FormControl>
                <Input placeholder="Practice Math" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>TaskDescription</FormLabel>
              <FormControl>
                <Input placeholder="Task Description" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

        
        <Button type="submit" className="flex items-center w-20 ">ADD TASK</Button>
        <Button className="w-20"  >
          <Link href={"/list"} >
          VIEW TASK
           </Link></Button>
      </form>
    </Form>
   </div>
  )
}