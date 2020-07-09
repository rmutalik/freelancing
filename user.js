// user.js

function User(name, handle, hasStory, isFollowing) {
	this.name = name;
	this.handle = handle;
	this.hasStory = hasStory;
	this.isFollowing = isFollowing;
}


let users = [];

let user1 = new User("Daud Naz", "daud.naz", false, true);
let user2 = new User("Thejas Prasad", "nathesh92", true, true);
let user3 = new User("Chirag Sakhuja", "chirag_sakhuja", false, true);
let user4 = new User("Dustyn", "dustyndream", true, true);
let user5 = new User("Nikhil Dixit", "nikhildixit26", false, true);
let user6 = new User("Shikha Singh Hanspal", "shikhanspal", false, false);
let user7 = new User("Chris Bumstead", "cbum", true, false);

users.push(user1, user2, user3, user4, user5, user6, user7);

console.log(users);