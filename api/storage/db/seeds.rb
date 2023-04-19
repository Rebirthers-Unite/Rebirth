Survivor.create(name: "John Doe", age: 25, date_of_birth: "1998-05-12 00:00:00", organization: "Red Cross", contact: 1234567890, date_of_entry: "2022-01-01 00:00:00", date_of_exit: "2022-06-30 00:00:00", guardian_name: "Jane Doe", contact_of_guardian: 9876543210)

Survivor.create(name: "Mary Smith", age: 30, date_of_birth: "1993-08-21 00:00:00", organization: "UNICEF", contact: 9876543210, date_of_entry: "2022-02-15 00:00:00", date_of_exit: "2022-08-14 00:00:00", guardian_name: "John Smith", contact_of_guardian: 1234567890)

Survivor.create(name: "David Lee", age: 20, date_of_birth: "2002-02-10 00:00:00", organization: "Doctors Without Borders", contact: 2345678901, date_of_entry: "2022-03-01 00:00:00", date_of_exit: "2022-09-30 00:00:00", guardian_name: "Emily Lee", contact_of_guardian: 3456789012)


# Create a user to associate with the blogs
user1 = User.create(name: "John Doe", email: "john@example.com", role: "admin", password: "password")
user2 = User.create(name: "Jane Smith", email: "jane@example.com", role: "editor", password: "password")
user3 = User.create(name: "David Lee", email: "david@example.com", role: "user", password: "password")

# Create some blogs
Blog.create(title: "The Art of Programming", description: "Programming is a skill that requires dedication and hard work. It takes years of practice to become a master.", author: "Jane Smith", user: user1)
Blog.create(title: "Why Ruby on Rails is Awesome", description: "Ruby on Rails is a powerful web development framework that allows developers to create complex web applications quickly and easily.", author: "John Doe", user: user2)
Blog.create(title: "The Benefits of Test-Driven Development", description: "Test-driven development is a development approach where developers write tests before writing the code. This helps ensure that the code is correct and reduces the likelihood of bugs.", author: "David Lee", user: user3)


