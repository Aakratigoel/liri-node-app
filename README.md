# liri-node-app
LIRI stands for Language Interpretation and Recognition Interface , It is similar to SIRI, as in SIRI, S stands for sound and SIRI carries out searches based on the sound that it listens and interprets , LIRI carries out searches based on the commands that are given in command line arguments.

This app works for the following 4 commands :

1. movie-this : movie-this command followed by a movie name will hit the OMDB api and returns the movie data like :
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
   
2. concert-this : concert-this command followed by an artist or band name will hit the bandsintown api and will return the follwing data:
* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")

3. spotify-this-song: spotify-this-song command followed by the song name will hit the spotify api and will return the following data:
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from

4. do-what-it-says: do-what-it-says command will read the default command and value associated with it from the file random.txt and executes that default command .

Also, as the commands are executed, command and its value is stored or logged into a file name called log.txt, so as to keep track of the commands that have been executed.


 Link to the screenshots of the app execution:
 https://github.com/Aakratigoel/liri-node-app/tree/master/LIRI_commands_screenshots
