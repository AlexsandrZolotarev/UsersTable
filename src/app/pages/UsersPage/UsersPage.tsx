import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import Table from '../../components/Table/Table';
import Pagination from '../../components/Pagination/Pagination';

function UsersPage() {
  return (
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
  );
}

export default UsersPage;
