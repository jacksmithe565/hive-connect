/* 
 * Filename: complexCode.js
 * Description: This complex JavaScript code showcases a comprehensive implementation of a web-based project management system.
 * It includes features such as user authentication, project creation, time tracking, team collaboration, and task management.
 * Please note that this code is an abstract representation and may not actually function as a complete project management system.
 */

// Constants and Configurations
const MAX_TITLE_LENGTH = 50; // Maximum title length for projects and tasks
const MAX_DESCRIPTION_LENGTH = 200; // Maximum description length for projects and tasks
const MAX_USERS_PER_TEAM = 10; // Maximum number of users per team
const MAX_TASKS_PER_PROJECT = 100; // Maximum number of tasks per project

// Data Structures
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

class Project {
  constructor(title, description, creator) {
    this.title = title;
    this.description = description;
    this.creator = creator;
    this.team = [creator];
    this.tasks = [];
  }

  addTask(task) {
    if (this.tasks.length >= MAX_TASKS_PER_PROJECT) {
      console.log("Unable to add task. Maximum tasks limit reached.");
    } else {
      this.tasks.push(task);
      console.log(`Task '${task.title}' added to the project '${this.title}'.`);
    }
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
      console.log(`Task '${task.title}' removed from the project '${this.title}'.`);
    } else {
      console.log(`Task '${task.title}' not found in the project '${this.title}'.`);
    }
  }

  addMember(user) {
    if (this.team.length >= MAX_USERS_PER_TEAM) {
      console.log("Unable to add member. Maximum team size reached.");
    } else {
      this.team.push(user);
      console.log(`User '${user.name}' added to the project '${this.title}'.`);
    }
  }

  removeMember(user) {
    const index = this.team.indexOf(user);
    if (index > -1) {
      this.team.splice(index, 1);
      console.log(`User '${user.name}' removed from the project '${this.title}'.`);
    } else {
      console.log(`User '${user.name}' not found in the project '${this.title}'.`);
    }
  }
}

class Task {
  constructor(title, description, assignee) {
    this.title = title;
    this.description = description;
    this.assignee = assignee;
    this.completed = false;
  }

  markAsCompleted() {
    this.completed = true;
    console.log(`Task '${this.title}' marked as completed.`);
  }
}

// Functions
function createUser(name, email, password) {
  const user = new User(name, email, password);
  console.log(`User '${user.name}' created successfully.`);
  return user;
}

function createProject(title, description, creator) {
  const project = new Project(title, description, creator);
  console.log(`Project '${project.title}' created successfully.`);
  return project;
}

function createTask(title, description, assignee) {
  const task = new Task(title, description, assignee);
  console.log(`Task '${task.title}' created successfully.`);
  return task;
}

// Usage Example
const user1 = createUser("John Doe", "john@example.com", "password123");
const user2 = createUser("Jane Smith", "jane@example.com", "pass456");
const project1 = createProject("New Website", "Building a website from scratch", user1);
const task1 = createTask("Design Landing Page", "Create a visually appealing landing page", user1);

project1.addMember(user2);
project1.addTask(task1);
task1.markAsCompleted();
project1.removeTask(task1);

/* 
 * Output:
 * User 'John Doe' created successfully.
 * User 'Jane Smith' created successfully.
 * Project 'New Website' created successfully.
 * Task 'Design Landing Page' created successfully.
 * User 'Jane Smith' added to the project 'New Website'.
 * Task 'Design Landing Page' added to the project 'New Website'.
 * Task 'Design Landing Page' marked as completed.
 * Task 'Design Landing Page' removed from the project 'New Website'.
 */