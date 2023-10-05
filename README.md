# Personal-Finance-Tracker

**Features:**

        Users can create different expense categories (e.g., entertainment, utilities, travel)
        Users can create an expense list by providing expense related data (e.g., expense amount, expense date, etc.)
        Users can visualize their total monthly expenses in a graph
        Integration with a charting library for data visualization

API Endpoints

The following API endpoints are created:

    GET api/category Get a list of all categories
    GET /api/category/{id} Get a category by ID
    POST /api/category Create a new category
    PUT /api/category/{id} Update an existing category by ID
    DELETE /api/category/{id} Delete a category by ID

    GET /api/expenses Get a list of all expenses
    GET /api/expenses/{id} Get a expense by ID
    POST /api/expenses Create a new expense
    PUT /api/expenses/{id} Update an existing expense by ID
    DELETE /api/expenses/{id} Delete a expense by ID

**Technologies:**  

       React for the frontend
       Spring Boot for the backend
       MySQL as the database
       Integration with a charting library for data visualization
      
**Tools & IDEs:**

      1) In order to implement front-end code used Visual Studio Code
      2) In order to implement back-end code used IntelliJ IDEA
      3) MySQL Workbench for db 
      4) Used Postman to test the created (CRUD) API endpoints

**Tip:**
Use "npm install" command to install the node_modules for the React project.
