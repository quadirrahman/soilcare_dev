
const usersCltr = {};

usersCltr.register = (req, res) => {
    res.json("Hello from Register user");
}

usersCltr.login = (req, res) => {
    res.json("Hello from Login user");
}

module.exports = usersCltr;
