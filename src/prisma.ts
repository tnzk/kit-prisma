import type { PrismaClient } from '@prisma/client'
import Prisma from '@prisma/client'

export let prisma: PrismaClient

console.debug('Prisma wrapper is called; no branching');
prisma = new Prisma.PrismaClient()