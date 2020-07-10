// user.js

function User(name, handle, hasStory, isFollowing) {
	this.name = name;
	this.handle = handle;
	this.hasStory = hasStory;
	this.isFollowing = isFollowing;
}

function addStory(user) {
	// account_picture
	let node = document.createElement("img");
	node.setAttribute("src", "./account_pictures/" + user.handle + ".png");

	// wrap 'img' with 'a' element
	let link = document.createElement('a');
  link.innerHTML = node.outerHTML;
  link.setAttribute('href', '#');
  
  document.getElementById("stories").appendChild(link);

	// handle
	node = document.createElement("p");
	let textnode = document.createTextNode(user.handle);
	node.appendChild(textnode);
	document.getElementById("stories").appendChild(node);
}

function setStyle( objId, propertyObject )
{
 let elem = document.getElementById(objId);
 for (let property in propertyObject)
    elem.style[property] = propertyObject[property];
}


let users = [];

let user1 = new User("US National Whitewater Center", "usnwc", true, true);
let user2 = new User("Metallica", "metallica", false, true);
let user3 = new User("Tom Platz", "tomplatz", false, false);
let user4 = new User("Chris Bumstead", "cbum", true, false);
let user5 = new User("LeBron James", "kingjames", true, true);
let user6 = new User("Artemus Dolgin", "artemusdolgin", true, true);
let user7 = new User("Google", "google", true, true);

users.push(user1, user2, user3, user4, user5, user6, user7);

console.log(users);

for(i=0; i<users.length; i++) {
	if (users[i].isFollowing == true && users[i].hasStory == true) {
		// console.log(users[i].handle);
		addStory(users[i]);
	}
}

let style = document.createElement('style');
style.innerHTML = 
	'#stories p {' + 
		'display: inline-block; ' + 
		'float: left; ' + 
		'padding: 10px; '
	'}';

let ref = document.querySelector('script');
ref.parentNode.insertBefore(style, ref);