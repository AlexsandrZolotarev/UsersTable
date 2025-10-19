import React from 'react';
import ArrowLeft from '../../icons/ArrowPaginationLeft.svg';
import ArrowRight from '../../icons/ArrowPaginationRight.svg';
export default function Pagination() {
  return (
    <nav className="pager" aria-label="Пагинация">
      <ul className="pager__list">
        <li className="pager__item">
          <button className="pager__btn " aria-label="Предыдущая" disabled>
            <img src={ArrowLeft} alt="" aria-hidden="true"></img>
          </button>
        </li>

        <li className="pager__item">
          <button
            className="pager__btn pager__btn--active "
            aria-label="Страница 1"
            aria-current="page"
          >
            1
          </button>
        </li>

        <li className="pager__item">
          <button className="pager__btn" aria-label="Страница 2">
            2
          </button>
        </li>

        <li className="pager__item">
          <button className="pager__btn" aria-label="Страница 3">
            3
          </button>
        </li>

        <li className="pager__item">
          <button className="pager__btn" aria-label="Страница 4">
            4
          </button>
        </li>

        <li className="pager__item">
          <button className="pager__btn" aria-label="Страница 5">
            5
          </button>
        </li>

        <li className="pager__item">
          <span className="pager__btn pager__btn--ellipsis" aria-hidden="true">
            …
          </span>
        </li>

        <li className="pager__item">
          <button className="pager__btn pager__btn--pages" aria-label="Страница 30000">
            30000
          </button>
        </li>

        <li className="pager__item">
          <button className="pager__btn pager__btn--arrow" aria-label="Следующая">
            <img src={ArrowRight} alt="" aria-hidden="true" />
          </button>
        </li>
      </ul>

      <div className="pager__footer">Показано 1–20 из 30 000 пользователей</div>
    </nav>
  );
}
