function e(e){return e&&e.__esModule?e.default:e}var t,r,n=globalThis,i={},a={},s=n.parcelRequire3a11;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},n.parcelRequire3a11=s),(0,s.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["gMAos","index.dee26a9a.js","lxeBv","icons.c14567a0.svg"]'));const o="https://forkify-api.herokuapp.com/api/v2/recipes/",c="c682ea3e-a484-48c6-aa40-e6d57d385544",d=function(e){return new Promise((t,r)=>{setTimeout(()=>{r(Error(`Request Took too long! Timeout after ${e} seconds`))},1e3*e)})},l=async function(e){try{// 1. Fetch Data
let t=await Promise.race([fetch(e),d(10)]);// 2. Throw Error on not 200 responses
if(!t.ok)throw Error("We could not find that recipe. Please try another one!");// 3. Jsonify response
let r=await t.json();// 4. Return data
return r}catch(e){throw e}},u=async function(e,t){try{let r=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await Promise.race([r,d(10)]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${i.status})`);return i}catch(e){throw e}},h={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},p=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},m=async function(e){// Fetch recipe data and handle data
try{let t=`${o}${e}?key=${c}`,r=await l(t);h.recipe=p(r),h.bookmarks.some(t=>t.id===e)?h.recipe.bookmarked=!0:h.recipe.bookmarked=!1}catch(e){throw e}},g=async function(e){// Fetch & Handle results`
try{h.search.query=e;let{data:t}=await l(`${o}?search=${e}&key=${c}`);if(0===t.recipes.length)throw Error("No recipes found for your query! Please try again.");h.search.page=1,h.search.results=t.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))}catch(e){throw e}},_=function(e=h.search.page){h.search.page=e;let t=(e-1)*h.search.resultsPerPage,r=e*h.search.resultsPerPage;return h.search.results.slice(t,r)},f=function(e){h.recipe.ingredients.forEach(t=>{t.quantity*=e/h.recipe.servings}),h.recipe.servings=e},v=function(){localStorage.setItem("bookmarks",JSON.stringify(h.bookmarks))},b=function(e){h.bookmarks.push(e),e.id===h.recipe.id&&(h.recipe.bookmarked=!0),v()},k=function(e){let t=h.bookmarks.findIndex(t=>t.id===e);h.bookmarks.splice(t,1),e===h.recipe.id&&(h.recipe.bookmarked=!1),v()};!function(){let e=localStorage.getItem("bookmarks");e&&(h.bookmarks=JSON.parse(e))}();const y=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format.");let[r,n,i]=t;return{quantity:+r?r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await u(`${o}?key=${c}`,r);h.recipe=p(n),b(h.recipe)}catch(e){throw e}};var w={};w=new URL("icons.c14567a0.svg",import.meta.url).toString();class E{render(e,t=!0){this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){// Update to new data
this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];r.isEqualNode(e)||r.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let t=`
        <div class="spinner">
          <svg>
            <use href="${/*@__PURE__*/e(w)}#icon-loader"></use>
          </svg>
        </div>
  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t,r=!0){let n=`
            <div class="error">
                <div>
                    <svg>
                        <use href="${/*@__PURE__*/e(w)}#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${t}</p>
            </div>
            `;if(!1===r)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}renderMessage(t,r=!0){let n=`
        <div class="message">
          <div>
            <svg>
              <use href="${/*@__PURE__*/e(w)}#icon-smile"></use>
            </svg>
          </div>
          <p>${t}</p>
        </div>
    `;if(!1===r)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}}/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*//* Fractions *//* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 *//*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */const $=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new $(r).add(new $(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var a=r.split("/");this.numerator=a[0],this.denominator=a[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new $(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()};$.prototype.clone=function(){return new $(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */$.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */$.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},$.prototype.add=function(e){var t=this.clone();return e=e instanceof $?e.clone():new $(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},$.prototype.subtract=function(e){var t=this.clone();return e=e instanceof $?e.clone():new $(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},$.prototype.multiply=function(e){var t=this.clone();if(e instanceof $)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new $(e));t.numerator*=e}return t.normalize()},$.prototype.divide=function(e){var t=this.clone();if(e instanceof $)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new $(e));t.denominator*=e}return t.normalize()},$.prototype.equals=function(e){e instanceof $||(e=new $(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */$.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(t(this.denominator)){var e=r(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),//this.numerator *= scaleup;
this.numerator*=n}if(t(this.numerator)){var e=r(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),//this.numerator *= scaleup;
this.denominator*=n}var i=$.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */$.gcf=function(e,t){var r=[],n=$.primeFactors(e),i=$.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
$.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
};class S extends E{_parentElement=document.querySelector(".recipe");_generateMarkup(){return`
    <figure class="recipe__fig">
          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/e(w)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/e(w)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${/*@__PURE__*/e(w)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${/*@__PURE__*/e(w)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/e(w)}#icon-user"></use>
            </svg>
          </div>

          
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${/*@__PURE__*/e(w)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/e(w)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>

    `}_generateMarkupIngredient(t){return console.log($),`
             <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${/*@__PURE__*/e(w)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${t.quantity?new $(t.quantity):""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${t.unit}</span>
                ${t.description}
              </div>
            </li>
            `}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--tiny");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}}var M=new S;class H{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var q=new H;class P{render(e,t=!0){this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){// Update to new data
this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];r.isEqualNode(e)||r.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let t=`
        <div class="spinner">
          <svg>
            <use href="${/*@__PURE__*/e(w)}#icon-loader"></use>
          </svg>
        </div>
  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t,r=!0){let n=`
            <div class="error">
                <div>
                    <svg>
                        <use href="${/*@__PURE__*/e(w)}#icon-alert-triangle"></use>
                    </svg>
                </div>
                <p>${t}</p>
            </div>
            `;if(!1===r)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}renderMessage(t,r=!0){let n=`
        <div class="message">
          <div>
            <svg>
              <use href="${/*@__PURE__*/e(w)}#icon-smile"></use>
            </svg>
          </div>
          <p>${t}</p>
        </div>
    `;if(!1===r)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}}var x=new class extends E{_generateMarkup(){let t=window.location.hash.slice(1);return`
        <li class="preview">
            <a class="preview__link ${this._data.id===t?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>

                <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                  <svg>
                    <use href="${/*@__PURE__*/e(w)}#icon-user"></use>
                  </svg>
                </div>

              </div>
            </a>
        </li>
    `}};class A extends P{_parentElement=document.querySelector(".results");_generateMarkup(){return this._data.map(e=>x.render(e,!1)).join("")}}var L=new A;class T extends E{_parentElement=document.querySelector(".pagination");_generateMarkup(){let e=Math.ceil(this._data.results.length/this._data.resultsPerPage),t=this._data.page;return 1===t&&e>1?this._generateNextPage():t===e&&e>1?this._generatePrevPage():t>1&&this._data.page<e?this._generatePrevPage()+this._generateNextPage():""}_generateNextPage(){return`
        <button data-goto="${this._data.page+1}" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.page+1}</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/e(w)}#icon-arrow-right"></use>
            </svg>
        </button>

    `}_generatePrevPage(){return`
        <button data-goto="${this._data.page-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/e(w)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page-1}</span>
        </button>
       `}addHandlerPagination(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}}var j=new T;class N extends E{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._window.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}}var O=new N;class R extends E{_parentElement=document.querySelector(".bookmarks__list");_generateMarkup(){return this._data.length?this._data.map(e=>x.render(e,!1)).join(""):this.renderMessage("No bookmarks yet. Find a nice recipe and bookmark it.",!1)}addHandlerBookmarks(e){window.addEventListener("load",e)}}var C=new R;// Temproary because of Parcel Bug
// imports 2
const F=async function(){try{// 1.Get Recipe ID
let e=window.location.hash.slice(1);if(!e)return;M.renderSpinner(),L.update(_()),C.update(h.bookmarks),// 3.Load Recipe
await m(e),M.render(h.recipe)}catch(e){M.renderError(e.message)}},U=async function(){try{// Get Search Query
let e=q.getQuery();if(!e)return;L.renderSpinner(),// 2. Load Search Results
await g(e),L.render(_()),j.render(h.search)}catch(e){L.renderError(e.message)}},W=async function(e){try{O.renderSpinner(),await y(e),M.render(h.recipe),O.renderMessage("Recipe uploaded successfully."),C.render(h.bookmarks),// change URL
window.history.pushState(null,"",`#${h.recipe.id}`),setTimeout(()=>{O.toggleWindow()},2e3)}catch(e){console.error(e),O.renderError(e.message)}};C.addHandlerBookmarks(function(){C.render(h.bookmarks)}),M.addHandlerRender(F),M.addHandlerUpdateServings(function(e){// Update servings in the state
f(e),M.update(h.recipe)}),M.addHandlerAddBookmark(function(){h.recipe.bookmarked?k(h.recipe.id):b(h.recipe),M.update(h.recipe),C.render(h.bookmarks)}),q.addHandlerSearch(U),j.addHandlerPagination(function(e){L.render(_(e)),j.render(h.search)}),O.addHandlerUpload(W);//# sourceMappingURL=index.dee26a9a.js.map

//# sourceMappingURL=index.dee26a9a.js.map
