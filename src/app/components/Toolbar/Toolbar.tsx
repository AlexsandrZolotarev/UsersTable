import Settings from '../../icons/Setting.svg';
import Filter from '../../icons/Filter.svg';
import Plus from '../../icons/Plus.svg';

function Toolbar() {
  return (
    <div className="toolbar" role="toolbar" aria-label="Действия со списком пользователей">
      <div className="toolbar__body">
        <div className="toolbar__actions" role="group" aria-label="Поиск и фильтры">
          <form role="search" aria-label="Поиск по пользователям" className="toolbar__form">
            <label htmlFor="search-users" className="visually-hidden">
              Поиск
            </label>
            <input
              type="search"
              id="search-users"
              name="search"
              placeholder="Найти пользователя"
              className="toolbar__form-search"
            />
          </form>

          <div className="toolbar__sep" role="separator" aria-orientation="vertical"></div>

          <button type="button" className="toolbar__actions-btn" aria-label="Настройки">
            <img src={Settings} alt="" aria-hidden="true" />
          </button>

          <button type="button" className="toolbar__actions-btn" aria-label="Фильтр">
            <img src={Filter} alt="" aria-hidden="true" />
          </button>
        </div>

        <button type="button" className="toolbar__button">
          <img src={Plus} alt="" aria-hidden="true" />
          Добавить пользователя
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
