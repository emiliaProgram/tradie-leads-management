# Project Overview

## Table of Contents

1. [Project Requirements](#project-requirements)
2. [Software Explanation](#software-explanation)
   - [API Design](#api-design)
   - [Using Promises](#using-promises)
3. [Future Improvements](#future-improvements)
   - [Providing Test Coverage](#providing-test-coverage)
   - [Adding more details to DB](#adding-more-details-to-DB)
   - [Improving the UI](#improving-the-ui)
   - [Adding More User Interactions](#adding-more-user-interactions)

## Project Requirements

1. **Functionality**
   - Create a new lead.
   - List all leads.
   - Accept or decline a specific lead.

2. **Lead Entity Structure**
   - `leadId`: Number (e.g., 1)
   - `category`: String (e.g., plumber)
   - `price`: Number (e.g., 10.00)
   - `status` (Optional): String (e.g., null, accepted, declined)
   - `createdAt`: Timestamp (e.g., 2024-05-01 12:30:10)

3. **Technology Stack**
   - Next.js framework with TypeScript.
   - SQLite as the database.
   - Use promises (async/await) when necessary.

4. **Quality**
   - Production-quality software (tests, README, etc.).
   - Focus on separation of concerns, API design, error handling, and unit/integration tests.

## Software Explanation

### API Design

The software includes a RESTful API with the following endpoints:

1. **Create a New Lead**
   - **Endpoint**: `POST /api/leads`
   - **Description**: Adds a new lead to the database.
   - **Request Body**:
     ```json
     {
       "category": "string",
       "price": "number"
     }
     ```
   - **Response**:
     - **201 Created**: Returns the created lead object.
     - **500 Internal Server Error**: Returns an error message if the lead creation fails.

2. **List All Leads**
   - **Endpoint**: `GET /api/leads`
   - **Description**: Retrieves all leads from the database.
   - **Response**:
     - **200 OK**: Returns an array of lead objects.
     - **500 Internal Server Error**: Returns an error message if the retrieval fails.

3. **Accept/Decline a Specific Lead**
   - **Endpoint**: `PATCH /api/leads/:id`
   - **Description**: Updates the status of a specific lead.
   - **Request Body**:
     ```json
     {
       "status": "accepted" | "declined"
     }
     ```
   - **Response**:
     - **200 OK**: Returns the updated lead object.
     - **500 Internal Server Error**: Returns an error message if the update fails.

### Using Promises

The software uses asynchronous programming with promises to handle database operations efficiently. The `async` and `await` syntax is utilized to ensure non-blocking code execution. Below are examples of how promises are used in the API endpoints:

- **Creating a Lead**
  ```typescript
  handler.post(async (req, res) => {
    try {
      const { category, price } = req.body;
      const newLead = await prisma.lead.create({
        data: {
          category,
          price: parseFloat(price),
        },
      });
      res.status(201).json(newLead);
    } catch (error) {
      console.error('Error creating lead:', error);
      res.status(500).json({ message: 'Error creating lead' });
    }
  });
  ```

- **Listing Leads**
  ```typescript
  handler.get(async (req, res) => {
    try {
      const leads = await prisma.lead.findMany();
      res.status(200).json(leads);
    } catch (error) {
      console.error('Error fetching leads:', error);
      res.status(500).json({ message: 'Error fetching leads' });
    }
  });
  ```

- **Updating Lead Status**
  ```typescript
  handler.patch(async (req, res) => {
    const { id } = req.query;
    const { status } = req.body;

    try {
      const lead = await prisma.lead.update({
        where: { leadId: Number(id) },
        data: { status },
      });
      res.status(200).json(lead);
    } catch (error) {
      console.error('Error updating lead status:', error);
      res.status(500).json({ message: 'Error updating lead status' });
    }
  });
  ```

## Future Improvements

### Providing Test Coverage

- **Unit Tests**: Write unit tests for individual functions and components to ensure they work correctly in isolation.
- **Integration Tests**: Write integration tests to verify that different parts of the system work together as expected.
- **End-to-End Tests**: Write end-to-end tests to simulate user interactions and verify that the system behaves correctly from the user's perspective.

### Adding more details to DB

- **Lead description**: Add more information related to leads such as description, due date, etc...

### Improving the UI

- **Design Enhancements**: Improve the visual design and user experience of the application using modern UI/UX principles.
- **Responsive Design**: Ensure the application is fully responsive and works well on various devices and screen sizes.
- **Accessibility**: Enhance accessibility to make the application usable for people with disabilities.

### Adding More User Interactions

- **Notifications**: Add notifications to inform users about the status changes of their leads.
- **User Authentication**: Implement user authentication and authorization to allow multiple users to manage their leads securely.
- **Advanced Filtering and Sorting**: Add advanced filtering and sorting options to make it easier for users to manage and find specific leads.

