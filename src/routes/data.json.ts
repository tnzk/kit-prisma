import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

/** @type {import('./data.json').RequestHandler} */
export async function get({ }) {
  const created = `await prisma.user.create({ data: { name: 'some name' } })`

  if (created) {
    return {
      body: { created }
    };
  }
 
  return {
    status: 404
  };
}