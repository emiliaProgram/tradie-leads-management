import { seedDatabase, truncateDatabase } from './prisma/seed';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.test' });

const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.$connect();
  await seedDatabase();
});

afterAll(async () => {
  await truncateDatabase();
  await prisma.$disconnect();
});
