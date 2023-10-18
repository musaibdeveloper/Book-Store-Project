import Express from "express";



let router = Express();

router.get("/allbooks", (req, res) => {
    res.send("All books are here.")
})

router.post("/addbook", (req, res) => {
    res.send("Book added")
});


export default router();