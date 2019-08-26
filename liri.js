require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require("axios");
var keys = require("./keys.js");
var bandsintown = require('bandsintown');
var spotify = new Spotify(keys.spotify);
var commandToBeExecuted = process.argv[2];
var userInput = process.argv[3];

if(commandToBeExecuted === "movie-this")
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
             // console.log("The movie's Rotten Tomatoes rating is : "+JSON.stringify(response.data.Ratings[1].Value));
            }
          );
    }
   
}
else if(commandToBeExecuted === "spotify-this-song")
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
else if(commandToBeExecuted === "concert-this")
{
    axios.get("https://rest.bandsintown.com/artists/"+userInput+"/events?app_id=codingbootcamp").then(
        function(response) {
            
          console.log("Venue name :"+" " +response.data[0].venue.name);
            console.log("Venue location:"+ " "+response.data[0].venue.city);
            console.log("Venue date :"+ " "+response.data[0].datetime);
        }
      );
}

// We then run the request with axios module on a URL with a JSON
