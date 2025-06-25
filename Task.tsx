'use server'

import { task } from '@/lib/generated/prisma'
import prisma from '@/lib/prisma'
import { PrismaClient, Prisma } from '@prisma/client'




import React from 'react'
import { success } from 'zod/v4-mini'

export async function createTask(formData:task){
    
const data=await prisma.task.create( {
  data :{

  name: formData.name,
description: formData.description,
   isCompleted:formData.isCompleted
},
})

}

export async function getAllTask() {
  const data=await prisma.task.findMany()
    where:{
      isCompleted:true
    }
    return{
      success:true,
      data:data
    }
  }

  export async function deletetaskById(_id:number) {
  const data=await prisma.task.delete({
    where:{
id:_id    
}
    
  })
  
  }
