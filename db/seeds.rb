# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Food.destroy_all
Flavor.destroy_all
User.destroy_all
Topic.destroy_all
Flashcard.destroy_all
Comment.destroy_all

admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')

puts "#{User.count} users created"

# sweet = Flavor.create!(name: 'sweet')
# salty = Flavor.create!(name: 'salty')
# sour = Flavor.create!(name: 'sour')
# umami = Flavor.create!(name: 'umami')
# bitter = Flavor.create!(name: 'bitter')

# puts "#{Flavor.count} flavors created"

# pizza = Food.create!(name: 'pizza', user: admin)

# puts "#{Food.count} foods created"

# pizza.flavors << sweet
# pizza.flavors.push(salty, umami)

# aws = Topic.create!(name: "AWS Solutions Associate")
# cissp = Topic.create!(name: "CISSP")
# security = Topic.create!(name: "Security+")


# Flashcard.create!(front: "What is AWS", back: "A place to earn money.", topic_id: 1)
# Flashcard.create!(front: "What is Azure", back: "A place to earn money.", topic_id: 1)
# Flashcard.create!(front: "What is IBM", back: "A place to earn money.", topic_id: 1)
# Flashcard.create!(front: "What is Ducks", back: "A place to earn money.", topic_id: 2)
# Flashcard.create!(front: "What is Bike", back: "A place to earn money.", topic_id: 2)
# Flashcard.create!(front: "What is cat", back: "A place to earn money.", topic_id: 2)
# Flashcard.create!(front: "What is AWS", back: "A place to earn money.", topic_id: 3)

Comment.create!(comment: "Why is Jeff Bezos so rich", flashcard_id:1)
# Comment.create!(comment: "Why do we need security?", flashcard_id:2)
# Comment.create!(comment: "Why is this website so terrible?", flashcard_id:1)
# Comment.create!(comment: "Am I a joke to you?", flashcard_id:3)
# Comment.create!(comment: "I wonder to is going to get a job first?", flashcard_id:4)