import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function PATCH(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();
  const { status } = await req.json();

  if (!id) {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  }

  try {
    const lead = await prisma.lead.findUnique({
      where: { leadId: Number(id) },
    });

    if (!lead) {
      return NextResponse.json({ message: 'Lead not found' }, { status: 404 });
    }

    if (lead.status) {
      return NextResponse.json({ message: 'Lead status cannot be changed once set' }, { status: 400 });
    }

    if (!['accepted', 'declined'].includes(status)) {
      return NextResponse.json({ message: 'Invalid status' }, { status: 400 });
    }

    const updatedLead = await prisma.lead.update({
      where: { leadId: Number(id) },
      data: { status },
    });

    return NextResponse.json(updatedLead, { status: 200 });
  } catch (error) {
    console.error('Error updating lead status:', error);
    return NextResponse.json({ message: 'Error updating lead status' }, { status: 500 });
  }
}
