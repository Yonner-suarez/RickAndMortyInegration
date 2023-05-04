const Router = require("express");
const { postFav, deleteFav } = require("../controllers/allControlers");

const RouterFav = Router();

RouterFav.post(
  "/",
  postFav

    // const { ide, name, species, gender, origin, image, onClose } = req.body;

    // try {
    //   const charsFavs = favorites({
    //     ide,
    //     name,
    //     species,
    //     gender,
    //     origin,
    //     image,
    //     onClose,
    //   });
    //   res.status(200).json(charsFavs);
    // } catch (error) {
    //   res.status(404).json({ error: error.message });
  //   }
);

RouterFav.delete(
  "/:id",
  deleteFav
  //   (req, res) => {
  //   const { id } = req.params;
  //   try {
  //     const del = deleteFav(id);
  //     res.status(200).json(del);
  //   } catch (error) {
  //     res.status(404).json({ err: error.message });
  //   }
  // }
);

module.exports = RouterFav;
