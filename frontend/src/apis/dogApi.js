import axios from "axios";

// https://translate.terraprint.co/translate
// {
// 	"q": "One day, I was walking at the mall when I saw a friend. I went to her and said hello.",
// 	"source":"en",
// 	"target":"es",
// 	"api_key": ""
// }

// https://api.thedogapi.com/v1/breeds

// https://api.thedogapi.com/v1/breeds/263

// {
// 	"weight": {
// 		"imperial": "8 - 15",
// 		"metric": "4 - 7"
// 	},
// 	"height": {
// 		"imperial": "Varies",
// 		"metric": "Varies"
// 	},
// 	"id": 263,
// 	"name": "Yorkipoo",
// 	"breed_group": "Mixed",
// 	"life_span": "15 years"
// }

// {
//   "id": 2,
//   "name": "Afghan Hound",
//   "weight": " 50 to 60 pounds",
//   "height": "25 to 27 inches at the shoulder",
//   "life_span": "10 to 13 years",

//   "breed_group": "Hound"
// }

// optional:
// "bred_for": "Coursing and hunting",
// "country_code": "AG",
// "origin": "Germany, France",
// "temperament": "Tenacious, Keen, Energetic, Responsive, Alert, Intelligent",
// "reference_image_id": "sGQvQUpsp"



// My characteristics
//   "name": "Afghan Hound",
//   "weight": " 50 to 60 pounds",
//   "height": "25 to 27 inches at the shoulder",
//   "life_span": "10 to 13 years",
// "origin": "Germany, France",
// "temperament": "Tenacious, Keen, Energetic, Responsive, Alert, Intelligent",


const baseDogUrl = 'https://api.thedogapi.com/v1';

async function getDog(data){
  try{
    let res = await axios.get(`${baseDogUrl}/breeds/${data.dogId}`)

    return res;
  } catch(error){
    
    return error;
  }
}