import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Toolbar from './components/Toolbar/Toolbar';
import './styles/main.scss';
function App() {
  return (
    <main>
      <header className="header container">
        <Breadcrumbs />
      </header>
      <section aria-labelledby="users" className="users">
        <div className="users__main">
          <div className="users__body">
            <div className="users__header container">
              <h1 className="users__title" id="users">
                Пользователи
              </h1>
              <Toolbar />
            </div>
            <div className="hero__body-inner">
              {/* <Table />
              <Pagination /> */}
            </div>
          </div>
        </div>
      </section>

      {/* <Footer/> */}
    </main>
  );
}

export default App;
