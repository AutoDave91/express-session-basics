//Pretend this is a database:
const users = [
  { username: "Sandra", password: "1234", id: 1, isAdmin: true },
  { username: "PB", password: "cute", id: 2, isAdmin: false }
];

let id = 2; //this is like the primary key that has auto increment
let isAdmin = false //All users automatically are not admin unless I change this in my database

module.exports = {
  ///A user will register first. This is when we add their user info to the database.
  register: (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password, isAdmin });
    id++;
    res.status(200).send('Registration successful. Please Log in');
    console.log(users);
  },

  //This is one place that it makes sense to initialize a session and specify what properties we want on our req.session object
  
  login: (req, res) => {
    const { username, password } = req.body;
    const user = users.find(
      user => user.username === username && user.password === password
    );
    console.log(user)
    ///
    req.session.user = {
      username: username,
      password: password,
      cart: [],
      total: 0.0,
      id: id,
      isAdmin: user.isAdmin
    };
    ///
    if (user) {
      res.status(200).send(req.session.user);
      console.log(req.session.user)
    } else {
      res.status(400).send("No user found. Please register first.");
    }
  },

//Use this to get the session user object throughout your application
  getUser: (req, res) => {
    if (req.session.user) {
      res.json(req.session.user);
    } else {
      res.status(401).json({ error: "Please log in" });
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send(req.session);
  },
};
