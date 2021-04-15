
import AbstractView from './abstract';

const createSiteMenuTemplate = (filters, films) => {
  return `<nav class="main-navigation">
    <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    ${filters.map((filter) => `<a href="${filter.href}" class="main-navigation__item">${filter.name}<span class="main-navigation__item-count">${films.filter(filter.predicate).length}</span></a>`).join(' ')}

    </div>
    <a href="#stats" class="main-navigation__additional main-navigation__additional--active">Stats</a>
  </nav>`;
};

export default class SiteMenuView extends AbstractView {
  constructor(filters, films) {
    super();
    this._films = films;
    this._filters = filters;
  }

  getTemplate() {
    return createSiteMenuTemplate(this._filters, this._films);
  }
}
