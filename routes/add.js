var data = require("../data.json");

exports.addFriend = function(req, res) {  
	// Your code goes here
    var name = req.query.name;
    var description = req.query.description;
  
    var image = "http://lorempixel.com/400/400/people";
    var newJson = {"name": name, "description": description, "imageURL": image };
    console.log(newJson);
    data.friends.push(newJson);
    console.log(data);
    res.render("index", data);
}