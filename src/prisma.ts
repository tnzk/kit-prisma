import type { PrismaClient } from '@prisma/client'
import Prisma from '@prisma/client'

export let prisma: PrismaClient

/*
if (Prisma === undefined) {
  console.debug('Default export is undefined');
  import('@prisma/client').then(({ PrismaClient }) => {
    prisma = new PrismaClient()
  })
} else {
  */
  console.debug('Default export is there!');
  prisma = new Prisma.PrismaClient()
//}