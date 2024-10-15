import express from "express";
import path from "path";
import recipeRoutes from "./routes/recipes.mjs";

// Create an instance of express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true })); // No need for body-parser, Express has it built in
app.use(express.json());
app.use(express.static(new URL("./public", import.meta.url).pathname)); // Use new URL for static files

// Set the view engine to Pug
app.set("view engine", "pug");
app.set("views", new URL("./views", import.meta.url).pathname); // Use new URL for views directory

console.log("Views directory:", new URL("./views", import.meta.url).pathname);


// Routes
app.use("/recipes", recipeRoutes);

// Home route
app.get("/", (req, res) => {
  res.redirect("/recipes");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running & listening on port ${PORT}`);
});
 