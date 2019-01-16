use bucket_list;
db.dropDatabase();

db.bucketlist.insertMany([
  {
    name: "Climb Mount Everest",
    priority: "high",
    type: "accomplishment",
    category: "personal",
    completed: false
  },
  {
    name: "See A Show On Broadway",
    priority: "medium",
    type: "experience",
    category: "personal",
    completed: false
  },
  {
    name: "Become CTO Of Apple",
    priority: "high",
    type: "experience",
    category: "career",
    completed: false
  },
  {
    name: "Finish Codeclan Course",
    priority: "medium",
    type: "accomplishment",
    category: "educational",
    completed: false
  },
  {
    name: "Have A Family Holiday To Somalia",
    priority: "low",
    type: "experience",
    category: "family",
    completed: false
  }
]);
