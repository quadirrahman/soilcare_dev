const accountCltr = {}

accountCltr.dashboard = (req, res) => {
    const user  = req.user
    res.json({ user: user });
}

module.exports = accountCltr