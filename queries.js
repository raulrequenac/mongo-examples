/*  EMPLOYEES
  1.  db.employees.find()
  2.  db.employees.find({name: "Steve"})
  3.  db.employees.find({age: {$gt: 30}})
  4.  db.employees.find({"phone.ext": "2143"})
  5.  db.employees.find({age: {$gt: 30}})
  6.  db.employees.find({age: {$lte: 30}})
  7.  db.employees.find({"favorites.food": "pizza"})
  8.  db.employees.updateOne(
        {name: "Willy"},
        {$set: {"phone.personal": "93-123-45-67"}}
      )
  9.  db.employees.updateOne(
        {name: "Bob"},
        {$set: {privileges: "user"}}
      )
  10. db.employees.find({"favorites.artist": "Picasso"})
  11. db.employees.deleteOne({name: "John"})
*/

/*  RESTAURANTS
  1.  db.restaurants.find()
  2.  db.restaurants.find({}, {
        "restaurant_id": 1,
        "name": 1,
        "borough": 1,
        "cuisine": 1,
        "_id": 0
      })
  3.  db.restaurants.find({}, {
        "restaurant_id": 1,
        "name": 1,
        "borough": 1,
        "address.zipcode": 1,
        "_id": 0
      })
  4.  db.restaurants.find({borough: "Bronx"})
  5.  db.restaurants.find({
        borough: "Brooklyn", 
        cuisine: "Steak"
      })
  6.  db.restaurants.find({"grades.score": {$gt: 90}})
  7.  db.restaurants.find({
        "cuisine": {$ne: "Bakery"},
        "grades.score": {$gte: 70}
      })
  8.  db.restaurants.find({
        "cuisine": {$ne: "Chinese"},
        "grades.grade": "A",
        "borough": {$ne: "Manhattan"}
      })
  9.  db.restaurants.updateMany({
        "cuisine": "American "
      }, {
        $set: {"cuisine": "American"}
      })
  10. db.restaurants.updateOne({
        "name": "Morris Park Bake Shop"
      }, {
        $set: {"address.street": "Calle falsa 123"}
      })
  11. db.restaurants.deleteMany({"address.zipcode": "10466"})
*/

/*  COMPANIES
  1.
  2.
  3.
  4.
  5.
  6.
  7.
  8.
  9.
  10.
  11.
  12.
  13.
*/