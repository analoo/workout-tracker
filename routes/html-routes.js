
module.exports = function (app) {
    app.get("/", (req,res) => {
        res.sendFile(__dirname+"/index.html")
    });

    app.get("/stats", (req,res) => {
        res.sendFile(__dirname+"/stats.html")
    })

    app.get("/exercise", (req,res) => {
        res.sendFile(__dirname+"/exercise.html")
    })

}