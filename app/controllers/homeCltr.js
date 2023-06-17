const homeCltr = {};

homeCltr.welcome = (req, res) => {
    res.json({message: "Welcome to SoilCare"});
}

module.exports = homeCltr;