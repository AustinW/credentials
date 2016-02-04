import Cell from 'fixed-data-table';

const ImageCell = (rowIndex, data, col, ...props) => (
  <ExampleImage
    src={data.getObjectAt(rowIndex)[col]}
  />
);
