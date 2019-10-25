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