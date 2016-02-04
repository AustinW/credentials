import Cell from 'fixed-data-table';

const LinkCell = (rowIndex, data, col, ...props) => (
  <Cell {...props}>
    <a href="#">{data.getObjectAt(rowIndex)[col]}</a>
  </Cell>
);
