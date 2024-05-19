"use client";

import { Lead } from '../types/Lead';

interface LeadItemProps {
  lead: Lead;
  onStatusChange: (lead: Lead) => void;
}

const LeadItem: React.FC<LeadItemProps> = ({ lead, onStatusChange }) => {
  const handleStatusChange = async (status: string) => {
    const response = await fetch(`/api/leads/${lead.leadId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    const updatedLead: Lead = await response.json();
    onStatusChange(updatedLead);
  };

  return (
    <tr>
      <td>{lead.leadId}</td>
      <td>{lead.category}</td>
      <td>${lead.price}</td>
      <td>{new Date(lead.createdAt).toLocaleString()}</td>
      <td>{lead.status || 'Pending'}</td>
      <td>
        {lead.status === null && (
          <>
            <button onClick={() => handleStatusChange('accepted')}>Accept</button>
            <button onClick={() => handleStatusChange('declined')}>Decline</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default LeadItem;
