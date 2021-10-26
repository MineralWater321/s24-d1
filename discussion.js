//Query Operators

// $gt (greater than) / $gte (greater than or equal to)
//syntax:
//db.collecionName.find({ field: { $gt value } });
//db.collecionName.find({ field: { $gte value } });

db.users.find({"age":{$gt: 80}});

db.users.find({"age":{$gt: 70}});

//$lt (less than) / $lte (less than or equal to)
//syntax:
//db.collecionName.find({ field: { $lt value } });
//db.collecionName.find({ field: { $lte value } });


//Mini-activity:
//Retrieve all documents where age is less than 50
db.users.find({"age":{$lt: 50}});
//Retrieve all documents where age is less than or equal to 50
db.users.find({"age":{$lte: 50}});

// $ne (not equal)
//syntax:
//db.collecionName.find({ field: { $ne value } });

//Mini-activity:
//Retrieve all documents where age is not equal to 82
db.users.find({"age":{$ne: 82}});

//$in
//syntax:
//db.collectionName.find({field: {$in:[value, ...]}});

//Mini-activity
//Retrieve all documents where lastname is on this list "Hawking", "Doe"

db.users.find({"lastName":{$in: ["Hawking", "Gates"]}});

//Logical Query Operators

// $or
//syntax:
//db.collectionName.find({ $or :[{fieldA: valueA}, {fieldB: valueB}, {fieldN: valueN}]});

//Mini-activity:
//Retrieve all documents where firstname is "Neil" or age is 25.
db.users.find({$or :[{"firstName": "Neil"}, {"age": 25}]});
//Retrieve all documents where firstname is "Neil" or age is greater than 30
db.users.find({$or :[{"firstName": "Neil"}, {age: {$gt: 30}}]});

// $and
//syntax:
//db.collectionName.find({ $and :[{fieldA: valueA}, {fieldB: valueB}, {fieldN: valueN}]});


//Mini-activity:
//Retrieve all documents where age not equal to 82 and age is not equal to 76
db.users.find({$and :[{"age": {$ne: 82}}, {"age": {$ne: 76}}]});

//Field Projections


//Inclusion
//Fields are included to resulting documents.
//syntax:
//db.collectionName.find({ field: value }, { field: 1, [field: 1, ...]});

//Mini-activity:
//Retrieve all firstNames where name is not equal to "Jane".

db.users.find( { firstName: {$ne: "Jane"} }, { firstName: 1, lastName: 1 } );


//Exclusion
//Fields are excluded to the resulting documents.
//syntax:
//db.collectionName.find({ field: value }, { field: 0, [field: 0, ...]});

//Mini-activity:
//Retrieve all documents where firstname is not equal to "John"
//exclude the contact and department fields to the resulting documents.

db.users.find( { "firstName": {$ne: "John"} }, { "_id": 0, "contact": 0, "department": 0 });

//Inclusion/Exclusion of nested document fields
//syntax for inclusion:
//db.collectionName.find({ field: value }, { field.nestedField: 1, [field.nestedField: 1, ...] });

//syntax for exclusion:
//db.collectionName.find({ field: value }, { field.nestedField: 0, [field.nestedField: 0, ...] });

//Mini-activity:
//Retrieve all documents where age is greater than 75
//include the firstname, lastname, and phone number to the resulting documents

db.users.find({"age": {$gt: 75}}, {"firstName": 1, "lastName": 1, "contact.phone": 1})

//(Evaluation) Query Operator

//regex -->patterns
//syntax:
//db.collection.find({ field: $regex: 'pattern', $options: "$optionValue"});
