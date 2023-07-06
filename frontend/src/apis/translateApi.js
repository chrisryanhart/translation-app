import axios from "axios";

// https://translate.terraprint.co/translate
// {
// 	"q": "name: African Hunting Dog. Badger, otter hunting. Terrier. 10 - 13 years. Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
// 	"source":"en",
// 	"target":"es"
// }
// {
// "id": 4,
// "name": "Airedale Terrier",
// "bred_for": "Badger, otter hunting",
// "breed_group": "Terrier",
// "life_span": "10 - 13 years",
// "temperament": "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
// "origin": "United Kingdom, England",
// "reference_image_id": "1-7cgoZSh"
// }

const baseTranslateUrl = 'https://translate.terraprint.co/translate';

async function translateText(data){
  try{
    let res = await axios.post(`${baseTranslateUrl}/translate`,data = {text: data.text});
    return res;
  } catch(error){
    
    return error;
  }
}