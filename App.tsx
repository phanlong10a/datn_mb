import React, { useState } from 'react';
import "react-native-gesture-handler";
import Routes from './src/route/index';
let SQLite = require('react-native-sqlite-storage')
function errorCB(err) {
}

function successCB() {
}

function openCB() {
}


const data = `insert into words values ('30', 'twister', 'twister', 'A 1996 American disaster drama film starring Helen Hunt and Bill Paxton as storm chasers researching tornadoes.', '0', 'tv & movies', '3', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('89', 'et', 'et', 'An extraterrestrial of a 1982 American science fiction film co-produced and directed by Steven Spielberg.', '0', 'character', '1', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('122', 'up', 'up', 'A 2009 American 3D computer-animated comedy-adventure film produced by Pixar Animation Studios and directed by Pete Docter.', '0', 'tv & movies', '2', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('216', 'shrek', 'shrek', 'A 2001 American computer-animated fantasy-comedy film produced by PDI/DreamWorks,directed by Andrew Adamson and Vicky Jenson.', '0', 'tv & movies', '1', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('281', 'bert', 'bert', 'A yellow muppet character on the long-running children''s television show, Sesame Street.', '0', 'character', '2', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('417', 'the~avengers', 'the avengers', 'A 2012 American superhero film, based on the Marvel Comics superhero team of the same name. ', '0', 'tv & movies', '1', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('455', 'lecter', 'lecter', 'A fictional character in a series of horror novels by Thomas Harris.', '0', 'character', '2', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('561', 'mr. bean', 'mr. bean', 'A childish and self-centred buffoon who brings various unusual schemes and contrivances to everyday tasks.', '0', 'character', '3', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('595', 'thor', 'thor', 'A hammer-wielding god associated with thunder, lightning, storms.', '0', 'character', '2', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('10', 'jurassic~park', 'jurassic park', 'A 1993 American science fiction adventure film directed by Steven Spielberg. ', '0', 'tv & movies', '1', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('274', 'elmo', 'elmo', 'A Muppet character on the children''s television show Sesame Street.', '0', 'character', '2', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('341', 'cars', 'cars', 'A 2006 American computer-animated comedy-adventure sports film produced by Pixar, and directed and co-written by John Lasseter.', '0', 'tv & movies', '1', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('396', 'district~9', 'district 9', 'A 2009 South African science fiction film directed by Neill Blomkamp.', '0', 'tv & movies', '3', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('823', 'tasmanian~devil', 'tasmanian devil', 'an animated cartoon character featured in the Warner Bros. Looney Tunes series of cartoons.', '0', 'character', '2', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('937', '101~dalmatians', '101 dalmatians', 'A 1996 American family comedy film directed by Stephen Herek and distributed by Walt Disney Pictures.', '0', 'tv & movies', '2', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('953', 'donald~duck', 'donald duck', 'A funny animal cartoon character created in 1934 at Walt Disney Productions.', '0', 'character', '1', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('115', 'sherlock~holmes', 'sherlock holmes', 'A fictional detective created by author and physician Sir Arthur Conan Doyle.', '0', 'character', '2', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('136', 'godzilla', 'godzilla', 'A Kaiju (monster), first appearing in Ishirō Honda''s 1954 film Godzilla. ', '0', 'tv & movies', '3', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('217', 'ice age', 'ice age', 'A 2002 American computer-animated comedy-drama adventure film produced by Blue Sky Studios and distributed by 20th Century Fox.', '0', 'tv & movies', '1', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('303', 'anaconda', 'anaconda', 'A 1997 adventure-horror film, directed by Luis Llosa.', '0', 'tv & movies', '2', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('306', 'leonardo', 'leonardo', 'A fictional character and one of the four protagonists of the Teenage Mutant Ninja Turtles comics and all related media.', '0', 'character', '1', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('370', 'neo', 'neo', 'A fictional character and the protagonist of The Matrix franchise.', '0', 'character', '2', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('524', 'lost', 'lost', 'An American television drama series containing elements of science fiction and consisting of six seasons.', '0', 'tv & movies', '2', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('917', 'the joker', 'the joker', 'A fictional character, a comic book supervillain appearing in publications by DC Comics.', '0', 'character', '3', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('154', 'gollum', 'gollum', 'Introduced in the 1937 children''s fantasy novel The Hobbit.', '0', 'character', '1', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('295', 'mowgli', 'mowgli', 'A fictional character and the protagonist of Rudyard Kipling''s The Jungle Book stories.', '0', 'character', '2', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('476', 'forrest~gump', 'forrest gump', 'Directed by Robert Zemeckis and starred Tom Hanks, Robin Wright, Gary Sinise and Sally Field.', '0', 'tv & movies', '1', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('630', 'mcdonald', 'mcdonald', 'A clown character used as the primary mascot of the McDonald''s fast-food restaurant chain.', '0', 'character', '3', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('721', 'scrubs', 'scrubs', 'An American medical comedy-drama television series created by Bill Lawrence.', '0', 'tv & movies', '2', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('809', 'rango', 'rango', 'A 2011 American computer-animated action comedy western film directed by Gore Verbinski.', '0', 'tv & movies', '2', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('875', 'inspector~gadget', 'inspector gadget', 'The main protagonist of an Canadian animated television series.', '0', 'character', '2', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('988', 'ip man', 'ip man', 'A 2008 Hong Kong semi biographical martial arts film very loosely based on the life of Yip Man.', '0', 'tv & movies', '3', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('318', 'glee', 'glee', 'An American musical comedy-drama television series that airs on Fox in the United States.', '0', 'tv & movies', '3', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('379', 'friday~the 13th', 'friday the 13th', 'A 2009 American slasher film directed by Marcus Nispel', '0', 'tv & movies', '2', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('426', 'flash', 'flash', 'A name shared by several fictional comic book superheroes from the DC Comics universe.', '0', 'character', '3', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('608', 'donatello', 'donatello', 'A fictional character and one of the four protagonists of the Teenage Mutant Ninja Turtles comics.', '0', 'character', '2', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('641', 'ghost~rider', 'ghost rider', 'A 2007 American supernatural superhero film written and directed by Mark Steven Johnson, the director of Daredevil.', '0', 'tv & movies', '3', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('643', 'ron', 'ron', 'A fictional character and one of the three protagonists of J. K. Rowling''s Harry Potter series.', '0', 'character', '2', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('715', 'olive oyl', 'olive oyl', 'A cartoon character created by Elzie Crisler Segar in 1919 for his comic strip Thimble Theatre.', '0', 'character', '2', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('796', 'two and a~half men', 'two and a half men', 'An American television sitcom,starring Charlie Sheen, Jon Cryer, and Angus T. Jones.', '0', 'tv & movies', '2', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('119', 'kermit~the frog', 'kermit the frog', 'The protagonist of many Muppet projects, most notably on The Muppet Show, and Sesame Street.', '0', 'character', '3', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('283', 'fido dido', 'fido dido', 'A cartoon character created by Joanna Ferrone and Sue Rose.', '0', 'character', '3', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('315', 'avatar', 'avatar', 'A 2009 American epic science fiction film written and directed by James Cameron.', '0', 'tv & movies', '1', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('512', 'hangover', 'hangover', 'A 2009 American comedy film, co-produced and directed by Todd Phillips and written by Jon Lucas and Scott Moore. ', '0', 'tv & movies', '2', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('567', 'homer', 'homer', 'A fictional main character who appears in the animated television series The Simpsons ', '0', 'character', '1', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('581', 'bolt', 'bolt', 'A 2008 American computer-animated adventure/action comedy film produced by Walt Disney Animation Studios.', '0', 'tv & movies', '3', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('640', 'borat', 'borat', 'A 2006 mockumentary comedy film directed by Larry Charles and distributed by 20th Century Fox.', '0', 'tv & movies', '3', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('902', 'game of~thrones', 'game of thrones', 'An American epic fantasy television drama series created for HBO by David Benioff and D. B. Weiss.', '0', 'tv & movies', '2', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('906', 'spock', 'spock', 'A fictional character in the Star Trek media franchise.', '0', 'character', '2', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1017', 'mr. potato~head', 'mr. potato head', 'It may be best known for his appearances in the Toy Story franchise.', '0', 'character', '2', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('94', 'spiderman', 'spiderman', 'A fictional character, a comic book superhero who appears in comic books published by Marvel Comics.', '0', 'character', '1', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('191', 'big fish', 'big fish', 'A 2003 American fantasy adventure film based on the 1998 novel of the same name by Daniel Wallace.', '0', 'tv & movies', '2', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('271', 'due date', 'due date', 'A 2010 American comedy road film directed by Todd Phillips.', '0', 'tv & movies', '2', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('327', 'johnny~bravo', 'johnny bravo', 'The muscular main protagonist of an American animated television series created by Van Partible for Cartoon Network. ', '0', 'character', '2', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('340', 'troy', 'troy', 'A 2004 epic war film written by David Benioff and directed by Wolfgang Petersen.', '0', 'tv & movies', '1', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('365', 'the~hangover', 'the hangover', 'A 2009 American comedy film, co-produced and directed by Todd Phillips and written by Jon Lucas.', '0', 'tv & movies', '2', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('491', 'road~runner', 'road runner', 'An animated character based on the bird.', '0', 'character', '2', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('722', 'indiana~jones', 'indiana jones', 'Since his first appearance in Raiders of the Lost Ark, he has become a worldwide star.', '0', 'character', '1', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('726', 'iron man', 'iron man', 'A 2008 American superhero film based on the Marvel Comics character of the same name.', '0', 'tv & movies', '1', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('802', 'buried', 'buried', 'A 2010 Spanish/American psychological thriller film directed by Rodrigo Cortés.', '0', 'tv & movies', '3', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('824', 'charlie~brown', 'charlie brown', 'The main protagonist in the comic strip Peanuts', '0', 'character', '2', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('901', 'minion', 'minion', 'Creature from the Despicable Me.', '0', 'character', '1', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('98', 'hermione', 'hermione', 'A fictional character and one of the three protagonists of J.K. Rowling''s Harry Potter series. ', '0', 'character', '3', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('162', 'piglet', 'piglet', 'A fictional character from A. A. Milne''s Winnie-the-Pooh books.', '0', 'character', '2', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('237', 'evolution', 'evolution', 'A 2001 American science fiction comedy film directed by Ivan Reitman.', '0', 'tv & movies', '2', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('333', 'ghost-~busters', 'ghostbusters', '1984 American supernatural sci-fi comedy film directed by Ivan Reitman and written by Dan Aykroyd and Harold Ramis', '0', 'tv & movies', '1', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('527', 'donnie~darko', 'donnie darko', 'A 2001 American fantasy and drama film.', '0', 'tv & movies', '3', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('541', 'cookie~monster', 'cookie monster', 'A Muppet on the children''s television show Sesame Street.', '0', 'character', '2', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('648', 'obelix', 'obelix', 'A fictional character from the French comic book series Asterix.', '0', 'character', '2', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('664', 'hulk', 'hulk', 'A fictional character, a superhero that appears in comic books published by Marvel Comics. ', '0', 'character', '1', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('718', 'click', 'click', 'A 2006 American science fiction comedy drama film directed by Frank Coraci.', '0', 'tv & movies', '3', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('780', 'raphael', 'raphael', 'One of the four protagonists of the Teenage Mutant Ninja Turtles comics.', '0', 'character', '3', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('819', 'million-~aire', 'millionaire', 'An American television quiz show which offers a maximum prize of $1,000,000 for correctly answering a series of questions.', '0', 'tv & movies', '2', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1007', 'van~helsing', 'van helsing', 'A 2004 American action directed by Stephen Sommers.', '0', 'tv & movies', '2', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('50', 'mada-~gascar', 'madagascar', 'It tells the story of four Central Park Zoo animals who have spent their lives in blissful captivity and are unexpectedly shipped back to Africa', '0', 'tv & movies', '2', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('177', 'wreck-it~ralph', 'wreck-it ralph', 'The villain of Fix-It Felix, Jr.', '0', 'character', '3', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('264', 'the thing', 'the thing', 'A Marvel Comics superhero and a member of the Fantastic Four.', '0', 'character', '2', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('292', 'king kong', 'king kong', 'A 2005 epic adventure film and remake of the 1933 film of the same name.', '0', 'tv & movies', '1', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('374', 'simba', 'simba', 'A fictional character in Disney''s animated feature film The Lion King.', '0', 'character', '1', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('375', 'optimus~prime', 'optimus prime', 'A character from the Transformers franchise and the leader of the Autobots.', '0', 'character', '1', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('432', 'puss in~boots', 'puss in boots', 'A talking cat named for his wearing boots.', '0', 'character', '2', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('553', 'the sound~of music', 'the sound of music', 'A 1965 American musical film directed by Robert Wise and starring Julie Andrews and Christopher Plummer.', '0', 'tv & movies', '1', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('652', 'a.i.', 'a.i.', 'Based on Brian Aldiss''s short story "Super-Toys Last All Summer Long".', '0', 'tv & movies', '3', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('683', 'gla-~diator', 'gladiator', 'A 2000 epic historical drama film directed by Ridley Scott,', '0', 'tv & movies', '2', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('962', 'rata-~touille', 'ratatouille', 'A 2007 American computer-animated comedy film produced by Pixar Animation Studios and released by Walt Disney Pictures', '0', 'tv & movies', '2', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1050', 'popeye', 'popeye', 'A Sailor and a comic and cartoon character.', '0', 'character', '2', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('172', 'pluto', 'pluto', 'A cartoon character created in 1930 by Walt Disney Productions.', '0', 'character', '1', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('376', 'gundam', 'gundam', 'Brincipally developed by renowned animator Yoshiyuki Tomino.', '0', 'tv & movies', '3', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('441', 'last~samurai', 'last samurai', 'A 2003 American epic drama film directed and co-produced by Edward Zwick.', '0', 'tv & movies', '2', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('462', 'cosmo', 'cosmo', 'He has a magic wand, fly-like wings which allow him to float.', '0', 'character', '3', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('510', 'pikachu', 'pikachu', 'One of the species of Pokémon creatures from the Pokémon media franchise.', '0', 'character', '2', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('565', 'leela', 'leela', 'A character from the animated television series Futurama.', '0', 'character', '3', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('582', 'top gun', 'top gun', 'The film stars Tom Cruise, Kelly McGillis, Val Kilmer, Anthony Edwards, and Tom Skerritt.', '0', 'tv & movies', '1', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('762', 'alice', 'alice', 'Inspired by English author Lewis Carroll''s 1865 fantasy novel.', '0', 'tv & movies', '2', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('915', 'fredrick-~sen', 'fredricksen', 'A fictional character in the film “up”.', '0', 'character', '2', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('980', 'sadako~yamamura', 'sadako yamamura', 'The antagonist in Koji Suzuki''s novel Ring and the 1998 film adaptation.', '0', 'character', '2', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1008', '3 idiots', '3 idiots', 'A 2009 Indian comedy-drama film.', '0', 'tv & movies', '3', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1031', 'american~pie', 'american pie', 'A 1999 comedy film written by Adam Herz and directed by brothers Paul and Chris Weitz.', '0', 'tv & movies', '2', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('6', 'maggie~simpson', 'maggie simpson', 'A fictional character in the animated television series The Simpsons.', '0', 'character', '1', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('150', 'roronoa~zoro', 'roronoa zoro', 'A fictional character in the One Piece franchise created by Eiichiro Oda.', '0', 'character', '2', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('235', 'ted', 'ted', 'A 2012 American comedy film directed, co-produced and co-written by Seth MacFarlane.', '0', 'tv & movies', '1', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('240', 'a-team', 'a-team', 'An American action-adventure television series,about a fictional group of ex–United States Army Special Forces personnel.', '0', 'tv & movies', '1', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('301', 'flint-~stones', 'flintstones', 'A 1994 American comedy film directed by Brian Levant.', '0', 'tv & movies', '2', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('312', 'pororo', 'pororo', 'In South Korea, he has become famous among preschool kids and children.', '0', 'character', '3', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('469', 'arale~norimaki', 'arale norimaki', 'A fictional character and the main protagonist of the manga and anime series Dr. Slump.', '0', 'character', '2', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('684', 'herbie', 'herbie', 'A character that is featured in several Disney motion pictures starting with the 1969 feature film The Love Bug.', '0', 'character', '2', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('692', 'tron', 'tron', 'A 1982 American science fiction film released by Walt Disney Productions.', '0', 'tv & movies', '2', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('945', 'the hunger~games', 'the hunger games', 'A 2012 American science fiction adventure film directed by Gary Ross', '0', 'tv & movies', '2', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1004', '127 hours', '127 hours', 'A 2010 biographical survival drama film directed, co-written and produced by Danny Boyle.', '0', 'tv & movies', '3', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1058', 'lisa', 'lisa', 'A fictional main character in the animated television series The Simpsons.', '0', 'character', '1', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('2', 'mighty~mouse', 'mighty mouse', 'An American animated anthropomorphic superhero mouse character created by the Terrytoons studio for 20th Century Fox.', '0', 'character', '3', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('130', 'r2-d2', 'r2-d2', 'A robot character in the Star Wars universe.', '0', 'character', '2', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('190', 'elevator', 'elevator', 'A 2012 American thriller film directed by Stig Svendsen.', '0', 'tv & movies', '3', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('289', 'bugs~bunny', 'bugs bunny', 'A funny animal cartoon character, best remembered for his starring roles in the Looney Tunes ', '0', 'character', '2', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('358', 'sullivan', 'sullivan', 'A giant furry blue friendly and sweet monster with horns and purple spots. ', '0', 'character', '2', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('514', 'the ita-~lian job', 'the italian job', 'About a team of thieves who plan to steal gold from a former associate who double-crossed them. ', '0', 'tv & movies', '2', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('586', 'bogeyman', 'bogeyman', 'A 2005 American horror film, directed by Stephen T. Kay.', '0', 'tv & movies', '2', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('754', 'tarzan', 'tarzan', 'A fictional character, an archetypal feral child raised in the African jungles.', '0', 'character', '1', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('792', 'the~pianist', 'the pianist', 'A 2002 biographical war drama film directed by Roman Polanski, starring Adrien Brody.', '0', 'tv & movies', '2', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('950', 'dragon~ball', 'dragon ball', 'A Japanese manga series written and illustrated by Akira Toriyama.', '0', 'tv & movies', '1', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('978', 'domo', 'domo', 'The official mascot of Japan''s NHK television station.', '0', 'character', '3', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1057', 'air bud', 'air bud', 'The film''s title may be a wordplay on "Air Jordan", a nickname of basketball superstar Michael Jordan.', '0', 'tv & movies', '3', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('143', 'rilakkuma', 'rilakkuma', 'A Japanese character designed by Aki Kondo, produced by San-X in 2003.', '0', 'character', '2', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('212', 'jumanji', 'jumanji', 'A 1995 American fantasy adventure film about a supernatural board game.', '0', 'tv & movies', '2', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('571', 'the ter-~minator', 'the terminator', 'A 1984 American science fiction action film directed by James Cameron.', '0', 'tv & movies', '1', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('688', 'crayon', 'crayon', 'A Japanese manga series written and illustrated by Yoshito Usui.', '0', 'tv & movies', '2', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('693', 'felix~the cat', 'felix the cat', 'A funny animal cartoon character created in the silent film era.', '0', 'character', '2', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('840', 'the iron~giant', 'the iron giant', 'A 1999 American animated science fiction action film using both traditional animation and computer animation.', '0', 'tv & movies', '2', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('865', 'lord of~the rings', 'lord of the rings', 'A film series consisting of three epic fantasy adventure films co-written and directed by Peter Jackson and based on English author J. R. R. Tolkien''s novels.', '0', 'tv & movies', '1', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('951', 'the lorax', 'the lorax', 'A 2012 American computer-animated 3D musical comedy film based on Dr. Seuss'' children''s book of the same name.', '0', 'tv & movies', '3', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('992', 'snowy', 'snowy', 'A fictional character in The Adventures of Tintin.', '0', 'character', '3', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1033', 'leon', 'leon', 'A professional hitman.', '0', 'character', '1', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1041', 'woody', 'woody', 'A fictional character and the main protagonist of the Toy Story franchise', '0', 'character', '1', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1074', 'barbie', 'barbie', 'A computer-animated virtual actress and is the most well-known and best-selling doll.', '0', 'character', '2', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('15', 'daffy~duck', 'daffy duck', 'An animated cartoon character produced by Warner Bros.', '0', 'character', '2', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('18', 'ani-~maniacs', 'animaniacs', 'An American animated television series, distributed by Warner Bros. ', '0', 'tv & movies', '3', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('99', 'full metal~jacket', 'full metal jacket', 'A 1987 war film produced, directed and co-written by Stanley Kubrick.', '0', 'tv & movies', '2', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('268', 'dora~marquez', 'dora marquez', 'A title character and the protagonist of an American animated television series.', '0', 'character', '2', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('293', 'arrow', 'arrow', 'An American action-adventure television series developed by Greg Berlanti, Marc Guggenheim.', '0', 'tv & movies', '2', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('366', 'tweety', 'tweety', 'A fictional Yellow Canary in the Warner Bros. Looney Tunes series of animated cartoons.', '0', 'character', '1', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('493', 'inception', 'inception', 'A 2010 science fiction thriller film written, co-produced, and directed by Christopher Nolan.', '0', 'tv & movies', '2', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('494', 'keroppi', 'keroppi', 'A frog character with large eyes and a V-shaped mouth.', '0', 'character', '3', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('690', 'fifer pig', 'fifer pig', 'Practical Pig, Fiddler Pig and he are three brothers.', '0', 'character', '3', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('850', 'a bug''s~life', 'a bug''s life', 'A 1998 American computer-animated comedy adventure film produced by Pixar Animation Studios.', '0', 'tv & movies', '1', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1048', 'con air', 'con air', 'An 1997 American action-thriller film directed by Simon West.', '0', 'tv & movies', '3', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1059', 'astro boy', 'astro boy', 'A title character and the protagonist of a Japanese manga series.', '0', 'character', '2', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('111', 'marge', 'marge', 'A fictional main character in the American animated sitcom The Simpsons.', '0', 'character', '3', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('142', 'rocky', 'rocky', 'A boxing saga of popular films all written by and starring Sylvester Stallone.', '0', 'tv & movies', '2', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('230', 'betty~boop', 'betty boop', 'An animated cartoon character created by Max Fleischer.', '0', 'character', '3', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('234', 'voldemort', 'voldemort', 'A fictional character and the main antagonist of J. K. Rowling''s Harry Potter series.', '0', 'character', '2', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('406', 'calvin', 'calvin', 'He demonstrates a level of wisdom, vocabulary and humor unusual for a six year-old boy.', '0', 'character', '2', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('408', 'airwolf', 'airwolf', 'An American television series that ran from 1984 until 1987.', '0', 'tv & movies', '2', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('482', 'prince~of persia', 'prince of persia', 'A 2010 American fantasy adventure film.', '0', 'tv & movies', '1', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('500', 'heroes', 'heroes', 'An American science fiction television drama series created by Tim Kring.', '0', 'tv & movies', '2', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('574', 'ben 10', 'ben 10', 'A computer-animated science fiction action film', '0', 'tv & movies', '1', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('584', 'zorro', 'zorro', 'A fictional character created in 1919 by New York–based pulp writer Johnston McCulley.', '0', 'character', '2', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1032', 'pan''s~labyrinth', 'pan''s labyrinth', 'A 2006 Mexican dark fantasy film written and directed by Guillermo del Toro.', '0', 'tv & movies', '3', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1086', 'darth~vader', 'darth vader', 'The central character of the Star Wars saga.', '0', 'character', '1', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('49', 'krillin', 'krillin', 'A fictional character within the Dragon Ball manga and anime series created by Akira Toriyama.', '0', 'character', '3', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('59', 'spongebob', 'spongebob', 'He is depicted as being an optimistic, cheerful, enthusiastic yellow sea sponge.', '0', 'character', '1', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('120', 'amelie', 'amelie', 'A 2001 romantic comedy film directed by Jean-Pierre Jeunet.', '0', 'tv & movies', '2', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('423', 'voltron', 'voltron', 'A giant robot in an anime television series.', '0', 'character', '2', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('473', 'sailor~moon', 'sailor moon', 'A carefree schoolgirl, she can transform herself into the de facto leader.', '0', 'character', '2', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('484', 'sanji', 'sanji', 'The main character of the One Piece manga and anime series.', '0', 'character', '2', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('629', 'kung fu~panda', 'kung fu panda', 'A 2008 American computer-animated action-comedy martial arts film produced by DreamWorks Animation and distributed by Paramount Pictures.', '0', 'tv & movies', '1', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('735', 'collins', 'collins', 'A fictional character, a featured role in the ABC daytime serial Dark Shadows.', '0', 'character', '3', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('739', 'dead~like me', 'dead like me', 'An American comedy-drama television series starring Ellen Muth and Mandy Patinkin.', '0', 'tv & movies', '3', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('814', 'super 8', 'super 8', 'A 2011 American science fiction-thriller film written and directed by J. J. Abrams.', '0', 'tv & movies', '3', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('923', 'phone~booth', 'phone booth', 'A 2003 American suspense/psychological thriller film.', '0', 'tv & movies', '2', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1013', 'hugo', 'hugo', 'A 2011 3D historical adventure drama film based on Brian Selznick''s novel.', '0', 'tv & movies', '2', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('422', 'wonder-~falls', 'wonderfalls', 'A comedy-drama television series that was broadcast on the Fox television network in 2004.', '0', 'tv & movies', '2', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('439', 'simpsons', 'simpsons', 'An American adult animated sitcom created by Matt Groening for the Fox Broadcasting Company.', '0', 'tv & movies', '1', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('470', 'hostel', 'hostel', 'A 2005 American horror film written, produced and directed by Eli Roth and starring Jay Hernandez.', '0', 'tv & movies', '2', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('495', 'dexter', 'dexter', 'A boy-genius with a secret laboratory filled with his collection of inventions.', '0', 'character', '2', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('528', 'garfield', 'garfield', 'A fictional character and the title protagonist from the comic strip Garfield created by Jim Davis. ', '0', 'character', '1', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('580', 'loki', 'loki', 'A fictional character, a supervillain who appears in comic books by Marvel Comics.', '0', 'character', '2', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('808', 'scratchy', 'scratchy', 'He is a black cat and is the victim of much abuse from the sadistic Itchy.', '0', 'character', '3', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('845', 'macdougal', 'macdougal', 'A recurring character on The Simpsons.', '0', 'character', '2', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('861', 'total~recall', 'total recall', 'A 2012 American dystopian science fiction action film remake of the 1990 film of the same name', '0', 'tv & movies', '3', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('920', 'breaking~bad', 'breaking bad', 'An American television drama series created and produced by Vince Gilligan', '0', 'tv & movies', '2', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1042', 'baywatch', 'baywatch', 'An American action drama series about the Los Angeles County Lifeguards.', '0', 'tv & movies', '1', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1056', 'gandalf', 'gandalf', 'A character in J. R. R. Tolkien''s novels The Hobbit and The Lord of the Rings. ', '0', 'character', '1', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('21', 'tinker~bell', 'tinker bell', 'A fairy born of a baby''s first laugh.', '0', 'character', '2', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('243', 'jason~voorhees', 'jason voorhees', 'A fictional character from the Friday the 13th series.', '0', 'character', '3', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('256', 'fred~flintstone', 'fred flintstone', 'The protagonist of the animated sitcom The Flintstones.', '0', 'character', '2', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('280', 'termi-~nator', 'terminator', 'A number of fictional characters portrayed by Arnold Schwarzenegger.', '0', 'character', '1', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('542', 'monsters~inc.', 'monsters inc.', 'A 2001 American computer-animated comedy film directed by Pete Docter.', '0', 'tv & movies', '2', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('557', 'sideways', 'sideways', 'A 2004 comedy-drama film written by Jim Taylor and Alexander Payne', '0', 'tv & movies', '2', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('603', 'zoidberg', 'zoidberg', 'A fictional character in the television series Futurama.', '0', 'character', '3', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('816', 'black~hawk down', 'black hawk down', 'A 2001 American war film directed by Ridley Scott.', '0', 'tv & movies', '2', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('833', 'beetle-~juice', 'beetlejuice', 'A 1988 American comedy horror fantasy film directed by Tim Burton.', '0', 'tv & movies', '3', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('855', 'star~trek', 'star trek', 'An American science fiction entertainment franchise created by Gene Roddenberry and currently under the ownership of CBS.', '0', 'tv & movies', '1', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1011', 'snoopy', 'snoopy', 'He is Charlie Brown''s pet dog.', '0', 'character', '2', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1072', 'dallas', 'dallas', 'An American Western Technicolor film ,and set in the title city during the Reconstruction Era of the United States.', '0', 'tv & movies', '3', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('26', 'samurai~jack', 'samurai jack', 'A title character of an American animated television series created by Genndy Tartakovsky for Cartoon Network.', '0', 'character', '3', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('104', 'gremlins', 'gremlins', 'A 1984 American horror comedy film directed by Joe Dante, released by Warner Bros.', '0', 'tv & movies', '3', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('189', 'edna mode', 'edna mode', 'An eccentric fashion designer.', '0', 'character', '2', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('199', 'speed~racer', 'speed racer', 'A 2008 American action film written, produced and directed by The Wachowskis.', '0', 'tv & movies', '2', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('355', 'rorschach', 'rorschach', 'A fictional character and an anti-hero in the acclaimed 1986 graphic novel miniseries Watchmen.', '0', 'character', '2', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('361', 'i am~legend', 'i am legend', 'A 2007 American post-apocalyptic science fiction horror film directed by Francis Lawrence and starring Will Smith.', '0', 'tv & movies', '1', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('369', 'tom cat', 'tom cat', 'A fictional character and one of the two protagonists in Metro-Goldwyn-Mayer''s series  theatrical cartoon short films.', '0', 'character', '1', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('397', 'fight~club', 'fight club', 'A 1999 American film based on the 1996 novel of the same name by Chuck Palahniuk.', '0', 'tv & movies', '1', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('517', 'sid', 'sid', 'A ground sloth in all four films and is portrayed as clumsy, annoying, slow moving, fast-talking, unintelligent, unfit, and unattractive member with a good heart', '0', 'character', '1', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('860', 'care~bears', 'care bears', 'A CGI adventure musical animated TV series.', '0', 'tv & movies', '2', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('941', 'brian~griffin', 'brian griffin', 'A fictional character from the animated television series Family Guy.', '0', 'character', '2', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1070', 'mad men', 'mad men', 'An American television period drama series created and produced by Matthew Weiner.', '0', 'tv & movies', '2', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('231', 'toy~story', 'toy story', 'A 1995 American computer-animated family buddy comedy film produced by Pixar and directed by John Lasseter.', '0', 'tv & movies', '1', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('354', 'thomas', 'thomas', 'A locomotive character from The Railway Series of children''s books by the Rev. W. Awdry.', '0', 'character', '1', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('496', 'minority~report', 'minority report', 'A 2002 American neo-noir science fiction thriller film directed by Steven Spielberg.', '0', 'tv & movies', '2', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('518', 'woodstock', 'woodstock', 'A fictional character in Charles M. Schulz''s comic strip Peanuts.', '0', 'character', '3', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('533', 'bones', 'bones', 'A 2001 horror film directed by Ernest Dickerson.', '0', 'tv & movies', '3', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('558', 'danbo', 'danbo', 'He is the cardboard box cartoon character.', '0', 'character', '2', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('704', 'oscar', 'oscar', 'A Muppet character on the television program Sesame Street.', '0', 'character', '2', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('727', 'bad~teacher', 'bad teacher', 'A 2011 comedy film directed by Jake Kasdan.', '0', 'tv & movies', '2', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('751', 'russel~hobbs', 'russel hobbs', 'A fictional musician, and member of the virtual band Gorillaz.', '0', 'character', '2', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('831', 'doctor~manhattan', 'doctor manhattan', 'A superhero with genuine superpowers who works for the U.S. government.', '0', 'character', '3', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('851', 'the little~mermaid', 'the little mermaid', 'A 49-minute animated film based on the fairy tale of the same name.', '0', 'tv & movies', '2', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1026', 'v for~vendetta', 'v for vendetta', 'A 2005 British action thriller film directed by James McTeigue.', '0', 'tv & movies', '3', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('35', 'knight~rider', 'knight rider', 'A 2008 television film which was created to serve as a backdoor pilot for the same name television series.', '0', 'tv & movies', '1', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('52', 'the~spirit', 'the spirit', 'A 2008 American superhero noir film, written and directed by Frank Miller.', '0', 'tv & movies', '2', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('63', 'the~matrix', 'the matrix', 'A 1999 American–Australian science fiction action film written and directed by the Wachowskis.', '0', 'tv & movies', '2', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('159', 'ewok', 'ewok', 'A small, mammaloid biped who appear in the Star Wars universe.', '0', 'character', '2', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('297', 'fiddler~pig', 'fiddler pig', 'A fictional character of an animated short film,"Three Little Pigs ".', '0', 'character', '2', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('298', 'one piece', 'one piece', 'A feature film based on the shōnen manga series by Eiichiro Oda.', '0', 'tv & movies', '3', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('425', 'predator', 'predator', 'A 1987 American science fiction action horror film directed by John McTiernan, starring Arnold Schwarzenegger.', '0', 'tv & movies', '2', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('550', 'wolverine', 'wolverine', 'A mutant and member of the X-Men.', '0', 'character', '1', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('639', 'kim~possible', 'kim possible', 'A crime fighting high school cheerleading captain.', '0', 'character', '2', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('656', 'venom', 'venom', 'A fictional extraterrestrial life form appearing in books published by Marvel Comics, usually those featuring Spider-Man.', '0', 'character', '3', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('943', 'james~bond', 'james bond', 'A remake of 1994 Hollywood film Baby''s Day Out.', '0', 'tv & movies', '1', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1088', 'yogi bear', 'yogi bear', 'A family cartoon character, created by Hanna-Barbera Productions.', '0', 'character', '1', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('163', 'you''ve~got mail', 'you''ve got mail', 'A 1998 American romantic comedy film directed by Nora Ephron.', '0', 'tv & movies', '2', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('278', 'princess~leia', 'princess leia', 'A fictional character in the Star Wars universe, portrayed by actress Carrie Fisher.', '0', 'character', '3', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('335', 'bee movie', 'bee movie', 'A 2007 American computer animated family comedy film produced by DreamWorks Animation.', '0', 'tv & movies', '2', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('403', 'timon', 'timon', 'Simba''s meerkat friend.', '0', 'character', '2', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('410', 'buttercup', 'buttercup', 'The tomboy of the Powerpuff Girls.', '0', 'character', '2', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('442', 'daredevil', 'daredevil', 'A fictional character, a superhero that appears in comic books published by Marvel Comics.', '0', 'character', '2', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('452', 'butt-head', 'butt-head', 'He has squinty eyes and a drooping nose with prominent nostrils.', '0', 'character', '3', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('515', 'the green~mile', 'the green mile', 'A 1999 American drama film directed by Frank Darabont.', '0', 'tv & movies', '3', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('617', 'gossip~girl', 'gossip girl', 'An American teen drama television series based on the book series of the same name.', '0', 'tv & movies', '1', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('921', 'captain~america', 'captain america', 'An American fictional character, a superhero who appears in comic books published by Marvel Comics', '0', 'character', '1', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('972', '300', '300', 'A 2007 American action film based on the 1998 comic series of the same name by Frank Miller and Lynn Varley.', '0', 'tv & movies', '2', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1054', 'doctor~who', 'doctor who', 'A British–American film continuing the British science fiction television series.', '0', 'tv & movies', '3', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('12', 'broflovski', 'broflovski', 'A fictional character in Comedy Central series South Park.', '0', 'character', '2', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('124', 'catch me~if you can', 'catch me if you can', 'A 2002 American biographical crime comedy-drama film based on the life of Frank Abagnale.', '0', 'tv & movies', '2', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('332', 'hell-~raiser', 'hellraiser', 'A 1987 British horror film written and directed by Clive Barker.', '0', 'tv & movies', '2', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('381', 'nemo', 'nemo', 'A juvenile clownfish, Marlin''s son.', '0', 'character', '1', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('516', 'wilma', 'wilma', 'A fictional character in the television animated series The Flintstones.', '0', 'character', '3', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('589', 'han solo', 'han solo', 'A character in the Star Wars universe.', '0', 'character', '2', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('787', 'totoro', 'totoro', 'He is a big plush toy and does not speak at all during the film, nor is he spoken to by anyone by his name.', '0', 'character', '2', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('801', 'x-men', 'x-men', 'A 2000 American superhero film based on the fictional Marvel Comics characters of the same name.', '0', 'tv & movies', '1', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('904', 'it', 'it', 'A 1990 horror/drama miniseries based on Stephen King''s novel of the same name.', '0', 'tv & movies', '3', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('944', 'the walking~dead', 'the walking dead', 'An American horror television drama series developed by Frank Darabont.', '0', 'tv & movies', '1', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1006', 'goofy', 'goofy', 'A funny animal cartoon character created in 1932 at Walt Disney Productions. ', '0', 'character', '1', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1036', 'spirited~away', 'spirited away', 'A 2001 Japanese animated fantasy film written and directed by Hayao Miyazaki', '0', 'tv & movies', '2', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('40', 'peter~griffin', 'peter griffin', 'The main character of the American animated sitcom Family Guy.', '0', 'character', '2', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('196', 'american~beauty', 'american beauty', 'A 1999 American drama film directed by Sam Mendes', '0', 'tv & movies', '1', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('200', 'looper', 'looper', 'A 2012 American science fiction action-thriller film written and directed by Rian Johnson.', '0', 'tv & movies', '3', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('364', 'everdeen', 'everdeen', 'A fictional character and the protagonist of Suzanne Collins''s The Hunger Games trilogy.', '0', 'character', '3', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('506', 'love~actually', 'love actually', 'A 2003 British Christmas themed romantic comedy film written and directed by Richard Curtis.', '0', 'tv & movies', '3', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('609', 'cat', 'cat', 'A fictional character and created by William Hanna and Joseph Barbera.', '0', 'character', '2', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('632', 'superman', 'superman', 'He usually wears a blue costume, red cape, and stylized red-and-yellow "S" shield on his chest.', '0', 'character', '1', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('666', '2 broke~girls', '2 broke girls', 'An American television sitcom created for Warner Bros. Television.', '0', 'tv & movies', '2', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('767', 'marley~& me', 'marley & me', 'A 2008 American comedy-drama film about the titular dog.', '0', 'tv & movies', '2', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('979', 'daria', 'daria', 'A fictional animated character from MTV''s animated series Beavis and Butt-head.', '0', 'character', '3', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('989', 'kung fu~hustle', 'kung fu hustle', 'A 2004 Hong Kong action comedy film.', '0', 'tv & movies', '2', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1003', 'minky~momo', 'minky momo', 'A princess of "Fenarinarsa" , "the land of dreams in the sky".', '0', 'character', '2', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('5', 'bruce~almighty', 'bruce almighty', 'A 2003 American fantasy comedy film directed by Tom Shadyac.', '0', 'tv & movies', '2', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('7', 'monkey~luffy', 'monkey luffy', 'A fictional character and the primary protagonist of the One Piece franchise created by Eiichiro Oda.', '0', 'character', '3', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('95', 'scarface', 'scarface', 'A 1983 American crime film directed by Brian De Palma.', '0', 'tv & movies', '3', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('131', 'zeus', 'zeus', 'A fictional character, a god in the Marvel Comics universe.', '0', 'character', '2', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('288', 'mr. in-~credible', 'mr. incredible', 'The patriarch of the Parr family, possessing super-strength and limited invulnerability.', '0', 'character', '1', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('513', 'winnie~the pooh', 'winnie the pooh', 'A fictional anthropomorphic bear created by A. A. Milne.', '0', 'character', '1', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('569', 'sesame~street', 'sesame street', 'A long-running American children''s television series created by Joan Ganz Cooney and Lloyd Morrisett.', '0', 'tv & movies', '2', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('594', 'tele-~tubbies', 'teletubbies', 'A British BBC children''s television series', '0', 'tv & movies', '1', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('714', 'in time', 'in time', 'A 2011 dystopian science fiction action film starring Amanda Seyfried and Justin Timberlake.', '0', 'tv & movies', '2', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('720', 'back to~the future', 'back to the future', 'A 1985 American science fiction film.', '0', 'tv & movies', '1', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('725', 'lilo~pelekai', 'lilo pelekai', 'A young Hawaiian girl.', '0', 'character', '2', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('938', 'suneo~honekawa', 'suneo honekawa', 'The fox-faced rich kid who loves to flaunt his material wealth before everyone.', '0', 'character', '2', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('44', 'hellboy', 'hellboy', 'A fictional character, a comic book superhero created by writer-artist Mike Mignola.', '0', 'character', '1', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('64', 'my little~pony', 'my little pony', 'A 2013 Canadian-American animated film directed by Jayson Thiessen.', '0', 'tv & movies', '2', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('91', 'under-~employed', 'underemployed', 'An American comedy-drama television series on MTV.', '0', 'tv & movies', '2', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('103', 'the~farmer', 'the farmer', 'A fictional character of the British stop-motion animated children''s television series,"Shaun the Sheep ".', '0', 'character', '2', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('133', 'piranha', 'piranha', 'A 1995 American horror film directed by Scott P. Levy.', '0', 'tv & movies', '3', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('428', 'titanic', 'titanic', 'A 1997 American epic romantic disaster film directed, written, co-produced, co-edited  by James Cameron.', '0', 'tv & movies', '1', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('505', 'aquaman', 'aquaman', 'A superhero who stars in many comic book titles by DC Comics.', '0', 'character', '3', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('543', '28 days~later', '28 days later', 'A 2002 British horror film directed by Danny Boyle.', '0', 'tv & movies', '3', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('628', 'vanellope', 'vanellope', 'A fictional character of the 2012 American computer-animated family-comedy film,"Wreck-It Ralph ".', '0', 'character', '2', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('700', 'jessica~rabbit', 'jessica rabbit', 'One of the most famous sex symbols on the animated screen.', '0', 'character', '2', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('873', 'ronald~weasley', 'ronald weasley', 'a fictional character and one of the three protagonists of J. K. Rowling''s Harry Potter series.', '0', 'character', '3', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('913', 'clover-~field', 'cloverfield', 'A 2008 American monster thriller film directed by Matt Reeves.', '0', 'tv & movies', '2', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('4', 'mickey~mouse', 'mickey mouse', 'A funny animal cartoon character and the official mascot of The Walt Disney Company.', '0', 'character', '3', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('16', 'batman', 'batman', 'A fictional character, a comic book superhero appearing in comic books published by DC Comics.', '0', 'character', '1', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('106', 'leon', 'leon', 'A 1994 English-language French thriller film written and directed by Luc Besson.', '0', 'tv & movies', '3', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('157', 'da vinci~code', 'da vinci code', 'A 2006 American mystery-thriller film produced by John Calley and Brian Grazer and directed by Ron Howard.', '0', 'tv & movies', '1', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('279', 'troll~doll', 'troll doll', 'Originally created in 1959 by Danish woodcutter Thomas Dam.', '0', 'character', '3', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('334', 'emily', 'emily', 'An advertising mascot character by Rob Reger.', '0', 'character', '2', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('390', 'ugly~betty', 'ugly betty', 'An American dramedy television series developed by Silvio Horta.', '0', 'tv & movies', '1', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('415', 'kenny', 'kenny', 'A character in the animated television series South Park.', '0', 'character', '1', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('420', 'poca-~hontas', 'pocahontas', 'A 1995 American animated musical romance-drama film. ', '0', 'tv & movies', '2', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('444', 'wilfred', 'wilfred', 'An American sitcom television series which debuted on June 23, 2011.', '0', 'tv & movies', '3', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('488', 'flubber', 'flubber', 'A 1997 comedy film and a remake of The Absent-Minded Professor (1961).', '0', 'tv & movies', '3', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('621', 'the brain', 'the brain', 'He looks and sounds like Orson Welles, albeit with pink eyes.', '0', 'character', '3', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('653', 'captain~haddock', 'captain haddock', 'A fictional character in The Adventures of Tintin.', '0', 'character', '3', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('737', 'the raid', 'the raid', 'A 2011 Indonesian martial arts action film written and directed by Gareth Evans and starring Iko Uwais.', '0', 'tv & movies', '2', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('749', 'hamm', 'hamm', 'The best friends of Mr. Potato Head.', '0', 'character', '2', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('790', 'true~blood', 'true blood', 'An American television drama series created and produced by Alan Ball.', '0', 'tv & movies', '2', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1018', 'mr. burns', 'mr. burns', 'A recurring fictional character in the animated television series The Simpsons.', '0', 'character', '3', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1080', 'spawn', 'spawn', 'A comic book superhero who appears in a monthly comic book of the same name published by Image Comics.', '0', 'character', '2', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('3', 'm.a.s.k.', 'm.a.s.k.', 'A media franchise created by Kenner.', '0', 'tv & movies', '3', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('17', 'bearbrick', 'bearbrick', 'A collectible toy designed and produced by the Japanese company MediCom Toy Incorporated.', '0', 'character', '2', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('19', 'scrooge~mcduck', 'scrooge mcduck', 'A cartoon character created in 1947 by Carl Barks and licensed by The Walt Disney Company .', '0', 'character', '1', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('70', 'pinocchio', 'pinocchio', 'He is known for having a short nose that becomes longer when he is under stress , especially while lying.', '0', 'character', '1', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('72', 'catdog', 'catdog', 'An American animated television series created for Nickelodeon by Peter Hannan.', '0', 'tv & movies', '3', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('211', 'duncan', 'duncan', 'A fictional character in the film Wreck-It Ralph.', '0', 'character', '3', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('296', 'et', 'et', 'A 1982 American science fiction film co-produced and directed by Steven Spielberg.', '0', 'tv & movies', '1', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('521', 'barney', 'barney', 'The title character of a children''s TV show about a purple dinosaur.', '0', 'character', '3', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('564', 'alf', 'alf', 'his body is covered with fur and he has a rippled snout, facial moles, and eight stomachs.', '0', 'character', '3', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('578', 'the~punisher', 'the punisher', 'A 2004 American comic book vigilante film, based on the Marvel Comics character of the same name.', '0', 'tv & movies', '1', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('705', 'princess~jasmine', 'princess jasmine', 'A fictional main character who appears in Walt Disney Pictures'' 31st animated feature film Aladdin.', '0', 'character', '3', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('755', 'revenge', 'revenge', 'An American television primetime soap opera that airs on ABC.', '0', 'tv & movies', '2', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('773', 'pucca', 'pucca', 'A 10-year old Chinese girl who loves Garu and is hopelessly in love with him.', '0', 'character', '2', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('841', 'megamind', 'megamind', 'A 2010 American 3D computer-animated superhero action comedy film directed by Tom McGrath.', '0', 'tv & movies', '3', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('879', 'mars~attacks!', 'mars attacks!', 'A 1996 American science fiction film directed by Tim Burton.', '0', 'tv & movies', '2', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('883', 'papa~smurf', 'papa smurf', 'A fictional character from the comic strip the Smurfs.', '0', 'character', '2', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('952', 'judge~dredd', 'judge dredd', 'Amongst the UK''s best known comic characters.', '0', 'character', '3', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1066', 'charlie''s~angels', 'charlie''s angels', 'An American crime drama television series that aired on ABC from September 1976 to June 1981.', '0', 'tv & movies', '2', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('27', 'free~willy', 'free willy', 'A 1993 family drama film and released by Warner Bros.', '0', 'tv & movies', '1', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('110', 'eye of~sauron', 'eye of sauron', 'A fictional character of J. R. R. Tolkien''s The Lord of the Rings.', '0', 'character', '3', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('156', 'wall-e', 'wall-e', 'A robot,the title character of a film.', '0', 'character', '1', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('252', 'billy', 'billy', 'A puppet that has appeared in the Saw franchise.', '0', 'character', '2', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('387', 'the~shining', 'the shining', 'A 1980 psychological horror film produced and directed by Stanley Kubrick.', '0', 'tv & movies', '3', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('400', 'lotso', 'lotso', 'A plush, purple teddy bear with a big plum nose.', '0', 'character', '3', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('438', 'men in~black', 'men in black', 'A 1997 science fiction action comedy spy film directed by Barry Sonnenfeld,and starring Tommy Lee Jones and Will Smith.', '0', 'tv & movies', '1', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('529', 'al bundy', 'al bundy', 'A fictional character from the U.S. television series Married... with Children, played by Ed O''Neill.', '0', 'character', '3', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('551', 'harry~potter', 'harry potter', 'The title character and the protagonist of J. K. Rowling''s  novel of the same name..', '0', 'character', '1', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('562', 'the~dictator', 'the dictator', 'A 2012 American comedy film co-written by and starring Sacha Baron Cohen.', '0', 'tv & movies', '2', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('634', 'sleepy~hollow', 'sleepy hollow', 'A 1999 American-German crime and horror film thriller directed by Tim Burton.', '0', 'tv & movies', '2', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('696', 'hanamichi', 'hanamichi', 'The protagonist of Slam Dunk.', '0', 'character', '3', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('746', 'desperado', 'desperado', 'A 1995 American action film written, produced and directed by Robert Rodriguez.', '0', 'tv & movies', '3', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('839', 'granger', 'granger', 'One of the three protagonists of J.K. Rowling''s Harry Potter series.', '0', 'character', '2', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('968', 'krusty~the clown', 'krusty the clown', 'A fictional character in the animated television series The Simpsons.', '0', 'character', '2', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('984', 'perfume', 'perfume', 'A 2001 film about the fashion industry in New York City.', '0', 'tv & movies', '3', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1010', 'practical~pig', 'practical pig', 'He and Fiddler Pig , Fifer Pig are three brothers.', '0', 'character', '3', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1061', 'early~edition', 'early edition', 'An American television drama series that aired on CBS broadcast network.', '0', 'tv & movies', '2', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('31', 'baby''s~day out', 'baby''s day out', 'A 1994 American family comedy film, written by John Hughes.', '0', 'tv & movies', '2', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('117', 'tinky~winky', 'tinky winky', 'The largest and oldest of the Teletubbies, is covered in purple terrycloth.', '0', 'character', '1', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('205', 'para-~norman', 'paranorman', 'A 2012 American 3D stop-motion animated comedy horror family film produced by Laika.', '0', 'tv & movies', '3', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('310', 'santa~claus', 'santa claus', 'Also known as Father Christmas.', '0', 'character', '3', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('474', 'golden~compass', 'golden compass', 'A 2007 fantasy-adventure film based on Northern Lights.', '0', 'tv & movies', '3', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('522', 'fix-it~felix', 'fix-it felix', 'A fictional character in the film Wreck-It Ralph.', '0', 'character', '2', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('560', 'the~godfather', 'the godfather', 'A 1972 American crime film directed by Francis Ford Coppola and produced by Albert S. Ruddy.', '0', 'tv & movies', '1', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('661', 'wonder~woman', 'wonder woman', 'A fictional DC Comics superheroine created by American psychologist and writer William Moulton Marston.', '0', 'character', '1', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('678', 'fantasia', 'fantasia', 'A 1940 American animated film produced by Walt Disney.', '0', 'tv & movies', '2', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('709', 'snuffy', 'snuffy', 'One of the characters on the educational television program for young children, Sesame Street.', '0', 'character', '3', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('757', 'the~karate kid', 'the karate kid', 'A 1984 American martial arts romantic drama film directed by John G. Avildsen.', '0', 'tv & movies', '2', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('765', 'jabba~the hutt', 'jabba the hutt', 'A fictional character appearing in George Lucas''s space opera film saga Star Wars.', '0', 'character', '3', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('798', 'this~is it', 'this is it', 'A 2009 American documentary–concert film directed by Kenny Ortega.', '0', 'tv & movies', '1', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('800', 'robocop', 'robocop', 'A fictional Detroit cyborg police officer in the film series of the same name.', '0', 'character', '2', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('843', 'wall-e', 'wall-e', 'In the film,he is the only robot of his kind shown to be still functioning on Earth.', '0', 'character', '2', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('871', 'cons-~tantine', 'constantine', 'A 2005 American action horror film directed by Francis Lawrence.', '0', 'tv & movies', '3', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('990', 'brown', 'brown', 'A fictional character of the television series Line Town.', '0', 'character', '3', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1060', 'darth~maul', 'darth maul', 'A fictional character in the science fiction franchise Star Wars.', '0', 'character', '3', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('32', 'dark~shadows', 'dark shadows', 'A 2012 American horror comedy-drama film based on the gothic soap opera of the same name.', '0', 'tv & movies', '2', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('36', 'brave~heart', 'braveheart', 'A 1995 historical drama war film directed by and starring Mel Gibson.', '0', 'tv & movies', '1', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('164', 'hannibal', 'hannibal', 'A 2001 American psychological thriller film directed by Ridley Scott, adapted from Thomas Harris'' novel of the same name. ', '0', 'character', '3', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('246', 'frodo', 'frodo', 'He serves as the primary protagonist of The Lord of the Rings. ', '0', 'character', '2', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('320', 'alien', 'alien', 'A 1979 science fiction horror film directed by Ridley Scott.', '0', 'tv & movies', '3', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('325', 'saw', 'saw', 'A 2004 American independent horror film directed by James Wan.', '0', 'tv & movies', '3', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('378', 'droopy', 'droopy', 'An animated cartoon character: an anthropomorphic dog.', '0', 'character', '1', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('525', 'cin-~derella', 'cinderella', 'A 1950 American animated musical fantasy film produced by Walt Disney Animation Studios.', '0', 'tv & movies', '1', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('579', 'usopp', 'usopp', 'A fictional character in the Japanese shōnen manga series One Piece.', '0', 'character', '3', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('644', 'minnie~mouse', 'minnie mouse', 'A funny animal cartoon character created by Ub Iwerks and Walt Disney.', '0', 'character', '2', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('657', 'yoda', 'yoda', 'A character in the Star Wars universe.', '0', 'character', '3', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('698', 'asterix', 'asterix', 'A fictional character, the titular hero of the French comic book series. ', '0', 'character', '3', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('777', 'apollo 13', 'apollo 13', 'A 1995 American historical docudrama film directed by Ron Howard.', '0', 'tv & movies', '2', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('799', 'smiley', 'smiley', 'A 2012 American psychological slasher film directed by Michael Gallagher.', '0', 'tv & movies', '3', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('838', 'daisy~duck', 'daisy duck', 'A cartoon character created in 1940 by Walt Disney Productions as the girlfriend of Donald Duck.', '0', 'character', '3', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('872', 'leonidas', 'leonidas', 'A main character in the 2007 American action film 300. ', '0', 'character', '2', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1001', 'marge~simpson', 'marge simpson', 'A fictional main character in the American animated sitcom The Simpsons and part of the eponymous family.', '0', 'character', '1', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1028', '24', '24', 'An American television series produced for the Fox network and syndicated worldwide, starring Kiefer Sutherland.', '0', 'tv & movies', '2', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('144', 'planet~terror', 'planet terror', 'A 2007 American action horror science-fiction film directed by Robert Rodriguez.', '0', 'tv & movies', '3', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('176', 'dumbo', 'dumbo', 'The title character of an American animated film produced by Walt Disney ,and is an elephant who has huge ears and is able to use them to fly.', '0', 'character', '2', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('186', 'fry', 'fry', 'A fictional character in the animated sitcom Futurama.', '0', 'character', '3', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('195', 'shirley', 'shirley', 'A fictional character in the British animated children''s television series Shaun the Sheep. ', '0', 'character', '2', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('201', 'mcqueen', 'mcqueen', 'An anthropomorphic racecar and the main character in the 2006 animated Pixar film Cars.', '0', 'character', '3', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('269', 'captain~hook', 'captain hook', 'A fictional character and the main antagonist of J. M. Barrie''s play Peter Pan.', '0', 'character', '1', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('326', 'space jam', 'space jam', 'A 1996 American family live-action/animated sports comedy film starring Michael Jordan.', '0', 'tv & movies', '2', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('336', 'dipsy', 'dipsy', 'The second Teletubby.', '0', 'character', '1', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('377', 'pokemon', 'pokemon', 'A media franchise published and owned by Japanese video game company Nintendo and created by Satoshi Tajiri in 1996. ', '0', 'tv & movies', '3', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('502', 'ernie', 'ernie', 'A fictional character, a Muppet on the Public Broadcasting Service''s long-running children''s television show, Sesame Street.', '0', 'character', '3', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('559', 'capote', 'capote', 'A 2005 biographical film following the events during the writing of the non-fiction book In Cold Blood.', '0', 'tv & movies', '3', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('570', 'jackass', 'jackass', 'An American reality series,featuring people performing various dangerous.', '0', 'tv & movies', '2', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('752', 'rambo', 'rambo', 'A 2008 American action film directed, co-written by and starring Sylvester Stallone.', '0', 'tv & movies', '1', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('821', 'the~lion king', 'the lion king', 'A 1994 American animated musical drama film produced by Walt Disney Feature Animation.', '0', 'tv & movies', '1', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('933', 'wilson', 'wilson', 'A fictional character in the 2000 drama film Cast Away. ', '0', 'character', '3', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('981', 'this is~england', 'this is england', 'A 2006 British drama film written and directed by Shane Meadows.', '0', 'tv & movies', '2', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1029', 'blossom', 'blossom', 'The smart one" and self-proclaimed leader of the Powerpuff Girls.', '0', 'character', '2', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1052', 'jack-jack', 'jack-jack', 'The Parrs'' infant son, the youngest of the Parr children.', '0', 'character', '3', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('58', '21 jump~street', '21 jump street', 'A 2012 American action comedy film produced by and starring Jonah Hill and Channing Tatum.', '0', 'tv & movies', '3', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('181', 'cj7', 'cj7', 'A 2008 Hong Kong-Chinese science fiction film co-written, co-produced, starring, and directed by Stephen Chow.', '0', 'tv & movies', '2', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('227', 'lara~croft', 'lara croft', 'A fictional character and the main protagonist of the Square Enix video game series Tomb Raider.', '0', 'character', '1', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('466', 'tony~the tiger', 'tony the tiger', 'The advertising cartoon mascot for Kellogg''s Frosted Flakes breakfast cereal, appearing on its packaging and advertising.', '0', 'character', '3', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('545', 'wanda', 'wanda', 'He and Cosmo are considered the official pairing of the show The Fairly OddParents.', '0', 'character', '3', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('649', 'the~oranges', 'the oranges', 'An American romantic comedy directed by Julian Farino.', '0', 'tv & movies', '3', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('689', 'eve', 'eve', 'She falls in love with another robot named WALL-E.', '0', 'character', '3', '1', '6', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('708', 'the~x-files', 'the x-files', 'An American science fiction horror drama television series.', '0', 'tv & movies', '1', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('744', 'bender', 'bender', 'A fictional robot character in the animated television series Futurama.', '0', 'character', '3', '1', '10', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('771', 'dumb and~dumber', 'dumb and dumber', 'A 1994 American buddy comedy film starring Jim Carrey, Jeff Daniels and Lauren Holly.', '0', 'tv & movies', '2', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('788', 'c-3po', 'c-3po', 'A robot character from the Star Wars universe.', '0', 'character', '2', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('869', 'tom &~jerry', 'tom & jerry', 'One is a blue and white domestic shorthair cat，one is a small brown house mouse.', '0', 'character', '1', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('885', 'memento', 'memento', 'A 2000 American neo-noir psychological thriller film written and directed by Christopher Nolan.', '0', 'tv & movies', '2', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('936', 'russell', 'russell', 'A fictional character in the 2009 film UP.', '0', 'character', '3', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('970', 'silver-~hawks', 'silverhawks', 'An American animated television series developed by Rankin/Bass Productions.', '0', 'tv & movies', '3', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1064', 'shizuka~minamoto', 'shizuka minamoto', 'A fictional character in the Japanese manga series Doraemon.', '0', 'character', '2', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1067', 'lion~king', 'lion king', 'A 1994 American animated musical drama film produced by Walt Disney Feature Animation.', '0', 'tv & movies', '1', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1073', 'tuxedo~mask', 'tuxedo mask', 'A fictional character and one of the primary protagonists of the Sailor Moon metaseries.', '0', 'character', '2', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1', 'top cat', 'top cat', 'The yellow furred, greedy, somewhat lazy and clever main protagonist of the American animated television series.', '0', 'character', '3', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('33', 'jungle~book', 'jungle book', 'Based on the original book by Rudyard Kipling.', '0', 'tv & movies', '2', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('38', 'the~exorcist', 'the exorcist', 'A 1973 American supernatural horror film directed by William Friedkin.', '0', 'tv & movies', '3', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('43', 'i, robot', 'i, robot', 'A 2004 dystopian science-fiction action film directed by Alex Proyas.', '0', 'tv & movies', '2', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('125', 'dorami', 'dorami', 'The sister of Doraemon.', '0', 'character', '3', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('185', 'rex', 'rex', 'An excitable large, green, plastic Tyrannosaurus.', '0', 'character', '3', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('192', 'ghost~ship', 'ghost ship', 'A 2002 horror film directed by Steve Beck.', '0', 'tv & movies', '1', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('300', 'eric~cartman', 'eric cartman', 'A fictional character in the animated television series South Park.', '0', 'character', '3', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('316', 'house', 'house', 'An American television medical drama that originally ran on the Fox network for eight seasons. ', '0', 'tv & movies', '3', '1', '26', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('637', 'blade', 'blade', 'A 1998 American vampire-superhero action film starring Wesley Snipes.', '0', 'tv & movies', '2', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('642', 'bumble~bee', 'bumble bee', 'The name of several fictional characters from the Transformers series.', '0', 'character', '1', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('748', 'wynchel', 'wynchel', 'A fictional character in the film Wreck-It Ralph.', '0', 'character', '2', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('818', 'trans-~formers', 'transformers', 'It stars Shia LaBeouf as Sam Witwicky.', '0', 'tv & movies', '1', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('934', 'sweeney~todd', 'sweeney todd', 'A 2007 horror musical film directed by Tim Burton.', '0', 'tv & movies', '3', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('967', 'count~von count', 'count von count', 'One of the Muppet characters on Sesame Street.', '0', 'character', '2', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1014', 'big bird', 'big bird', 'The main protagonist of the children''s television show Sesame Street.', '0', 'character', '2', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('82', 'voldemort', 'lord voldemort', 'A fictional character and the main antagonist of J. K. Rowling''s Harry Potter series.', '0', 'character', '3', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('305', 'kenny', 'kenny', 'A character in the animated television series South Park.', '0', 'character', '1', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('71', 'macgyver', 'macgyver', 'An American action-adventure television series created by Lee David Zlotoff. Henry Winkler and John Rich were the executive producers. ', '0', 'tv & movies', '2', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('109', 'bart', 'bart', 'he is a fictional main character in the animated television series The Simpsons and part of the Simpson family. ', '0', 'character', '1', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('743', 'ariel', 'ariel', 'It tells the story of a beautiful mermaid who dreams of becoming human.', '0', 'tv & movies', '1', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('976', 'finding~nemo', 'finding nemo', 'It tells the story of the over-protective clownfish named Marlin searches for his abducted son  all the way to Sydney Harbour. ', '0', 'tv & movies', '1', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('888', 'ken', 'ken', 'He appeared in the Disney Pixar film Toy Story 3, voiced by actor Michael Keaton.', '0', 'character', '1', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('909', 'j.r.', 'j.r.', 'A fictional character in the hit U.S. television series Dallas', '0', 'character', '3', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('956', 'dexter', 'dexter', 'The series centers on it, a blood spatter pattern analyst for a fictional Miami Metro Police Department who also leads a secret life as a serial killer.', '0', 'tv & movies', '3', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('55', 'star~wars', 'star wars', 'A 2008 CGI film , leading into the TV series of the same name. ', '0', 'tv & movies', '1', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('825', 'sex and~the city', 'sex and the city', 'A 2008 American blue romantic comedy film adaptation of the HBO comedy series of the same name.', '0', 'tv & movies', '1', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('566', 'oceans~eleven', 'oceans eleven', 'A 2001 American comedy-crime caper film and remake of the 1960 Rat Pack film of the same name.', '0', 'tv & movies', '2', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('900', 'scream', 'scream', 'A series of American slasher films created by Kevin Williamson and Wes Craven.', '0', 'tv & movies', '1', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('343', 'big bang~theory', 'big bang theory', 'it is an American sitcom created by Chuck Lorre and Bill Prady,', '0', 'tv & movies', '2', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1053', 'aladdin', 'aladdin', 'Based on the Arab folktale from One Thousand and One Nights.', '0', 'tv & movies', '1', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('457', 'jack~sparrow', 'jack sparrow', 'A fictional character and the protagonist of the Pirates of the Caribbean film series. ', '0', 'character', '1', '1', '14', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('41', 'pulp~fiction', 'pulp fiction', 'A 1994 American crime film directed by Quentin Tarantino.', '0', 'tv & movies', '3', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('148', 'robin~hood', 'robin hood', 'A 2010 Anglo-American adventure film based on the same name legend directed by Ridley Scott.', '0', 'character', '1', '1', '3', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('219', 'snow~white', 'snow white', 'A fictional character and a main character from Walt Disney Productions'' first animated feature film.', '0', 'character', '2', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('139', 'kill~bill', 'kill bill', 'A two-part 2003–2004 action/thriller film written and directed by Quentin Tarantino. ', '0', 'tv & movies', '3', '1', '18', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('847', 'magnum', 'magnum', 'The main character and namesake of the popular American television series and was portrayed by Tom Selleck.', '0', 'character', '2', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('88', 'bambi', 'bambi', 'A title character and the protagonist of Felix Salten''s 1923 novel and his image is a Disney icon.', '0', 'character', '1', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('662', 'peter~pan', 'peter pan', 'A fictional magical boy who refuses to grow up.', '0', 'character', '1', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1260', 'dave', 'dave', 'A very smart and sweet minion who is loving, kind, caring and funny in the film of Despicable Me.', '0', 'character', '2', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1261', 'stuart', 'stuart', 'A one-eyed Minion with combed hair in the film of Despicable Me. He is playful, funny and great in playing Video games .', '0', 'character', '2', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1262', 'evil~minions', 'evil minions', 'They are characters that appeared in Despicable Me 2. Originally Gru''s Minions, these purple creatures are the product of the extreme mutation caused by the PX-41 serum entering their blood stream. ', '0', 'character', '2', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1263', 'gru', 'gru', 'A supervillain and jelly manufacturer and is now a consultant for the Anti-Villain League in the film of Despicable Me.', '0', 'character', '2', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1264', 'mike', 'mike', 'He is the deuteragonist in Monsters, Inc. and the protagonist in Monsters University.', '0', 'character', '2', '1', '8', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1265', 'gravity', 'gravity', 'A 2013 3D science fiction thriller and space drama film directed, co-written, co-produced and co-edited by Alfonso Cuarón. ', '0', 'tv & movies', '2', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1266', 'now you~see me', 'now you see me', 'A 2013 French-American caper thriller film. Despite the mixed reviews from critics, the film has proved to be a box office success, and a sequel has been officially confirmed.', '0', 'tv & movies', '2', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1267', 'world war~z', 'world war z', 'A 2013 British-American apocalyptic film. The film stars Brad Pitt as Gerry Lane, a former United Nations investigator who must travel the world to find a way to stop a zombie-like pandemic.', '0', 'tv & movies', '2', '1', '12', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1268', 'pacific~rim', 'pacific rim', 'The film is set in the 2020s, when Earth is at war with the Kaijus, colossal monsters which have emerged from an interdimensional portal on the floor of the Pacific Ocean.', '0', 'tv & movies', '1', '1', '2', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1269', 'don jon', 'don jon', 'A 2013 American romantic comedy-drama film.', '0', 'tv & movies', '3', '1', '25', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1270', 'the croods', 'the croods', 'A 2013 American 3D computer-animated adventure comedy film produced by DreamWorks Animation. It features the voices of Nicolas Cage and others.', '0', 'tv & movies', '3', '1', '15', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1271', 'galadriel', 'galadriel', 'She is a character created by J.R.R. Tolkien, appearing in his Middle-earth legendarium. She appears in The Lord of the Rings, The Silmarillion, and Unfinished Tales. She was a royal Elf of both the Noldor and the Teleri.', '0', 'character', '2', '1', '5', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1272', 'grug', 'grug', 'A character of The Croods. He keeps his family in line and believes strongly that things should really never change since they lost their neighbors from not being careful.', '0', 'character', '3', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1273', 'life of pi', 'life of pi', 'A 2012 American-Indian-British 3D live-action film. The storyline revolves around a 16-year-old Indian boy, who survives a shipwreck in which his family dies, and is stranded in the Pacific Ocean on a lifeboat with a Bengal tiger.', '0', 'tv & movies', '1', '1', '23', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1274', 'cloud~atlas', 'cloud atlas', 'A 2012 German epic drama and science fiction anthology film. The official synopsis for Cloud Atlas describes the film as: "An exploration of how the actions of individual lives impact one another in the past, present and future, as one soul is shaped from a killer into a hero, and an act of kindness ripples across centuries to inspire a revolution."', '0', 'tv & movies', '2', '1', '21', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1275', 'men in~black 3', 'men in black 3', 'It is the third installment in this famous film series based on Lowell Cunningham''s comic book series with the same name.', '0', 'tv & movies', '1', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1276', 'the last~stand', 'the last stand', 'A 2013 American action film directed by South Korean film director Kim Ji-woon his American directorial debut, and starring Arnold Schwarzenegger.', '0', 'tv & movies', '3', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1277', 'rush', 'rush', 'A 2013 biographical sports drama film about the 1976 Formula One season and the rivalry between drivers James Hunt and Niki Lauda.', '0', 'tv & movies', '2', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1278', 'the lone~ranger', 'the lone ranger', 'A 2013 American western action film produced by Walt Disney Pictures and Jerry Bruckheimer Films. Based on the radio series of the same name, the film stars Johnny Depp as Tonto', '0', 'tv & movies', '2', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1279', 'tonto', 'tonto', 'A fictional character, the Native American companion or sidekick of the Lone Ranger, a popular American Western character created by George W. Trendle and Fran Striker. ', '0', 'character', '3', '1', '22', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1280', 'the smurfs', 'the smurfs', 'Small blue fictional creatures that live in mushrooms', '0', 'tv & movies', '1', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1281', 'smurfette', 'smurfette', 'A female character from the Smurfs.', '0', 'character', '3', '1', '20', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1282', 'gargamel', 'gargamel', 'The Evil Wizard is the sworn enemy of the Smurfs and always tries to capture the Smurfs.', '0', 'character', '2', '1', '1', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1283', 'papa smurf', 'papa smurf', 'One of the main characters of the Smurfs ', '0', 'character', '2', '1', '9', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1284', 'thomas &~his friends', 'thomas & his friends', 'A British children''s television series, which had its first broadcast on the ITV network in 1984. It is based on The Railway Series of books.', '0', 'tv & movies', '1', '1', '13', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1285', 'aang', 'aang', 'A fictional character and the main protagonist for animated television series, Avatar: The Last Airbender', '0', 'character', '2', '1', '24', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1286', 'the last~airbender', 'the last airbender', 'An American animated television series that aired for three seasons on Nickelodeon from 2005 to 2008. It is set in an Asian influenced world wherein some are able to manipulate the classical elements by use of psychokinetic variants of Chinese martial arts known as "bending". ', '0', 'tv & movies', '2', '1', '17', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1287', 'the legend~of korra', 'the legend of korra', 'An American animated television series that premiered on the Nickelodeon television network in 2012. It was created by Bryan Konietzko and Michael Dante DiMartino as a sequel to their series Avatar: The Last Airbender.', '0', 'tv & movies', '3', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1288', 'adventure~time', 'adventure time', 'An American animated television series. It follows the adventures of Finn , a human boy, and his best friend and adoptive brother Jake, a dog with magical powers to change shape and grow and shrink at will.', '0', 'tv & movies', '2', '1', '27', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1289', 'insidious', 'insidious', 'A 2011 American supernatural horror film.', '0', 'tv & movies', '3', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1290', 'patrick~star', 'patrick star', 'A fictional character in the Nickelodeon animated television series SpongeBob SquarePants.', '0', 'character', '2', '1', '19', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1291', 'squidward', 'squidward', 'He is the neighbor between SpongeBob and Patrick.', '0', 'character', '2', '1', '4', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1292', 'mr. krabs', 'mr. krabs', 'A fictional character in the Nickelodeon animated television series SpongeBob SquarePants.', '0', 'character', '2', '1', '11', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1293', 'sandy~cheeks', 'sandy cheeks', 'A fictional character in the Nickelodeon animated television series SpongeBob SquarePants.', '0', 'character', '2', '1', '7', '0', '0', '100', '0', NULL, NULL, NULL, NULL);
insert into words values ('1294', 'plankton', 'plankton', 'A fictional character in the Nickelodeon animated television series SpongeBob SquarePants.', '0', 'character', '2', '1', '16', '0', '0', '100', '0', NULL, NULL, NULL, NULL);`

const dataImport = data.split('\n')


const db = SQLite.openDatabase({ name: 'rnsqlite', }, openCB, errorCB);
const App = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  console.log("🚀 ~ file: App.tsx ~ line 513 ~ App ~ categories", categories)

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `
        CREATE TABLE IF NOT EXISTS words (
          id smallint(6) DEFAULT NULL,
          Field2 varchar(20) DEFAULT NULL,
          answer varchar(20) DEFAULT NULL,
          hint text,
          Field5 tinyint(4) DEFAULT NULL,
          type varchar(11) DEFAULT NULL,
          Field7 tinyint(4) DEFAULT NULL,
          Field8 tinyint(4) DEFAULT NULL,
          Field9 tinyint(4) DEFAULT NULL,
          Field10 tinyint(4) DEFAULT NULL,
          Field11 tinyint(4) DEFAULT NULL,
          Field12 smallint(6) DEFAULT NULL,
          Field13 tinyint(4) DEFAULT NULL,
          Field14 varchar(0) DEFAULT NULL,
          Field15 varchar(0) DEFAULT NULL,
          Field16 varchar(0) DEFAULT NULL,
          Field17 varchar(0) DEFAULT NULL
        )
        `,
        [],
        (sqlTxn, res) => {
        },
        error => {
        },
      );
    });
  };


  const getCategories = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM words`,
        [],
        (sqlTxn, res) => {
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
            }

            setCategories(results);
          }
          if (res.rows.length === 0) {

            for (let i = 0; i < dataImport.length; i++) {
              db.transaction(txn => {
                txn.executeSql(
                  `${dataImport[i]}`,
                  [],
                  (sqlTxn, res) => {
                  },
                  error => {
                  },
                );
              });
            }
          }
        },
        error => {
        },
      );
    });
  };

  React.useEffect(() => {
    const func = async () => {
      await createTables();
      await getCategories();
    }
    func()
  }, []);

  return (
    <Routes />
  );
};

export default App;
