import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Footer from './components/Footer/Footer';
import Pagination from './components/Pagination/Pagination';
import Table from './components/Table/Table';
import Toolbar from './components/Toolbar/Toolbar';
import './styles/main.css';
function App() {
  return (
    <>
      <header className="header container">
        <Breadcrumbs />
      </header>
      <main>
        <section aria-labelledby="users" className="users">
          <div className="users__main">
            <div className="users__body">
              <div className="users__header container">
                <h1 className="users__title" id="users">
                  Пользователи
                </h1>
                <Toolbar />
              </div>
              <div className="users__body-inner">
                <div className="users__table">
                  <Table />
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
