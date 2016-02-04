import Cell from 'fixed-data-table';

const DateCell = (rowIndex, data, col, ...props) => (
  <Cell {...props}>
    {data.getObjectAt(rowIndex)[col].toLocaleString()}
  </Cell>
);

export default DateCell;
