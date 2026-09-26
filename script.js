const recipePages = [
  "/recipes/lasagna.html",
  "/recipes/cinnamonroll.html",
  "/recipes/mac.html",
  "/recipes/cake.html",
  "/recipes/froggy.html",
  "/recipes/pie.html",
];

document.getElementById("random-recipe-btn").addEventListener("click", (e) => {
  const choices = recipePages.filter(
    (page) => page !== window.location.pathname,
  );
  const randomPage = choices[Math.floor(Math.random() * choices.length)];
  window.location.href = randomPage;
});
