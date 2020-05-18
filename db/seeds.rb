# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.new({"user": { "username": "Zsuka Test", "email": "Zsuka@test.com", "password": "123456" }})
User.create({"username": "jptest", "email": "jptest@test.com", "password": "123456"})
User.create({"username": "doritest", "email": "doritest@test.com", "password": "123456"})
User.create({"username": "zsukatest", "email": "zsukatest@test.com", "password": "123456"})
User.create({"username": "kaitlintest", "email": "kaitlintest@test.com", "password": "123456"})
Category.create({"name": "Past"})
Category.create({"name": "Present"})
Category.create({"name": "Future"})
Song.create({"artist": "Dispatch", "title": "the General", "user_id": "1", "lyrics": "There was a decorated...", "category_id": "1"})
Song.create({"artist": "Dispatch", "title": "Water Stop", "user_id": "1", "lyrics": "When you go, drunk with sleep in your eyes", "category_id": "1"})
Song.create({"artist": "Sia", "title": "Elastic Heart", "user_id": "1", "lyrics": "Another one bites the dust, Oh why can I not conquer love", "category_id": "2"})
Song.create({"artist": "Sum 41", "title": "In Too Deep", "user_id": "1", "lyrics": "Where stopping and stalling, running and falling...", "category_id": "2"})
Song.create({"artist": "Blink 182", "title": "First Date", "user_id": "1", "lyrics": "Do you like my stupid hair...", "category_id": "3"})
Song.create({"artist": "Matchbox 20", "title": "Real World", "user_id": "1", "lyrics": "I wonder what it's like to be a ...", "category_id": "3"})
Song.create({"artist": "Santana", "title": "Smooth", "user_id": "2", "lyrics": "It's just like the ocean, under the moon...", "category_id": "1"})
Song.create({"artist": "Fuel", "title": "Shimmer", "user_id": "2", "lyrics": "She called me from the cold...", "category_id": "1"})
Song.create({"artist": "O.A.R", "title": "Crazy Game of Poker", "user_id": "2", "lyrics": "That was a crazy game of poker, I lost it all", "category_id": "2"})
Song.create({"artist": "Phish", "title": "Farmhouse", "user_id": "2", "lyrics": "Welcome this is a Farmhouse, we have clusterflies alas...", "category_id": "2"})
Song.create({"artist": "Dave Matthews Band", "title": "Grey Street", "user_id": "2", "lyrics": "Oh Look at how she listens. She says nothing of what she thinks", "category_id": "3"})
Song.create({"artist": "Puddle of Mudd", "title": "Blurry", "user_id": "2", "lyrics": "Everything's so blurry, there's nothing here that's real...", "category_id": "3"})
Song.create({"artist": "Sublime", "title": "What I Got", "user_id": "3", "lyrics": "Early in the morning, Rising to the street, Light me up that cigarette and I strap shoes on my feet.", "category_id": "1"})
Song.create({"artist": "Sublime", "title": "40oz to Freedom", "user_id": "3", "lyrics": "And a 40oz to Freedom is the only chance I have, to feel good even though I feel bad.", "category_id": "1"})
Song.create({"artist": "Third Eye Blind", "title": "Semi-charmed Life", "user_id": "3", "lyrics": "Doo doo doo, doo doo doo doo. The sky was gold...", "category_id": "2"})
Song.create({"artist": "Alien Ant Farm", "title": "Gold", "user_id": "3", "lyrics": "I never thought that you'd find out I did it...", "category_id": "2"})
Song.create({"artist": "Michael Jackson", "title": "Billie Jean", "user_id": "3", "lyrics": "Billie Jean is not my lover...", "category_id": "3"})
Song.create({"artist": "Jimi Hendrix", "title": "Little Wing", "user_id": "3", "lyrics": "And she's walking through the clouds, with a ....", "category_id": "3"})
