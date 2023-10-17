import previewView from './previewView.js';
import View from './view.js';

class bookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');

  _generateMarkup() {
    if (this._data.length)
      return this._data
        .map(bookmark => previewView.render(bookmark, false))
        .join('');
    else {
      return this.renderMessage(
        'No bookmarks yet. Find a nice recipe and bookmark it.',
        false
      );
    }
  }

  addHandlerBookmarks(handler) {
    window.addEventListener('load', handler);
  }
}

export default new bookmarksView();
