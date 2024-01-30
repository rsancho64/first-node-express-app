import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "1st Node Website" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About 1st Node Website" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Pagina de contacto" });
});

export default router;
