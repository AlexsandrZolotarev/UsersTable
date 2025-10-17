function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__body" aria-label="Ссылки футера">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#">Информация</a>
            </li>
            <li className="footer__item">
              <a href="#">Пользователи</a>
            </li>
            <li className="footer__item">
              <a href="#">Реклама</a>
            </li>
            <li className="footer__item">
              <a href="#">Условия</a>
            </li>
            <li className="footer__item">
              <a href="#">Политика Конфиденциальности</a>
            </li>
            <li className="footer__item">
              <a href="#">Поддержка</a>
            </li>
            <li className="footer__item">
              <a href="#">Клиенты</a>
            </li>
            <li className="footer__item">
              <a href="#">Настройки Куки</a>
            </li>
            <li className="footer__item">
              <a href="#">Главная</a>
            </li>
          </ul>
        </nav>
        <div className="footer__extra">
          <div className="footer__copyright">@test</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
