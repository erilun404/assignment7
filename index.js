import express from "express";
import generationRouter from "./routes/nextgen.js";
import voyagerRouter from "./routes/voyager.js";

import * as path from "path";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.resolve();

app.get("/", (req, res) => {
    res.render("pages/home",
    {
        pageTitle: "Welcome to my Star trek page, assignmentA7",
        text: "Star Trek, American television science-fiction series that ran on NBC for only three seasons (1966–69) but that became one of the most popular brands in the American entertainment industry. Star Trek was created by American writer and producer Gene Roddenberry"
    }
    )
});

app.use("/nextgen", generationRouter);
app.use("/voyager", voyagerRouter);

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
    console.log(`Express is listen on port ${port}`)
})

