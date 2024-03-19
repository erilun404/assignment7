import express from "express"
import {nextGeneration} from "../data/characters.js";

const generationRouter = express.Router();

generationRouter.get('/', (req, res) =>
    res.render(
        "pages/nextgen",
        {
            pageTitle: "Next generation",
            text: "Space... The final frontier. These are the voyages of the starship Enterprise Its continuing mission, to explore strange new worlds. To seek out new life and new civilizations. To boldly go where no one has gone before.",
            characters: nextGeneration
         }
    )
)

generationRouter.get('/picard', (req, res) =>
    res.render(
        "pages/character",
        {
            pageTitle: "The master of the space!",
            character: nextGeneration[0]
         }
    )
)

generationRouter.get('/riker', (req, res) =>
    res.render(
        "pages/character",
        {
            pageTitle: "Number one of the space",
            character: nextGeneration[1]
         }
    )
)

export default generationRouter;