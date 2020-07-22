// post.js

function createPost(handle, loc, picture, caption, timestamp) {
	this.handle = handle;
	this.loc = loc;
	this.picture = picture;
	this.caption = caption;
	this.timestamp = timestamp;

	// Template
	let post_template = document.getElementsByTagName("template")[0];
	let item = post_template.content.querySelector("#posts");
	let post = document.importNode(item, true);

	// post header

	// account picture
	let node = document.createElement("img");
	node.setAttribute("src", "./account_pictures/" + this.handle + ".png");
  node.className = "floatleft";	
  node.style.width = "50px";
  node.style.height = "50px";
	// wrap 'img' with 'a' element
	let link = document.createElement("a");
  link.innerHTML = node.outerHTML;
  link.setAttribute('href', '#');
  document.getElementById("post_header").appendChild(link);	

  // handle
  let span = document.createElement("span");
	span.style.fontWeight = "500";
	span.style.verticalAlign = "top";
	span.className = "floatleft";
	span.innerHTML = this.handle;
	document.getElementById("post_header").appendChild(span);

	// br
 	let br = document.createElement("br");
 	document.getElementById("post_header").appendChild(br);

	// location
  span = document.createElement("span");
	span.style.verticalAlign = "bottom";
	span.className = "floatleft";
	span.innerHTML = this.loc;
	document.getElementById("post_header").appendChild(span);


	// post picture
	let pic = document.createElement("img");
	pic.setAttribute("src", "./posts/" + this.picture);
	pic.className = "center";
	pic.style.width = "100%";
	pic.style.height = "auto";	
	document.getElementById("post_picture").appendChild(pic);	


	// post activity
	span = document.createElement("span");
	span.style.fontWeight = "500";
	span.style.marginRight = "5px";
	span.innerHTML = this.handle;
	document.getElementById("post_activity").appendChild(span);

	span = document.createElement("span");
	span.innerHTML = this.caption;
	document.getElementById("post_activity").appendChild(span);	


	// date of picture
	let d = new Date();
	let date = "";

	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	date += months[this.timestamp.getMonth()].toString().toUpperCase();	
	date += " " + this.timestamp.getDate();

	if (this.timestamp.getFullYear() !== d.getFullYear()) {
			date += ", " + this.timestamp.getFullYear();
	}

	let p = document.createElement("p");
	p.innerHTML = date;
	p.style.color = "gray";
	p.style.fontSize = "11px";
	document.getElementById("post_activity").appendChild(p);	

}


// call function
createPost("cbum", "My House", "dog.png", "This is a dog.", new Date(2019, 10, 24));
// createPost("usnwc", "Your Mom's House", "dog2.png", "This is also a dog.");