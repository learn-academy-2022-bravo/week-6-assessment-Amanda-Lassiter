# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: I think the foreign key will be on the Student model, and will be named belongs_to (meaning a Student belongs to the Cohort). In order to fix this mistake, you will need to create a migration, which will update the database to a new instance (so to speak), thus allowing for changes from the migration point onwards. Once a migration has been created, you cannot work backwards. 

  Researched answer: You can fix the mistake of forgetting to add the foreign key by creating a migration to update your databaes. The name of the foreign key will be modelname_id (with your specific information), and the data type should be integer. The foreign key will be on the Student (belongs_to) model. It helps to think in terms of singular versus plural. The foreign key links to the primary key column. For the primary key, the model is has_many, while the foreign key is belongs_to. Notice how one is singular and one is plural. In this case, think "The Cohort has many students. This student belongs to the Cohort."



2. Which RESTful routes must always be passed params? Why?

  Your answer: The RESTful routes that must always be passed params include get and delete. I believe I may be missing one, but in order to "get" and/or delete data, you must first identify it. You also need to pass params when updating, because you are adding information to the database in a preexisting model.

  Researched answer: The RESTful routes that must always be passed params are show, update, and delete. The reason we pass params to these routes is because params allow us to add more information to our program by passing a value into the route rather than directly to the URL. For example, if you wanted to update information for a specific student in the database, you would pass their id as a param to the update route, which would ensure that only that student's information is updated. This is also particularly important for deletion, for the same reason.



3. Name three rails generator commands. What is created by each?

  Your answer: At this time I only recall two rails generator commands; generate and migrate. The generate command is how you generate a rails application with the necessary files/configuration. It is used at the beginning of making an application in rails. The migrate command is used when you make changes to the database and need to create a new occurrence to work from. So, when updates are made, a migration is generated, and any changes made from that point forward are done from that migration, until another migration is generated. 

  Researched answer: Three rails generator commands would be generate controller, generate resource, and generate migration. The generate controller command will create all the directories and files necessary for a particular controller in rails. The generate resource command will create the migration and model needed to start using a data resource. It also creates a controller and resourced routes. Finally, generate migration command will create a migration to keep your database schema changes with your application code. This is important because each migration represents a new version of your database schema.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?
The first "GET" route would call the index method, which would return a list of all the students. 
The "POST" route would call the create method, which would create a new instance of student. 
The second "GET" route would call the new method, which would return an HTML form for creating a new student. 
The third "GET" route would call the show method, which would display information about the student with an id of 2. 
The final "GET" route would call the edit method, which would return an HTML form for editing information about the student with an id of 2. 
The "PATCH" route would call the update method, which would update the student with an id of 2. 
The "DELETE" route would call the destroy method. It is destroying/deleting the student with an id of 2 from the database. 

action: "GET"    location: /students        

action: "POST"   location: /students       

action: "GET"    location: /students/new 

action: "GET"    location: /students/2  

action: "GET"    location: /students/2/edit  

action: "PATCH"  location: /students/2

action: "DELETE" location: /students/2   



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

This will be a social media application: 

As a user, I can create a social media profile. 
As a user, my profile can have a name and content. 
As a user, I can add new posts to my profile.
As a user, I add friends to my network.
As a user, I can see all my posts on my profile feed. 
As a user, I can navigate to other profiles and back to my own.
As a user, I can see a field where I can create a new post. 
As a user, I can click a button that will submit my post.
As a user, I can update an existing post. 
As a user, I can delete my post. 