import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedDatabase() {
  await prisma.lead.createMany({
    data: [
      { category: 'plumber', price: 100.0, status: null, createdAt: new Date() },
      { category: 'plumber', price: 150.0, status: 'accepted', createdAt: new Date() },
    ],
  });
}

export async function truncateDatabase() {
  await prisma.lead.deleteMany({});
}
