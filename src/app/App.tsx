import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Toolbar from './components/Toolbar/Toolbar';
import './styles/main.scss';
function App() {
  return (
    <main className="body">
      <header className="header">
        <Breadcrumbs />
        <Toolbar />
      </header>
      <h1 className="body__title">Пользователи</h1>
      {/* <Table />
      <Pagination />
      <Footer /> */}
    </main>
  );
}

export default App;
