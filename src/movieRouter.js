import express from "express";
import routes from "../src/routes"

import {
    home,
    getAdd,
    postAdd,
    movieDetail,
    getEdit,
    postEdit,
    deleteMovie,
    search
} from "../src/movieController"

// Add your magic here!

const movieRouter = express.Router();

movieRouter.get(routes.search, search);
movieRouter.get(routes.home,home);

movieRouter.get(routes.add,getAdd);
movieRouter.post(routes.add,postAdd);

movieRouter.get(routes.detail(),movieDetail);





movieRouter.get(routes.editMovie(),getEdit);
movieRouter.post(routes.editMovie(),postEdit);

movieRouter.get(routes.deleteMovie(),deleteMovie);




export default movieRouter;
