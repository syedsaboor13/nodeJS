

// HTTP MEthods and Its Status Code
/*

Https methods tell the server what action client wants to perform.

1 GET 
* Used to fetch data
* No body
* Safe & idenpotent
Example: Get a list of users

2.POST
* Used to create something
* Sends data in boby
Example: Resgister a new user

3. PUT
* Used to replace/update full record
* Idenpotent (same request = same result)
Example: Update entrie user data

4.PATCh
* Used to update partially
* Modify only selected fields
Example: Upsate only user's name

5.DELETE
* Remove a resource
Example: Delete user by id

6.OPTIONS
* Used in CORS
* Browser checks what methods are allowed


-----Status CODES-----


Common HTTP status Codes (with quick meaning)

1xx - Informational
* 100 continue => Server ready for request boby
* 101 Switching Protocols => Upgrading to WebSocket

2xx - Success
*200 OK => Request successful
*201 Created => New resource created(POST)
*202 Accepted => Processing but not completed
*204 No Content => Success but no response boby (DELETE/PUT)

3xx - Redirection
*301 Moved Permanently => New URL
*302 Found (temporary Redirect)
*204 Not Modified => Use cached content

4xx - Client Errors
*400 Bad Request => Wrong input/body
*401 Unauthorized => No/Invalid token
*403 Forbidden => You are not allowed
*404 Not Found => Resources not found
*405 Methods Not Allowed => Wronge HTTP methods
*409 Confilict => Duplicate record/ data confilict
*429 Too Many Requests => Rate limit exceeded 

5. 5xx - Server Errors
    - 500 Internal Server Error -> Something crashed
    - 501 Not implemented -> Method not supported
    - 502 Bad Gateway -> Server upstream failed
    - 503 Service Unavailable -> Server down/overloaded
    - 504 Gateway Timedout -> Upstream took too long


*/

// async function apicall() {
//     try {
//         let output = await fetch ("https://ai.suhail.app")
//         let responce = await output.json()
//         console.log(responce);
//     } catch (error) {
//         console.log(error);
//     }
// }
// apicall()


import axios from "axios";

async function apicall() {
    try {
        let response = await axios.get("https://ai.suhail.app")
        console.log(response,data);  
        
    } catch (error) {
        console.log(error);
    }
}

apicall()