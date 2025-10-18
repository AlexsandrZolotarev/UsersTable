import React from 'react';

interface TableCellProps {
  header?: boolean;
  children: React.ReactNode;
}

function TableCell({ header = false, children }: TableCellProps) {
  const Tag = header ? 'th' : 'td';

  return (
    <Tag scope={header ? 'row' : undefined} className="table__cell">
      {children}
    </Tag>
  );
}

export default TableCell;
