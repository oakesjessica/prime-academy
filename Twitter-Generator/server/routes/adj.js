var express = require('express');

var router = express.Router();

var permanentAdjs = ["Funky", "Raging", "Surly", "Purple", "Laminated", "Jolly", "Peachy", "Gelatinous", "Possibly-Illegal", "Hydrophobic", "Powdery", "Theoretical", "Dreamy", "Ballroom", "Brand-Name", "Bespectacled", "Paleolithic", "Jurrasic", "Metaphorical", "Space", "Alpha", "Beta", "Online-Only", "Rogue", "Minimalist", "Pseudo", "Super-Zen", "Definitely-Trustworthy", "Overpaid", "Righteous", "Iced", "Legacy", "Designer", "Super-Fast", "Rambunctious", "Cringey", "Chrome", "Mandibular", "Legit", "Newsworthy", "Solid-State", "Soft-Spoken", "Sci-Fi", "New-and-Improved", "Unix-Based", "Puppy", "Object-Oriented", "Extra-Strength", "Bananna", "Truthy", "Shire", "Robot", "Tangential", "Cutesy", "Shakespearian", "Apache", "Prairie", "Caffeinated", "Helicopter", "Pixelated", "Stereo", "Envoked", "7.1-Surround", "Organic", "Compact", "Concatenated", "Jazz", "Ultra-Light", "Non-Criminal", "Parenthetical", "Night-Mode", "Paper-Machét", "Turing-Complete", "Aerospace", "Modular", "Fancy", "Gluten-Free", "Fashionable", "Galactic", "Indie", "Instant", "Incumbent", "Slick", "Mechanical", "Default", "Angular", "Official", "Mac-Compatible", "Kitty", "Fictional", "Hyper", "Hyperbolic", "Fairytale"];

router.get('/', function(request, response){
  response.send(permanentAdjs);
});

module.exports = router;
