puts "start"

# Create a user to associate with the blogs
# user1 = User.create(name: "John Doe", email: "john33344455tt1t@example.com", role: "admin", password: "password")
# user2 = User.create(name: "Jane Smith", email: "jane32344455tt1t@example.com", role: "editor", password: "password")
# user3 = User.create(name: "David Lee", email: "david213344455tt1t@example.com", role: "user", password: "password")

# # Create some survivors
# Survivor.create!(
#   name: "John Doe",
#   date_of_birth: Date.new(2000, 1, 1),
#   organization: "Red Cross",
#   organization_contact: "Jane Smith",
#   organization_email: "janesmith@example.com",
#   guardian_name: "Bob Johnson",
#   contact_of_guardian: "555-555-5555",
#   level_of_education: "High School",
#   school: "Central High School",
#   social_asset_building: "Mentorship Program",
#   date_of_entry: Date.new(2021, 1, 1),
#   date_of_exit: Date.new(2021, 6, 30),
# )

# Survivor.create!(
#   name: "Jane Smith",
#   date_of_birth: Date.new(2005, 5, 5),
#   organization: "Save the Children",
#   organization_contact: "John Doe",
#   organization_email: "johndoe@example.com",
#   guardian_name: "Mary Johnson",
#   contact_of_guardian: "555-555-5555",
#   level_of_education: "Middle School",
#   school: "East Middle School",
#   social_asset_building: "Art Therapy",
#   date_of_entry: Date.new(2021, 2, 1),
#   date_of_exit: Date.new(2021, 7, 31),
# )

# Survivor.create!(
#   name: "Bob Johnson",
#   date_of_birth: Date.new(1998, 12, 31),
#   organization: "UNICEF",
#   organization_contact: "Jane Smith",
#   organization_email: "janesmith@example.com",
#   guardian_name: "John Doe",
#   contact_of_guardian: "555-555-5555",
#   level_of_education: "College",
#   school: "State University",
#   social_asset_building: "Job Training",
#   date_of_entry: Date.new(2020, 1, 1),
#   date_of_exit: Date.new(2020, 12, 31),
# )

# Create some blogs
# Blog.create!(
#   title: "First Blog Post",
#   body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum sapien.",
#   author: "John Doe",
#   date: Date.today,
#   image: File.new("#{Rails.root}/app/assets/images/youth_empowerment.JPG"),
# )

# Blog.create!(
#   title: "Second Blog Post",
#   body: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum sapien.",
#   author: "Jane Smith",
#   date: Date.today - 1,
#   image: File.new("#{Rails.root}/app/assets/images/youth_empowerment.JPG"),
# )

# Blog.create!(
#   title: "Third Blog Post",
#   body: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum sapien.",
#   author: "Bob Johnson",
#   date: Date.today - 2,
#   image: File.new("#{Rails.root}/app/assets/images/youth_empowerment.JPG"),
# )

# Create staff
# Staff.create!(
#   name: "John Doe",
#   email: "johndoe221tt1t@example.com",
#   phone_number: "555-555-5555",
#   position: "Manager",
#   gender: "Male",
# )

# Staff.create!(
#   name: "Jane Smith",
#   email: "janesmith221tt1t@example.com",
#   phone_number: "555-555-5555",
#   position: "Sales Associate",
#   gender: "Female",
# )

# Staff.create!(
#   name: "Bob Johnson",
#   email: "bobjohnson221tt1t@example.com",
#   phone_number: "555-555-5555",
#   position: "Customer Service Representative",
#   gender: "Male",
# )

# Create Gallery
Gallery.create!(
  title: "Nature",
  description: "Beautiful landscapes and wildlife",
  image: File.new("#{Rails.root}/app/assets/images/youth_empowerment.JPG"),
)

Gallery.create!(
  title: "Cityscapes",
  description: "Stunning views of urban environments",
  image: File.new("#{Rails.root}/app/assets/images/youth_empowerment.JPG"),
)

Gallery.create!(
  title: "Abstract",
  description: "Artistic and creative images",
  image: File.new("#{Rails.root}/app/assets/images/youth_empowerment.JPG"),
)

# # Create Program
# Program.create!(
#   title: "Rebirth of a Queen Safe House",
#   description: "We run an operational safehouse that rescues survivors, teenage mothers and children from all parts of the country and refugees who have been trafficked and end up facing sexual and gender-based violence. Our commitment is to continue keeping the safehouse secure, safe and healing space for all to heal and thrive.",
#   image: File.new("#{Rails.root}/app/assets/images/youth_empowerment.JPG"),
# )

# Program.create!(
#   title: "Rebirth Elimisha Project",
#   description: "We provide formal and informal holistic education to vulnerable groups at the safehouse and the community. Our intention is to continue providing education to the vulnerable in the society and champion for equality in access to education.",
#   image: File.new("#{Rails.root}/app/assets/images/youth_empowerment.JPG"),
# )

# Program.create!(
#   title: "Raising Authentic Voices",
#   description: "This is a mentorship program for the teenagers and young people in the community to raise awareness on mental health, sexual reproductive health and rights, and sexual and gender-based violence. Through the talks we also create safe spaces for young people to express themselves in authenticity.",
#   image: File.new("#{Rails.root}/app/assets/images/youth_empowerment.JPG"),
# )

# Program.create!(
#   title: "Economic Empowerment",
#   description: "This is a program that targets young women , girls and survivors who we have rescued from the safehouse to access skills that can help them in job marketing. Some of the skills we offer are fashion design. The empowerment program is to champion dignified and fulfilling work to young women to thrive and be part of the decision makers in the economic empowerment space.",
#   image: File.new("#{Rails.root}/app/assets/images/youth_empowerment.JPG"),
# )
