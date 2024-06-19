const router = require("express").Router();
const {test, all, add, update, del, one}= require("../controller/emp");

// router.use("/",require("../controller/emp"));

router.get("/",test);
router.get("/all",all);
router.get("/:id",one);
router.post("/add",add);
router.put("/update/:id",update);
router.delete("/delete/:id",del);


module.exports = router;