// user.js

function User(name, handle, hasStory, isFollowing) {
	this.name = name;
	this.handle = handle;
	this.hasStory = hasStory;
	this.isFollowing = isFollowing;
}

function addStory(user, i) {
	// wrap with 'div' element
	let div = document.createElement("div");
	document.getElementById("stories").appendChild(div);

	// account_picture
	let node = document.createElement("img");
	node.setAttribute("src", "./account_pictures/" + user.handle + ".png");

	// wrap 'img' with 'a' element
	let link = document.createElement("a");
  link.innerHTML = node.outerHTML;
  link.setAttribute('href', '#');
  
  document.querySelectorAll("#stories div")[i].appendChild(link);

	// handle
	node = document.createElement("p");
	let textnode = document.createTextNode(user.handle);
	node.appendChild(textnode);
	document.querySelectorAll("#stories div")[i].appendChild(node);
}

function setStyle( objId, propertyObject )
{
 let elem = document.getElementById(objId);
 for (let property in propertyObject)
    elem.style[property] = propertyObject[property];
}


// Dummy users
let users = [];

let user1 = new User("US National Whitewater Center", "usnwc", true, true);
let user2 = new User("Metallica", "metallica", true, true);
let user3 = new User("Tom Platz", "tomplatz", true, false);
let user4 = new User("Chris Bumstead", "cbum", true, true);
let user5 = new User("LeBron James", "kingjames", true, true);
let user6 = new User("Artemus Dolgin", "artemusdolgin", false, true);
let user7 = new User("Google", "google", true, true);

users.push(user1, user2, user3, user4, user5, user6, user7);

console.log(users);


// If users you are following add a story, add it to your story feed
new_users = [];
for(i=0; i<users.length; i++) {
	if (users[i].isFollowing == true && users[i].hasStory == true) {
		// console.log(users[i].handle);
		new_users.push(users[i]);
	}
}

for(i=0; i<new_users.length; i++) {
	addStory(new_users[i], i);
}


// Style the stories in your story feed
let elem = document.querySelectorAll("#stories p");
for(i=0; i<elem.length; i++) {
	elem[i].style.margin = '0';
	elem[i].style.fontSize = '12px';
}

// Float left the stories in your story feed
let style = document.createElement('style');
style.innerHTML = 
	'#stories div {' + 
		'display: inline-block; ' + 
		'float: left; ' + 
		'padding: 20px 5px 5px 10px ; ' + 
		'text-align: center; '
	'}';

// Insert the style above before the page is loaded
let ref = document.querySelector('script');
ref.parentNode.insertBefore(style, ref);