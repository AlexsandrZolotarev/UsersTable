import React from 'react';
import Options from '../../icons/Options.svg';

function ActionButton() {
  return (
    <button type="button" aria-label="Дополнительные действия" className="table__row-options">
      <img src={Options} alt="" aria-hidden="true" />
    </button>
  );
}

export default ActionButton;
