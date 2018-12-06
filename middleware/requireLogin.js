module.exports = (req, res, next) => {
    if (!req.user) {
        console.log("You must login Dude!!: " + req.session);
        return res.status(401).send({error: "You must login!!"});
    }
    next();
}