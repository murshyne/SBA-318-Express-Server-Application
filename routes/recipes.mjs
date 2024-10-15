import express from "express";
const router = express.Router();

// In-memory data store
let recipes = [];

// GET all recipes
router.get("/", (req, res) => {
   console.log("Rendering index with recipes:", recipes);
  res.render("index", { recipes });
});

// GET new recipe form
router.get("/new", (req, res) => {
  res.render("new");
});

// POST create a new recipe
router.post("/", (req, res) => {
  const { title, ingredients, instructions, cookingTime } = req.body;
  const newRecipe = {
    id: recipes.length + 1,
    title,
    ingredients,
    instructions,
    cookingTime,
  };
  recipes.push(newRecipe);
  res.redirect("/recipes");
});

// GET edit recipe form
router.get("/edit/:id", (req, res) => {
  const recipe = recipes.find((r) => r.id == req.params.id);
  if (recipe) {
    res.render("edit", { recipe });
  } else {
    res.status(404).send("Recipe not found");
  }
});

// POST update a recipe
router.post("/edit/:id", (req, res) => {
  const recipe = recipes.find((r) => r.id == req.params.id);
  if (recipe) {
    const { title, ingredients, instructions, cookingTime } = req.body;
    recipe.title = title;
    recipe.ingredients = ingredients;
    recipe.instructions = instructions;
    recipe.cookingTime = cookingTime;
    res.redirect("/recipes");
  } else {
    res.status(404).send("Recipe not found");
  }
});

// DELETE a recipe
router.post("/delete/:id", (req, res) => {
  recipes = recipes.filter((r) => r.id != req.params.id);
  res.redirect("/recipes");
});

// Export the router as default
export default router; // Use ES Module export
