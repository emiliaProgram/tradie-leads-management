"use client";

import React, { useState } from 'react';
import CreateLeadForm from '../../components/CreateLeadForm';
import { Lead } from '../../types/Lead';
import Link from 'next/link';

const CreateLeadPage: React.FC = () => {
  const [lead, setLead] = useState<Lead | null>(null);

  const handleLeadCreated = (newLead: Lead) => {
    setLead(newLead);
  };

  return (
    <div>
      <h1>Create a New Lead</h1>
      <CreateLeadForm onLeadCreated={handleLeadCreated} />
      {lead && (
        <div>
          <h2>Lead Created</h2>
          <p>Category: {lead.category}</p>
          <p>Price: ${lead.price}</p>
          <p>Status: {lead.status || 'Pending'}</p>
          <p>Created At: {new Date(lead.createdAt).toLocaleString()}</p>
        </div>
      )}
      <Link href="/">Go Back to Home</Link>
    </div>
  );
};

export default CreateLeadPage;
