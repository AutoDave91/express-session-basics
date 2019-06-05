//1. What is express-session?
//ANSWER:It is a middleware used for preserving certain data across subsequent accesses by the client. For example, login information, cart, and temporary settings.

//2. Why not just store this information in the database?
// ANSWER:By setting a temporary session, it provides a better experience to the user because they don't have go through the process of logging in every time or rethinking all the shopping choices they spent hours on yesterday before they got interrupted by something. 

//3. How does express session work? 
//ANSWER:Since http requests are annoymous between client and server, express-session helps to create an identifier to link the two by putting a cookie on the client browser which holds a session id. Then the next time that client makes a request to your server, sessions can connect specific data we hold in express-session memory to that specific user.

////4. What data is saved in the cookie?
// ANSWER: Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.  Express comes with a built-in session store called MemoryStore, which is the default. MemoryStore uses the application RAM for storing session data. 

//5. What are Session Variables?
///Session variables are those variables which you associate with a user session. These variables are independently set for each user and can be accessed on the session property of the request object – req.session. Examples:
    //req.session.username = username;

///6. How can we set up our session user object? Where do we do this?
//ANSWER: We can DEFINE the object with its properties when the user makes a request that we think would be appropriate for initializing a session. Usually this would be when the user logs in, so this would take place in the function in the controller for logging in. Another way would be to create our own MIDDLEWARE FUNCTION to check if a user exists and if it does not, it will initialize the session.

//7. What causes the session to begin?
//The client makes a request to the server. We are using app.use(session()), so this means we have session ready to go and as soon as a specific client makes their request, the middleware will be initialized. Then depending on the request, we can have the req.session.user object be created. WE have to say what the object will contain.

//8. When might we create our own middleware function, and how would we implement it? (Be sure to use .next() ) in your explanation.

//We could create one to check if a user has administrator privileges, which would determine where and what they can do on our site. We create a function that checks if the user is admin, and we place it inline between the endpoint and the controller callback function. We have to make sure to end the function with next() to make sure that the next function ( the controller callback) is invoked