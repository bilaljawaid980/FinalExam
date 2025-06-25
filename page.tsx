import React from 'react'
import Link from 'next/link'
import deleteDialog from '@/components/custom/dete-dialoge'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getAllTask } from '../serverAction/Task'
import { icons, ImportIcon } from 'lucide-react'
import { id } from 'zod/v4/locales'
const List = async() => {
    const task= await getAllTask();
  return (
    <div className='flex items-center justify-center px-40'>
      <Table>
  <TableCaption>All your Added Tasks </TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Task number 01</TableHead>
      <TableHead>Task Name</TableHead>
      <TableHead>Task Description</TableHead>
    
    </TableRow>
  </TableHeader>
  <TableBody>
    {task.data.map((data)=>
    <TableRow key={data.id}>
      <TableCell className="font-medium">{data.id}</TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.description}</TableCell>
       <TableCell >deleteDialog()
        </TableCell>

    </TableRow>
    )}
    
  </TableBody>
</Table>
    </div>
  )
}

export default List
