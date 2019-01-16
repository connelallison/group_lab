use bucket_list;
db.dropDatabase();

db.bucketlist.insertMany([
  {
    name: "Climb Mount Everest",
    priority: "High",
    type: "Accomplishment",
    category: "Personal",
    completed: false
  },
  {
    name: "See A Show On Broadway",
    priority: "Medium",
    type: "Experience",
    category: "Personal",
    completed: false
  },
  {
    name: "Become CTO Of Apple",
    priority: "High",
    type: "Experience",
    category: "Career",
    completed: false
  },
  {
    name: "Finish Codeclan Course",
    priority: "Medium",
    type: "Accomplishment",
    category: "Educational",
    completed: false
  },
  {
    name: "Have A Family Holiday To Somalia",
    priority: "Low",
    type: "Experience",
    category: "Family",
    completed: false
  }
]);
