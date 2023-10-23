import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import addRecipeView from './views/addRecipeView.js';
import bookmarksView from './views/bookmarksView.js';
import { MODAL_CLOSE_SEC } from './config.js';
// Temproary because of Parcel Bug

// imports 2
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlRecipes = async function () {
  try {
    // 1.Get Recipe ID
    const id = window.location.hash.slice(1);
    if (!id) return;

    // 2.Render Spinner
    recipeView.renderSpinner();

    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    // 3.Load Recipe
    await model.loadRecipe(id);
    // 4.Render Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    // 1.Render Error
    recipeView.renderError(err.message);
  }
};

const controlSearchResults = async function () {
  try {
    // Get Search Query
    const query = searchView.getQuery();
    if (!query) return;

    resultsView.renderSpinner();
    // 2. Load Search Results
    await model.loadSearchResults(query);

    // 3. Render Search Results
    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
  } catch (err) {
    resultsView.renderError(err.message);
  }
};

const controlPagination = function (goto) {
  resultsView.render(model.getSearchResultsPage(goto));
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update servings in the state
  model.updateServings(newServings);
  // render new recipe data
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  recipeView.update(model.state.recipe);
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlRecipeUpload = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();

    await model.uploadRecipe(newRecipe);

    recipeView.render(model.state.recipe);

    addRecipeView.renderMessage('Recipe uploaded successfully.');

    bookmarksView.render(model.state.bookmarks);

    // change URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerBookmarks(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerPagination(controlPagination);
  addRecipeView.addHandlerUpload(controlRecipeUpload);
};

init();
