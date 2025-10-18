import React from 'react';

import Arrow from '../../icons/arrow-down.svg';
import ArrowUp from '../../icons/arrow-up.svg';
import Info from '../../icons/information-circle.svg';
function TableHead() {
  return (
    <thead className="table__header">
      <tr className="table__list">
        <th scope="row" className="table__item">
          <div className="table__item-cell">
            <button type="button" className="table__item-btn" aria-label="Сортировать по ID">
              <img src={ArrowUp} alt="" aria-hidden="true" className="table__item-icon" />
              <span className="table__item-label">ID</span>
            </button>
          </div>
        </th>
        <th scope="row" className="table__item">
          <div className="table__item-cell">
            <button
              type="button"
              className="table__item-btn"
              aria-label="Сортировать по роли (по возрастанию)"
            >
              <img src={Arrow} alt="" aria-hidden="true" className="table__item-icon " />
              <span className="table__item-label">Роль</span>
            </button>
            <button type="button" className="table__item-info" aria-label="Подробнее о поле 'Роль'">
              <img src={Info} alt="" aria-hidden="true" className="table__item-info--icon" />
            </button>
          </div>
        </th>
        <th scope="row" className="table__item">
          <div className="table__item-cell">
            <button type="button" className="table__item-btn" aria-label="Сортировать по имени">
              <span className="table__item-label">Имя</span>
              <img src={Arrow} alt="" aria-hidden="true" className="table__item-icon  " />
            </button>
          </div>
        </th>
        <th scope="row" className="table__item">
          <div className="table__item-cell">
            <button type="button" className="table__item-btn" aria-label="Сортировать по логину">
              <span className="table__item-label">Логин</span>
              <img src={Arrow} alt="" aria-hidden="true" className="table__item-icon  " />
            </button>
          </div>
        </th>
        <th scope="row" className="table__item">
          <div className="table__item-cell">
            <button type="button" className="table__item-btn" aria-label="Сортировать по должности">
              <span className="table__item-label">Должность</span>
              <img src={Arrow} alt="" aria-hidden="true" className="table__item-icon  " />
            </button>
          </div>
        </th>
        <th scope="row" className="table__item">
          <div className="table__item-cell">
            <button type="button" className="table__item-btn" aria-label="Сортировать по контакту">
              <span className="table__item-label">Контакты</span>
              <img src={Arrow} alt="" aria-hidden="true" className="table__item-icon  " />
            </button>
          </div>
        </th>
        <th scope="row" className="table__item">
          <div className="table__item-cell">
            <button type="button" className="table__item-btn" aria-label="Сортировать по почте">
              <span className="table__item-label">Почта</span>
              <img src={Arrow} alt="" aria-hidden="true" className="table__item-icon  " />
            </button>
          </div>
        </th>
        <th scope="row" className="table__item">
          <div className="table__item-cell">
            <button type="button" className="table__item-btn" aria-label="Сортировать по телефону">
              <span className="table__item-label">Телефон</span>
              <img src={Arrow} alt="" aria-hidden="true" className="table__item-icon  " />
            </button>
          </div>
        </th>
        <th scope="row" className="table__item">
          <div className="table__item-cell">
            <button type="button" className="table__item-btn" aria-label="Сортировать по городу">
              <span className="table__item-label">Город</span>
              <img src={Arrow} alt="" aria-hidden="true" className="table__item-icon  " />
            </button>
          </div>
        </th>
      </tr>
    </thead>
  );
}

export default TableHead;
