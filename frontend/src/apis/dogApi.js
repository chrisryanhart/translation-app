import axios from "axios";

// Post route to https://api.thedogapi.com/v1/breeds/:id yields the below sample response data:
// {
// "name": "Afghan Hound",
// "weight": " 50 to 60 pounds",
// "height": "25 to 27 inches at the shoulder",
// "life_span": "10 to 13 years",
// "origin": "Germany, France",
// "temperament": "Tenacious, Keen, Energetic, Responsive, Alert, Intelligent",
// }


const baseDogUrl = 'https://api.thedogapi.com/v1';

// Call external dog api
// handle any errors received
export async function getDog(data){
  try{
    let res = await axios.get(`${baseDogUrl}/breeds/${data}`);

    return res;
  } catch(error){
    
    return error;
  }
}