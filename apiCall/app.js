import axios from "axios";

async function apicall(){
    try {
        let response = await axios.get("https://ai.suhail.app/test")
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

apicall()