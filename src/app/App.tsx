import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Footer from './components/Footer/Footer';
import UsersPage from './pages/UsersPage/UsersPage';
import './styles/main.css';
function App() {
  return (
    <>
      <header className="header container">
        <Breadcrumbs />
      </header>
      <main>
        <UsersPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
