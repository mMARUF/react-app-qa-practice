# QA Testing Quiz

### Scenario
The frontend team has developed a prototype login portal for an up-and-coming platform.  
However, they have not implemented any testing yet, and it is up to you to do so.

As the QA developer, what is tested and how it is tested is up to you.  
Management simply asks that these tests provide as much evidence as possible of the platform's reliability.

---

### Cypress Tests
Cypress has been used to test the **UI functionality** of the login portal. Below are the key tests implemented:

1. **Login Functionality**:
   - Verified successful login with valid credentials.
   - Verified error messages for invalid credentials.
   - Verified validation errors for empty fields.

2. **Logout Functionality**:
   - Verified that the user can log out successfully.
   - Ensured that after logout, the user is redirected to the login page and the login button is visible.

3. **Custom Commands**:
   - Added a `cy.login()` command to handle login operations.
   - Added a `cy.logout()` command to handle logout operations.

These tests ensure the reliability of the login and logout workflows and validate the UI behavior under different scenarios.

---

### Jest Test(s)
Jest has been used to test the **API functionality** of the backend. Below are the key tests implemented in `api.test.js`:

1. **Root Endpoint**:
   - Verified that the root endpoint (`/`) returns a welcome message.

2. **User Management**:
   - Tested the creation of a new user (`POST /user`).
   - Verified that duplicate user creation is not allowed.
   - Tested the deletion of an existing user (`DELETE /user`).
   - Verified that deleting a non-existent user returns the appropriate error message.
   - Tested updating an existing user's details (`PUT /user`).
   - Verified that updating a non-existent user returns the appropriate error message.

3. **Login Endpoint**:
   - Verified successful login with valid credentials (`POST /login`).
   - Verified error messages for invalid credentials.
   - Verified validation errors for missing or empty fields.

These tests ensure the reliability of the backend API by validating its behavior under various scenarios.

---

### Notes
- Submission must include a link to a public fork/clone of this repository.
- Jest is used for testing Node.js/API-related logic, and Cypress is used for testing UI functionality.
- The tests provide comprehensive coverage of both the frontend and backend components of the platform.
