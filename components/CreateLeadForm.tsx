"use client";

import { useState } from 'react';
import { Lead } from '../types/Lead';

interface CreateLeadFormProps {
  onLeadCreated: (lead: Lead) => void;
}

const CreateLeadForm: React.FC<CreateLeadFormProps> = ({ onLeadCreated }) => {
  const [category, setCategory] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category, price: parseFloat(price) }),
    });
    const data: Lead = await response.json();
    onLeadCreated(data);
    setCategory('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Create Lead</button>
    </form>
  );
};

export default CreateLeadForm;
