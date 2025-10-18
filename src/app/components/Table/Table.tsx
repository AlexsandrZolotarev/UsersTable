import React from 'react';
import TableHead from './TableHeader';
import TableRow from './TableRow';

function Table() {
  return (
    <table className="table" id="users-table" aria-label="Пользователи">
      <colgroup>
        <col style={{ width: '104px' }}></col>
        <col style={{ width: '140px' }}></col>
        <col style={{ width: '172px' }}></col>
        <col style={{ width: '182px' }}></col>
        <col style={{ width: '182px' }}></col>
        <col style={{ width: '182px' }}></col>
        <col style={{ width: '182px' }}></col>
        <col style={{ width: '182px' }}></col>
        <col style={{ width: '182px' }}></col>
      </colgroup>
      <TableHead />
      <tbody className="table__body">
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  );
}

export default Table;
