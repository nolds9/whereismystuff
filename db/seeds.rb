# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Item.destroy_all

user_data = JSON.parse(File.read("db/user_data.json"))
item_data = JSON.parse(File.read("db/item_data.json"))

user_data.each do |user|
  u = User.create!(user)
end

random_user = User.all.sample

item_data.each do |item|
 i = Item.create!(item)
 i.update(user: random_user)
end
