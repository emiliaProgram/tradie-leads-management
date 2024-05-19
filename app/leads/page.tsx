"use client";

import React, { useState, useEffect } from 'react';
import LeadsList from '../../components/LeadsList';
import { Lead } from '../../types/Lead';
import Link from 'next/link';

const LeadsPage: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const response = await fetch('/api/leads');
      const data: Lead[] = await response.json();
      setLeads(data);
    };

    fetchLeads();
  }, []);

  const handleStatusChange = (updatedLead: Lead) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.leadId === updatedLead.leadId ? updatedLead : lead
      )
    );
  };

  return (
    <div>
      <h1>All Leads</h1>
      <LeadsList leads={leads} onStatusChange={handleStatusChange} />
      <Link href="/">Go Back to Home</Link>
    </div>
  );
};

export default LeadsPage;
