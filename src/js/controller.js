import * as model from './model.js';
import RecipeView from './views/recipeView.js';
import SearchView from './views/searchView.js';
import ResultsView from './views/resultsView.js';
import resultsView from './views/resultsView.js';
import PaginationView from './views/paginationView.js';
import addRecipeView from './views/addRecipeView.js';
import bookmarksView from './views/bookmarksView.js';
import { MODAL_CLOSE_SEC } from './config.js';
// Temproary because of Parcel Bug

// imports 2
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';

const controlRecipes = async function () {
  try {
    // 1.Get Recipe ID
    const id = window.location.hash.slice(1);
    if (!id) return;

    // 2.Render Spinner
    RecipeView.renderSpinner();

    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    // 3.Load Recipe
    await model.loadRecipe(id);
    // 4.Render Recipe
    RecipeView.render(model.state.recipe);
  } catch (err) {
    // 1.Render Error
    RecipeView.renderError(err.message);
  }
};

const controlSearchResults = async function () {
  try {
    // Get Search Query
    const query = SearchView.getQuery();
    if (!query) return;

    ResultsView.renderSpinner();
    // 2. Load Search Results
    await model.loadSearchResults(query);

    // 3. Render Search Results
    ResultsView.render(model.getSearchResultsPage());
    PaginationView.render(model.state.search);
  } catch (err) {
    ResultsView.renderError(err.message);
  }
};

const controlPagination = function (goto) {
  ResultsView.render(model.getSearchResultsPage(goto));
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update servings in the state
  model.updateServings(newServings);
  // render new recipe data
  RecipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  RecipeView.update(model.state.recipe);
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlRecipeUpload = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();

    await model.uploadRecipe(newRecipe);

    RecipeView.render(model.state.recipe);

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
  RecipeView.addHandlerRender(controlRecipes);
  RecipeView.addHandlerUpdateServings(controlServings);
  RecipeView.addHandlerAddBookmark(controlAddBookmark);
  SearchView.addHandlerSearch(controlSearchResults);
  PaginationView.addHandlerPagination(controlPagination);
  addRecipeView.addHandlerUpload(controlRecipeUpload);
};

init();
