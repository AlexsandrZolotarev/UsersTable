import TableCell from './TableCell';
import Dropdown from '../Dropdown/Dropdown';

import ActionButton from '../ActionButton/ActionButton';
function TableRow() {
  return (
    <tr className="table__row">
      <TableCell header>
        13619
        <ActionButton />
      </TableCell>
      <TableCell>Админ</TableCell>
      <TableCell>Александр</TableCell>
      <TableCell>someDesigner</TableCell>
      <TableCell>
        <Dropdown />
      </TableCell>
      <TableCell>@test</TableCell>
      <TableCell>test@test.ru</TableCell>
      <TableCell>+7 9999999999</TableCell>
      <TableCell>Нижний Новгород</TableCell>
    </tr>
  );
}

export default TableRow;
