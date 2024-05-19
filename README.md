# Tradie Leads Manager

This is a Next.js project for managing leads for a single tradie. The project includes an API for creating, listing, and updating the status of leads. The project uses Next.js, Prisma, and SQLite.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/emiliaProgram/tradie-leads-management.git
   cd tradie-leads-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   ```bash
   npx prisma migrate dev --name init
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
The application will be running at `http://localhost:3000`.

5. Run tests:
   ```bash
   npm run test
   ```

## Usage

### Creating a Lead
Go to `/create-lead`, enter input to create a lead.

Or

To create a lead, send a POST request to `/api/leads` with the lead details:

```json
{
  "category": "plumber",
  "price": 100.0
}
```

### Listing Leads
Go to `/leads` to see all leads

Or

To list all leads, send a GET request to `/api/leads`.

### Updating a Lead Status
Go to `/leads` to update status of a lead.

Or

To update the status of a lead, send a PATCH request to `/api/leads/[id]` with the new status:

```json
{
  "status": "accepted"
}
```

## API Endpoints

- `POST /api/leads`: Create a new lead.
- `GET /api/leads`: List all leads.
- `PATCH /api/leads/[id]`: Update the status of a specific lead.

## Project Structure

```
tradie-leads-manager/
├── app/
│   ├── api/
│   │   └── leads/
│   │       └── route.ts
│   │       └── [id]
│   │           └── route.ts
│   ├── create-lead
│   │   └── page.tsx
│   ├── leads
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
├── components/
│   ├── CreateLeadForm.tsx
│   ├── LeadItem.tsx
│   └── LeadsList.tsx
├── lib/
│   └── prisma.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── types/
│   └── Lead.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

## Technologies Used

- **Next.js**: The React framework for production.
- **Prisma**: Next-generation ORM for Node.js and TypeScript.
- **SQLite**: A self-contained, high-reliability, embedded, full-featured, public-domain, SQL database engine.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.


