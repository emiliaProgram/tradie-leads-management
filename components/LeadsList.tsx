"use client";

import { Lead } from '../types/Lead';
import LeadItem from './LeadItem';

interface LeadsListProps {
  leads: Lead[];
  onStatusChange: (lead: Lead) => void;
}

const LeadsList: React.FC<LeadsListProps> = ({ leads, onStatusChange }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Lead ID</th>
          <th>Category</th>
          <th>Price</th>
          <th>Created At</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <LeadItem key={lead.leadId} lead={lead} onStatusChange={onStatusChange} />
        ))}
      </tbody>
    </table>
  );
};

export default LeadsList;
