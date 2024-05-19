"use client";

import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Tradie Leads Management</h1>
      <ul>
        <li>
          <Link href="/create-lead">
            Create a New Lead
          </Link>
        </li>
        <li>
          <Link href="/leads">
            View All Leads
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
