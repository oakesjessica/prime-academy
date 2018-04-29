var express = require('express');

var router = express.Router();


var permanentNouns = ["Components", "Database", "Establishment", "Processin Power", "Bloggers", "Enthusiasts", "Array", "Developers", "Techies", "Runtime", "Wonder", "Iterators", "Explorers", "Directories", "Commits", "Fireflies", "Data-Structures", "Moguls", "Intellectuals", "Abstractions", "APIs", "Executables", "Pixels", "Nodes", "Emoticons", "Department", "Robots", "Enigma", "Authority", "Englightenment", "Magic", "List-Items", "Units", "Debuggers", "Super-Users", "URLs", "Jargon", "Giants", "Functions", "'String'", "Superstars",  "Cohort", "Singer-Songwriters", "Prototypes", "Variables", "Atoms",  "Repositories", "Processors", "Electrons", "Architects", "Pizza-Lovers", "Twitter-Users", "So-And-Sos", "Magicians", "Contrarians", "Curmudgeons", "Modules", "Web-Browsers", "Acronyms", "Experts", "Cult", "Committee", "Data", "Contingent", "Zoo Keepers", "Applications", "Web-Apps", "Minimalists", "Super-Fans", "Syntax", "Technology", "CPUs",  "Game-Changers", "Visionaries", "Pragmatists", "Search Results", "Tangents", "Particles", "Substances", "Elements", "Bananna-Sandwiches", "Breakfast-Club", "Regime", "Pterodactyls", "Ponies", "Narwhals", "Tauntauns", "Entity", "Cubes", "Foodies", "Hipsters", "Integers", "Empire", "Alliance", "Party", "Cylinders", "Thespians", "Methods", "Grammarians", "Stack", "Federation-of-Planets", "Heroes", "Technicians", "Seismic Event", "Objects", "Grassy-Knolls", "Hot-Dish", "Galaxies", "Organsims", "Life-Forms", "Hodge-Podge", "Ninjas", "Ewoks", "Time-Travelers", "Astronauts"];

router.get('/', function(request, response){
  response.send(permanentNouns);
});

module.exports = router;
