const axios = require('axios');
const prompt = require('prompt');
const api = process.env.MEETUP_API_KEY;


function getMeetup(category){
axios.get(`https://api.meetup.com/find/events?text=${category}&key=${api}&sign=true`)
.then(function (response) {
    const events = response["data"];
    events.forEach( (event) => {
        console.log('Event:' + event.name);
        if (event.venue) {
          console.log(event.venue.address_1);
        }
        // console.log(event.venue);
        console.log('Description:' + event.description);
        console.log('-----------------------------------------------------------');
        // console.log(event.venue.city);
        // console.log(event.group);
    });

})
.catch(function (error) {
  console.log("error");
    console.log(error);
  });
}
 console.log('Find an event!');

 prompt.start();

 prompt.get(['category'], function (err, result) {
   // Log the results.
   console.log('category: ' + result.category);
   getMeetup(result.category);
 });
console.log(process.env);
