require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var bandsintown = require('bandsintown');
var spotify = new Spotify(keys.spotify);
var commandToBeExecuted = process.argv[2];
var userInput = process.argv[3];
function  concertSearch()
{
  console.log(userInput);
    axios.get("https://rest.bandsintown.com/artists/"+userInput+"/events?app_id=codingbootcamp").then(
      
        function(response) {
            
          console.log("Venue name :"+" " +response.data[0].venue.name);
            console.log("Venue location:"+ " "+response.data[0].venue.city);
            console.log("Venue date :"+ " "+response.data[0].datetime);
        }
      );
}
function movieSearch()
{
    if(!userInput)
    {
        axios.get("http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=trilogy").then(
            function(response) {
              // Then we print out the imdbRating
              console.log("The movie's IMDB rating is: " + response.data.imdbRating);
              console.log("The movie's Title is : "+response.data.Title);
              console.log("The movie's Releasing Year is : "+response.data.Year);
              console.log("The movie's Country of origin is : "+response.data.Country);
              console.log("The movie's Language is : "+response.data.Language);
              console.log("The movie's Plot is : "+response.data.Plot);
              console.log("The movie's Actors are : "+response.data.Actors);
              //console.log("The movie's Rotten Tomatoes rating is : "+JSON.stringify(response.data.Ratings[1].Value));
            }
          );
    }
    else 
    {
        axios.get("http://www.omdbapi.com/?t="+userInput+"&y=&plot=short&apikey=trilogy").then(
            function(response) {
              // Then we print out the imdbRating
              console.log("The movie's IMDB rating is: " + response.data.imdbRating);
              console.log("The movie's Title is : "+response.data.Title);
              console.log("The movie's Releasing Year is : "+response.data.Year);
              console.log("The movie's Country of origin is : "+response.data.Country);
              console.log("The movie's Language is : "+response.data.Language);
              console.log("The movie's Plot is : "+response.data.Plot);
              console.log("The movie's Actors are : "+response.data.Actors);
             console.log("The movie's Rotten Tomatoes rating is : "+JSON.stringify(response.data.Ratings[1].Value));
            }
          );
    }
   
}
function spotifySearch()
{
    if(!userInput)
    {
        spotify
        .search({ type: 'track', query: 'The Sign' })
        .then(function(response) {
            for(var i=0;i<response.tracks.items.length;i++)
            {
                for(var j=0;j<response.tracks.items[i].album.artists.length;j++)
                {
                  console.log(JSON.stringify(response.tracks.items[i].album.artists[j].name));
                }
              
              console.log(JSON.stringify(response.tracks.items[i].album.artists[0].external_urls.spotify));
              console.log(JSON.stringify(response.tracks.items[i].name));
              console.log("==========");
            }
          
        })
        .catch(function(err) {
          console.log(err);
        });
    }
    else
    {
        spotify
        .search({ type: 'track', query: userInput })
        .then(function(response) {
            for(var i=0;i<response.tracks.items.length;i++)
            {
                for(var j=0;j<response.tracks.items[i].album.artists.length;j++)
                {
                  console.log(JSON.stringify(response.tracks.items[i].album.artists[j].name));
                }
              
              console.log(JSON.stringify(response.tracks.items[i].album.artists[0].external_urls.spotify));
              console.log(JSON.stringify(response.tracks.items[i].name));
              console.log("==========");
            }
          
        })
        .catch(function(err) {
          console.log(err);
        });
    }
}
if(commandToBeExecuted === "movie-this")
{
   movieSearch();
}
else if(commandToBeExecuted === "spotify-this-song")
{
    
    spotifySearch();
    
}
else if(commandToBeExecuted === "concert-this")
{
    concertSearch();
}
else if(commandToBeExecuted === "do-what-it-says")
{
    fs.readFile("random.txt", "utf8", function(error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
          return console.log(error);
        }
      
        // We will then print the contents of data
        console.log(data);
      
        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");
      commandToBeExecuted = dataArr[0];
      userInput=dataArr[1];
      if(commandToBeExecuted === "movie-this")
        {
            movieSearch();
        }
        else if(commandToBeExecuted === "spotify-this-song")
        {
    
             spotifySearch();
    
        }
        else if(commandToBeExecuted === "concert-this")
        {
             concertSearch();
        }
        // We will then re-display the content as an array for later use.
        console.log(dataArr);
      
      });
}

fs.appendFile("log.txt",commandToBeExecuted+" "+userInput + "\n", function(err) {

  // If an error was experienced we will log it.
  if (err) {
    console.log(err);
  }

  // If no error is experienced, we'll log the phrase "Content Added" to our node console.
  else {
    console.log("Content Added!");
  }

});
