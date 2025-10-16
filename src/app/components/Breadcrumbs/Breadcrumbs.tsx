function Breadcrumbs() {
  return (
    <>
      <nav aria-label="breadcrumb" className="header__breadcrumb">
        <ol className="header__list">
          <li className="header__item">
            <a href="#" className="header__item-link">
              Данные
            </a>
          </li>
          <li aria-current="page" className="header__item-link header__item_active">
            Пользователи
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumbs;
