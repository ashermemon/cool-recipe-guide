const recipePages = [
  "lasagna.html",
  "cinnamonroll.html",
  "mac.html",
  "cake.html",
  "soup.html",
  "pie.html",
];

// recipe pages live in /recipes, so links from the home page need that folder prefix
const onRecipePage = window.location.pathname.includes("/recipes/");

document.getElementById("random-recipe-btn").addEventListener("click", (e) => {
  const choices = recipePages.filter(
    (page) => !window.location.pathname.endsWith("/recipes/" + page),
  );
  const randomPage = choices[Math.floor(Math.random() * choices.length)];
  window.location.href = onRecipePage ? randomPage : "recipes/" + randomPage;
});
