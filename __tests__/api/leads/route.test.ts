import { createMocks } from 'node-mocks-http';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('Leads API with Seed Data', () => {
  describe('GET /api/leads', () => {
    it('should return a list of leads', async () => {

    });
  });

  describe('POST /api/leads', () => {
    it('should create a new lead', async () => {

    });
  });

  describe('PATCH /api/leads/:id', () => {
    it('should update lead status', async () => {
      
    });
  });
});