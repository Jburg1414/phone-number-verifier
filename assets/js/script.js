// var verifyphone=function(){
//     var phonenumber=document.getElementById("inputnumber").value
// fetch(`https://veriphone.p.rapidapi.com/verify?phone=${phonenumber}`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "veriphone.p.rapidapi.com",
// 		"x-rapidapi-key": "9fbbd5f392mshabbee8212399231p112230jsne35da2362a26"
// 	}
// })
// .then(response => {
//     return response.json()
// }).then(response => {
// 	console.log(response);
//     var html=` <article class="tile is-child notification is-primary">
//     <p class="subtitle">Phone Number:${response.international_number}</p>
//     <p class="subtitle">Local Number:${response.local_number}</p>
//     <p class="subtitle">Region:${response.phone_region}</p>
//     <p class="subtitle">Country:${response.country}</p>
//   </article>`
//   document.getElementById("information").innerHTML = html
// })
// .catch(err => {
// 	console.error(err);
// });
// }
// var verifybutton=document.getElementById("btn")
// verifybutton.addEventListener("click",verifyphone)

// aaac1f9216c8aaaa4df1f2799c00507f


var verifyphone=function(){
    var phonenumber=document.getElementById("inputnumber").value
fetch(`http://apilayer.net/api/validate?access_key=aaac1f9216c8aaaa4df1f2799c00507f&number=${phonenumber}`, {
    "method": "GET",
})
.then(response => {
    return response.json()
}).then(response => {
    console.log(response);
    var html= `<article class="title is-child notification is-primary">
    <p class="subtitle">Valid:${response.valid}</p>
    <p class="subtitle">Number:${response.number}</p>
    <p class="subtitle">Location:${response.location}</p>
    <p class="subtitle">Carrier:${response.carrier}</p>
    </article>`
    document.getElementById("information").innerHTML = html
})
.catch(err => {
    console.error(err);
});
};

var verifybutton=document.getElementById("btn");
verifybutton.addEventListener("click",verifyphone);

var location = $();

// function to get weather based on phone number region
var getWeather = function(location) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=8cab3bb02def5dd471eb0acffee86b41&units=imperial`;
    
    fetch(apiUrl)
    .then(function(response) {
        if (response.ok) {
            console.log(response)
            return response.json();
        };
    }) .then(function(data) {
        console.log(data);
    }) .catch(function(error) {
        console.log(error);
    })
};

// getWeather();
getWeather();