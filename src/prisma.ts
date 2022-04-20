import type { PrismaClient } from '@prisma/client'
import Prisma from '@prisma/client'

export let prisma: PrismaClient

console.log('Default export is there!');
prisma = new Prisma.PrismaClient()
