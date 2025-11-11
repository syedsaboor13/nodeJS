

// Intro NodeJS
/*

        The Beginning -2009, Ryan Dahl's Vision
In 2009 a sofware engineer named Ryan Dahl from the U.S created Node.js. 

At that time:

 > JavaScript was only used in browers
 > Servers were built using PHP, Python, or Java
 > Each request on the server would create a new thread. consuming memory and slowing things down under heavy load.
 
 Ryan found this inefficient, espeacially after seeing how web browsers handled asynchronous events (from blocking operators). 

 He wanted the same non-blocking behaviour in the server.
that's how NodeJS was born - to bring JavaScript to the backend but in a faster and more scalable way.

The Core idea - Event-Driven & Non-Blocking I/O 
ryan built Node.JS using
> Google's VS Engine (the same engine that powers chrome)
> libuv (a C library for asynchronous I/O)

This combination allowed Node.JS to:

> Handle many requests at once using a single thread
>Aviod blocking while waiting for tasks like file reading or dataBase querires

In Short:

Node.js introduced a single-threaded, event-driven architecture that made servers lightweight and fast.


Early Days (2009 - 2011)

> 2009: Node.js was-released at the JSConf EU conference.
> 2010: npm (Node Package Manager) was introduced - the game changer.
Developers could easily install and share reusable packages.
> 2011: Companies like Linkedlin and Uber started using Node.js for their backends due to its speed and scalability.

Example:
Linkedin moved from Ruby on Rails to Node.js and saw their serviers

Rise in Popularity (2012 - 2015)
Node.js rapidly become the go-to-choice for building:

> Api's
> Real-time application (chat, live updates)
> Commands-line tools
> Developer utilities

Big Companies joined:

> Netflix (for streaming)
> Paypal (for faster APIs)
> eBay, Walmart and NASA adopted Node.js in production.

However, around 2014, there was community tension -- development was slow and contributors were frustrated.


Today's Ecosystem

The node.js ecosystem is massive:
> Over 2 million+ packages on npm
> Used by 90% of modern web developers
> Foundation for frameworks like Express.js fastify and AdonisJS

it's no longer "just JavaScript on the server"
it's the backbone of the modern web. connecting API's microservers and tools.


Summary Timeline

year       Event

2009       ryan Dahl creates node.js
2010       npm (node Packages Manager) is launched
2011       Linkedin & Uber adopt Node.js
2014       io.js fork due to governance issues
2015       io.js merges back -> Node.js Foundation formed
2017+      Async/await ES modules and major improvements
2020s      Node.js becomes a global standard for web servers. 