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



const baseTranslateUrl = 'https://translate.terraprint.co';

export async function translateText(text, language){
  try{

    const data = {"q": text, "source": "en", "target":`${language}`};
    const headers = {'Content-Type': 'application/json'};

    let res = await axios.post(`${baseTranslateUrl}/translate`,data, {headers: headers});
    return res;
  } catch(error){
    
    return error;
  }
}