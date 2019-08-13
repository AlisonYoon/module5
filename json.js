var person = {
    name: 'Sam',
    age: 33,
    pet: 'Blob'
}

var json= JSON.stringify(person)   // stringify() converts a value to JSON notation representing it:

var jsonl = '{"name": "Sam", "age": 33, "pet": "Blob"}'

var receivedData = JSON.parse(jsonl);

console.log(receivedData)
