# Rebirth

- The deployed link is: [https://rebirth-of-a-queen.vercel.app/]

## Controllers

 ## ApplicationContoller

 ### BDD:

Given that a user has successfully authenticated and has a valid JWT token, when they make a request to the API, the token should be included in the request header. 

When the API receives the request, it should decode the token using the secret key to authenticate and authorize the user. 

If the user is authenticated and authorized, the API should execute the requested action and return the appropriate response. 

If the user is not authenticated or authorized, the API should return an unauthorized status code and an error message, indicating that the user needs to login.

### Pseudocode:

- Define a class called `ApplicationController` that inherits from `ActionController::API`.
- Define a before action callback that requires authorization before any other actions can be executed.
- Define a method called `encode_token` that takes a payload as an argument and returns a JSON Web Token encoded with the payload and a secret key.
- Define a method called `auth_header` that retrieves the authorization header from the request.
- Define a method called `decoded_token` that checks if an authorization header exists, extracts the token from it, and attempts to decode it using the secret key. If successful, it returns the decoded token, otherwise it returns nil.
- Define a method called `current_user` that checks if a decoded token exists, extracts the user ID from it, and returns the corresponding user object from the database.
- Define a method called `logged_in?` that checks if a current user object exists and returns a boolean value.
- Define a method called `authorized` that checks if a logged-in user exists, and if not, returns an unauthorized status code with an error message.

## Authcontroller 

### BDD
Authentication:
  As an admin user
  I want to be able to login with my email and password
  So that I can access protected resources

    Given a registered user with email "johndoe@example.com" and password "password"
    When the user submits their email and password to the login endpoint
    Then a JWT token is returned along with the user's data
    And the response status code is 202 Accepted

    Given a registered user with email "johndoe@example.com" and password "password"
    When the user submits an incorrect email to the login endpoint
    Then an error message is returned
    And the response status code is 401 Unauthorized

    Given a registered user with email "johndoe@example.com" and password "password"
    When the user submits an incorrect password to the login endpoint
    Then an error message is returned
    And the response status code is 401 Unauthorized

### Pseudocode:
-Define skip authentication for the create action
- Define a method to login admin user
- find user by email
- authenticate user using password
- Define encode token and return user data and token
- return error message if authentication fails
- only allow email and password parameters


## BlogsContoller

### BDD
To Manage Blogs:
  As a user
  I want to be able to manage blogs
  So that I can create, view, update, and delete blogs

- Getting all blogs
    Given there are existing blogs
    When I view the list of blogs
    Then I should see a list of all the blogs

- Viewing a single blog
    Given there is an existing blog
    When I view the blog
    Then I should see the details of the blog

 - Create a new blog
    Given I am authenticated
    When I create a new blog with valid details
    Then the new blog should be created and I should receive a success message

  - Update an existing blog
    Given I am authenticated
    And there is an existing blog
    When I update the blog with valid details
    Then the blog should be updated and I should receive a success message

 - Delete an existing blog
    Given I am authenticated
    And there is an existing blog
    When I delete the blog
    Then the blog should be deleted and I should receive a success message


### Pseudocode
     get all blogs
     render blogs as json
     render the specified blog as json
     create a new blog object with the permitted parameters
     save the new blog object
     render the newly created blog object as json with a 201 status code
     render the error messages as json with a 422 status code
     check if the blog object with the specified id exists
     update the attributes of the blog object with the permitted parameters
     render the updated blog object as json
     render the error messages as json with a 422 status code
     render a not found message as json with a 404 status code
     destroy the specified blog
     respond with no content
     set the @blog instance variable to the blog object with the specified id
     permit the specified parameters for creating and updating blog objects


## GalleriesController

### BDD

To Manage galleries:

  As a user, I want to manage galleries

 View all galleries
    Given the user is on the galleries index page
    When the user requests all galleries
    Then the user should see a list of all galleries

  View a single gallery
    Given the user is on a gallery show page
    When the user requests a single gallery
    Then the user should see the details of the gallery

 Create a gallery
    Given the user is on the create gallery page
    When the user submits valid gallery information
    Then a new gallery should be created

 Update a gallery
    Given the user is on the edit gallery page
    When the user submits valid changes to a gallery
    Then the gallery should be updated with the new information

 Delete a gallery
    Given the user is on the gallery show page
    When the user clicks on the delete button
    Then the gallery should be deleted


### Pseudocode

   set_gallery is a private method that sets the instance variable @gallery to the gallery object with the specified `:id` parameter
   skip authentication for index and show actions
   get all galleries
   get a single gallery by id
   create a new gallery with the permitted parameters
   update a gallery with the permitted parameters
   destroy a gallery
   set_gallery is a private method that sets the instance variable @gallery to the gallery object with the specified `:id` parameter
   Only allow a list of trusted parameters through.

## ProgramsController 

### BDD 
  As a user
  I want to be able to create, view, update, and delete programs
  So that I can manage the programs offered by the platform

   User views a list of programs:
    When I send a GET request to "/programs"
    Then the response status should be 200 OK
    And the response should contain a list of programs
    And each program should have a title and a description

   User views a program by id:
    Given a program with id 1 exists
    When I send a GET request to "/programs/1"
    Then the response status should be 200 OK
    And the response should contain the program with id 1
    And the program should have a title and a description

   User creates a program:
    When I send a POST request to "/programs" with the following data:
      | title       | description                         |
      | New Program | This is the description of New Program |
    Then the response status should be 201 Created
    And the response should contain the new program
    And the program should have a title and a description
    And the program should be added to the list of programs

 User updates a program:
    Given a program with id 1 exists
    When I send a PUT request to "/programs/1" with the following data:
      | title           | description                            |
      | Updated Program | This is the description of Updated Program |
    Then the response status should be 200 OK
    And the response should contain the updated program
    And the program should have the new title and description

  User deletes a program:
    Given a program with id 1 exists
    When I send a DELETE request to "/programs/1"
    Then the response status should be 204 No Content
    And the program with id 1 should no longer exist
    And the list of programs should not contain the program with id 1

### Pseudocode

  #### GET /programs
     Retrieve all programs from the database
     Render the programs as JSON

  #### GET /programs/1
     Retrieve the program with the specified ID from the database
     Render the program as JSON
  #### POST 
     Create a new program with the specified parameters
     If the program was saved successfully
     Render the program as JSON with a "Created" status and the program's location 
     Render the program's errors as JSON with an "Unprocessable Entity" status
  #### PATCH
     Retrieve the program with the specified ID from the database
     Update the program's attributes with the specified parameters
     Render the updated program as JSON
     Render the program's errors as JSON with an "Unprocessable Entity" status
  #### DELETE /programs/1
     Destroy the program
 Set the program variable based on the ID parameter
 Only allow a list of trusted parameters through

## StaffsController

### BDD

Manage Staffs:
  As an admin
  I want to manage the staffs in the organization
  So that I can keep track of their information

  View all staffs:
    Given I am an authenticated admin
    When I visit the staffs page
    Then I should see a list of all staffs

  View a single staff:
    Given I am an authenticated admin
    When I visit the details page of a staff
    Then I should see the staff's information

 Add a new staff:
    Given I am an authenticated admin
    When I add a new staff with valid information
    Then I should see the staff's details on the staffs page

 Update an existing staff:
    Given I am an authenticated admin
    When I update a staff's information with valid information
    Then I should see the updated information on the staff's details page

 Delete a staff:
    Given I am an authenticated admin
    When I delete a staff
    Then I should not see the staff's information on the staffs page


### Pseudocode

1. Declare a class named StaffsController that inherits from ApplicationController.

2. Create a before_action filter that calls the set_staff method for the show, update, and destroy actions.

3. Define the index action for the StaffsController:
    - Assign all staffs to the @staffs instance variable.
    - Render a JSON response with the @staffs instance variable.

4. Define the show action for the StaffsController:
    - Render a JSON response with the @staff instance variable.

5. Define the create action for the StaffsController:
    - Instantiate a new Staff object with the sanitized staff_params.
    - If the staff object saves successfully:
        - Render a JSON response with the saved staff object and a status of 201 Created.
    - Else:
        - Render a JSON response with the errors from the staff object and a status of 422 Unprocessable Entity.

6. Define the update action for the StaffsController:
    - If the @staff object updates successfully with the sanitized staff_params:
        - Render a JSON response with the updated @staff object.
    - Else:
        - Render a JSON response with the errors from the @staff object and a status of 422 Unprocessable Entity.

7. Define the destroy action for the StaffsController:
    - Call the destroy method on the @staff object.

8. Define the private method set_staff:
    - Find the staff object by the id parameter in the params hash.
    - Assign the found staff object to the @staff instance variable.

9. Define the private method staff_params:
    - Require the staff parameter from the params hash.
    - Permit only the specified attributes.


## UserController

### BDD

User Management:

  User creation:
    Given I am an authenticated user with admin privileges
    When I create a new user with name "John Doe", email "john.doe@example.com", role "user", and password "password123"
    Then I should receive a response with status code 201
    And the response body should contain the newly created user's details

 User update:
    Given I am an authenticated user with admin privileges
    And there exists a user with ID 123
    When I update the user with ID 123, changing their name to "Jane Doe" and email to "jane.doe@example.com"
    Then I should receive a response with status code 200
    And the response body should contain the updated user's details

 User deletion:
    Given I am an authenticated user with admin privileges
    And there exists a user with ID 123
    When I delete the user with ID 123
    Then I should receive a response with status code 204
    And the user with ID 123 should no longer exist in the database


### Pseudocode

   Allow unauthenticated users to create a new user
   Require authentication for all other actions
   Find the user for update and delete actions

  # Create a new user
   Extract user params from the request
   Create a new user with the extracted params
   Generate a JWT token for the new user
   Return the new user and JWT token as JSON
   Return the validation errors as JSON

  # Update an existing user
   Extract user params from the request
   Update the user with the extracted params
   Return the updated user as JSON
   Return the validation errors as JSON

  # Delete an existing user
   Delete the user from the database
   Return a response with no content
   Find the user with the given ID

## Models

### BDD:

- Blog Model.

Given the Blog model,
When a blog is created without a title, body, author, date, or user_id
Then the blog is not valid
And an error message is displayed

- Gallery Model.

Given the Gallery model,
When a gallery is created without a title or description
Then the gallery is not valid
And an error message is displayed

- Program Model.

Given the Program model,
When a program is created without a title or description
Then the program is not valid
And an error message is displayed

- Staff Model.

Given the Staff model, 
When a staff member is created with an invalid email format
Then the staff member is not valid
And an error message is displayed

- Survivor Model.
Given the Survivor model,
When a survivor is created without any required fields
Then the survivor is not valid
And an error message is displayed

- User Model.

Given the User model,
When a user is created without a name or role
Then the user is not valid
And an error message is displayed

### Pseudocode:

Blog Model:
- Include Mongoid::Document and Mongoid::Timestamps
- Define fields: title, body, author, date, image_data
- Include ImageUploader::Attachment(:image)
- Belongs to user
- Validate presence of title, body, author, date, and user_id
- Validate body length is at least 50 characters

Gallery Model:
- Include Mongoid::Document and Mongoid::Timestamps
- Define fields: title, description, image_data
- Include ImageUploader::Attachment(:image)

Program Model:
- Include Mongoid::Document and Mongoid::Timestamps
- Define fields: title, description, image_data
- Include ImageUploader::Attachment(:image)
- Validate presence of title and description

Staff Model:
- Include Mongoid::Document and Mongoid::Timestamps
- Define fields: name, email, phone_number, position, gender
- Validate presence of name, phone_number, position, and gender
- Validate email is present, unique, and has a valid email format

Survivor Model:
- Include Mongoid::Document and Mongoid::Timestamps
- Define fields: name, date_of_birth, organization, organization_contact, organization_email, guardian_name, contact_of_guardian, level_of_education, school, children, social_asset_building, date_of_entry, date_of_exit
- Validate presence of all fields

User Model:
- Include Mongoid::Document and Mongoid::Timestamps
- Include ActiveModel::SecurePassword
- Define fields: name, email, role, password_digest
- Has secure password
- Has many blogs
- Validate presence of name and role
- Validate email is present, unique, and has a valid email format
- Validate password is present and at least 6 characters long on create


## Description

### Models

This application uses five models: Blog, Gallery, Program, Staff, Survivor, and User.

#### Blog

The Blog model represents a blog post that users can create. It has fields for a title, body, author, date, and image. Blogs belong to a user and must have a title, body, author, date, and user_id present. The body must be at least 50 characters long.

#### Gallery

The Gallery model represents an image gallery. It has fields for a title, description, and image. Galleries do not belong to a user and do not have any required fields other than the image.

#### Program

The Program model represents a program that the organization runs. It has fields for a title, description, and image. Programs do not belong to a user and must have a title and description present.

#### Staff

The Staff model represents a staff member of the organization. It has fields for a name, email, phone number, position, and gender. Staff must have a name, phone number, position, and gender present. The email must be present, unique, and in a valid format.

#### Survivor

The Survivor model represents a survivor who is receiving services from the organization. It has fields for a name, date of birth, organization, organization contact, organization email, guardian name, contact of guardian, level of education, school, children, social asset building, date of entry, and date of exit. Survivors must have all fields present.

#### User

The User model represents a user of the application. It has fields for a name, email, role, and password digest. Users must have a name, role, email, and password present. The email must be present, unique, and in a valid format. The password must be at least 6 characters long when a new user is created.

### Controllers:
 
1. `ApplicationController`: An abstract controller that inherits from `ActionController::API` and is intended to be inherited by all other controllers in the application. It includes helper methods for encoding and decoding JWT tokens, finding the current user, and authorizing logged-in users.

2. `AuthController`: A controller that handles user authentication. It includes a `create` action that authenticates a user and returns a JWT token if the credentials are valid.

3. `BlogsController`: A RESTful controller that handles CRUD operations for a `Blog` model. It includes a `before_action` method that sets the `@blog` instance variable to the blog object with the specified `:id` parameter before the `show`, `update`, and `destroy` actions.

4. `GalleriesController`: A RESTful controller that handles CRUD operations for a `Gallery` model. It includes a `before_action` method that sets the `@gallery` instance variable to the gallery object with the specified `:id` parameter before the `show`, `update`, and `destroy` actions. It also includes an `index` action that retrieves all galleries and a `create` action that creates a new gallery. Additionally, it has a `gallery_params` method that whitelists the parameters permitted for creating or updating a gallery.

5. `StaffsController`: A RESTful controller that handles CRUD operations for a `Staff` model. It includes a `before_action` method that sets the `@staff` instance variable to the staff object with the specified `:id` parameter before the `show`, `update`, and `destroy` actions.

6. `SurvivorsController`: A RESTful controller that handles CRUD operations for a `Survivor` model. It includes a `before_action` method that sets the `@survivor` instance variable to the survivor object with the specified `:id` parameter before the `show`, `update`, and `destroy` actions.

7. `UsersController`: A RESTful controller that handles CRUD operations for a `User` model. It includes a `before_action` method that sets the `@user` instance variable to the user object with the specified `:id` parameter before the `update` and `destroy` actions.

8. `ProgramsController`: A RESTful controller that handles CRUD operations for a `Program` model. It includes a `before_action` method that sets the `@program` instance variable to the program object with the specified `:id` parameter before the `show`, `update`, and `destroy` actions.

# Prerequisites

# Installing

- Clone the repository:

    - git clone [git@github.com:Rebirthers-Unite/Rebirth.git]

- Navigate into the project directory:

    - cd Rebirth/backend/api

- Install dependencies:

    - bundle install

- Set up the database:

    - rails db:create

    - rails db:migrate

    - rails db:seed

- Start the server:

    - rails s

- The API will be available at http://localhost:3000.

- The deployed link is: [https://rebirth-of-a-queen.vercel.app/]

- Test the endpoints using a tool like Postman or cURL.


# Built With the following frameworks. 

- [Ruby on rails, Mongodb, Cloudinary]

# Authors

[Ismahan Abdirizak](https://github.com/ismahaneyy)

[Mitchelle Mungai](https://github.com/Michelle-Mungai)

[Bob Oyier](https://github.com/oyieroyier)

[Abdiaziz Abdullahi](https://github.com/AbdiazizAbdullahi)

[Sammy Cherono](https://github.com/Sammy-CK)

[Brian Isaboke](https://github.com/Osorabrian)


# License

- This project is licensed under the MIT License

