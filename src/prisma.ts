import { PrismaClient } from '@prisma/client'

export let prisma: PrismaClient

console.log('Default export is there!');
prisma = new PrismaClient()
