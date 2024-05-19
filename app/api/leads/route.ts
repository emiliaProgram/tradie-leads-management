import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const leads = await prisma.lead.findMany();
    return NextResponse.json(leads, { status: 200 });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json({ message: 'Error fetching leads' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { category, price } = await req.json();
    const newLead = await prisma.lead.create({
      data: {
        category,
        price: parseFloat(price),
      },
    });
    return NextResponse.json(newLead, { status: 201 });
  } catch (error) {
    console.error('Error creating lead:', error);
    return NextResponse.json({ message: 'Error creating lead' }, { status: 500 });
  }
}
