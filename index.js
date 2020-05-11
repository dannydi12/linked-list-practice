const LinkedList = require('./LinkedList');

function main() {
  const list = new LinkedList()

  list.insert(3)
  list.insert(2)
  list.insert(7)
  list.insert(3)
  list.insert(9)
  list.insert(2)
  list.insert(3)
  // list.insertCircular(45)

  

  console.log(list.duplicates())
}

main();