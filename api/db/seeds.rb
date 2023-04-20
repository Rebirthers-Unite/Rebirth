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

# Create staff
Staff.create(name: "John Smith", email: "john.smith@example.com", phone_number: "555-555-5555", position: "Program Manager", gender: "Male")
Staff.create(name: "Jane Doe", email: "jane.doe@example.com", phone_number: "555-555-5555", position: "Social Worker", gender: "Female")
Staff.create(name: "David Lee", email: "david.lee@example.com", phone_number: "555-555-5555", position: "Case Manager", gender: "Male")
Staff.create(name: "Maria Rodriguez", email: "maria.rodriguez@example.com", phone_number: "555-555-5555", position: "Counselor", gender: "Female")

# Create Program
Program.create(title: "Rebirth of a Queen Safe House", description: "We run an operational safehouse that rescues survivors, teenage mothers and children from all parts of the country and refugees who have been trafficked and end up facing sexual and gender-based violence. Our commitment is to continue keeping the safehouse secure, safe and healing space for all to heal and thrive. 
    ", image: File.new("#{Rails.root}/app/assets/images/youth_empowerment.JPG"))
Program.create(title: "Rebirth Elimisha Project", description: "We provide formal and informal holistic education to vulnerable groups at the safehouse and the community. Our intention is to continue providing education to the vulnerable in the society and champion for equality in access to education.", image: File.new("#{Rails.root}/app/assets/images/youth_empowerment.JPG"))
Program.create(title: "Raising Authentic Voices ", description: "This is a mentorship program for the teenagers and young people in the community to raise awareness on mental health, sexual reproductive health and rights, and sexual and gender-based violence. Through the talks we also create safe spaces for young people to express themselves in authenticity. 
    ", image: File.new("#{Rails.root}/app/assets/images/youth_empowerment.JPG"))
