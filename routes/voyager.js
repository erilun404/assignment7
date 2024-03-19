import express from "express"
import {voyager} from "../data/characters.js"

const voyagerRouter = express.Router();

voyagerRouter.get('/', (reg, res) =>
    res.render(
        "pages/voyager",
        {
            pageTitle: "Voyager",
            text: "Space... the final frontier. These are the voyages of the Starship Enterprise. Its five year mission. To explore strange new worlds. To seek out new life. And new civilizations. To boldly go where no man has gone before",
            characters: voyager
        }    
    )
)

voyagerRouter.get('/janeway', (req, res) => 
    res.render(
        "pages/character",
        {
            pageTitle: "The captain of Voyager ",
            character: voyager[0],
        }
    )
)

voyagerRouter.get('/of%20nine', (req, res) =>
        res.render(
            "pages/character",
        {
            pageTitle: "A former borg!",
            character: voyager[1]
        }    
    )
)

export default voyagerRouter;