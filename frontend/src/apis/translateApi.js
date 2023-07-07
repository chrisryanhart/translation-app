import axios from "axios";

// Sample post request:
// Url https://translate.terraprint.co/translate with below data
// data = {
// 	"q": "name: African Hunting Dog. Badger, otter hunting. Terrier. 10 - 13 years. Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
// 	"source":"en",
// 	"target":"es"
// }

const baseTranslateUrl = 'https://translate.terraprint.co';


// Call external translate api
// error is returned through the try block
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