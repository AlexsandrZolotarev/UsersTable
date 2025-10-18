import React, { useRef, useState } from 'react';
import Check from '../../icons/check.svg';
import Arrow from '../../icons/ArrowDropDown.svg';

function Dropdown() {
  const [close, setClose] = useState(false);
  const listRef = useRef<HTMLUListElement | null>(null);
  const handleClick = () => {
    if (!listRef.current) return;

    if (close) {
      listRef.current.style.display = 'none';
    } else {
      listRef.current.style.display = 'block';
    }

    setClose((prev) => !prev);
  };
  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown__button"
        aria-haspopup="listbox"
        aria-expanded="true"
        onClick={handleClick}
      >
        Дизайнер
        <img src={Arrow} alt="" aria-hidden="true" className="dropdown__icon" />
      </button>

      <ul ref={listRef} role="listbox" aria-label="Выбор должности" className="dropdown__menu">
        <li role="option" aria-selected="true">
          <img src={Check} alt="" aria-hidden="true" className="dropdown__check" />
          Дизайнер
        </li>
        <li role="option">
          <img src={Check} alt="" aria-hidden="true" className="dropdown__check" />
          Front End разработчик
        </li>
        <li role="option">
          <img src={Check} alt="" aria-hidden="true" className="dropdown__check" />
          Back End разработчик
        </li>
        <li role="option">
          <img src={Check} alt="" aria-hidden="true" className="dropdown__check" />
          Front End разработчик
        </li>
        <li role="option">
          <img src={Check} alt="" aria-hidden="true" className="dropdown__check" />
          Back End разработчик
        </li>
        <li role="option">
          <img src={Check} alt="" aria-hidden="true" className="dropdown__check" />
          Front End разработчик
        </li>
        <li role="option">
          <img src={Check} alt="" aria-hidden="true" className="dropdown__check" />
          Back End разработчик
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
