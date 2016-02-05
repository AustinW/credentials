import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

import TextCell from '../DataTable/TextCell.jsx';
import RosterPhoto from './RosterPhoto.jsx';

var Roster = React.createClass({
  
  onClickSave: function() {
    console.log('IMAGE: ', this.refs.editor.getImage());
  },
  
  render: function() {
    console.warn(this.props);
    return (
      <div>
        <Table
          rowHeight={60}
          rowsCount={this.props.tableData.length}
          headerHeight={50}
          width={700}
          height={500}>
          <Column
            header={<Cell>Photo</Cell>}
            cell={({rowIndex, ...props}) => (
              <Cell {...props}>
                <RosterPhoto person={this.props.tableData[rowIndex]} />
              </Cell>
            )}
            width={60}
          />
          <Column
            header={<Cell>First Name</Cell>}
            cell={
              <TextCell data={this.props.tableData} field="firstName" />
            }
            width={150}
          />
          <Column
            header={<Cell>Last Name</Cell>}
            cell={
              <TextCell data={this.props.tableData} field="lastName" />
            }
            width={150}
          />
          <Column
            header={<Cell>Role</Cell>}
            cell={
              <TextCell data={this.props.tableData} field="role" />
            }
            width={150}
          />
          <Column
            header={<Cell>Team</Cell>}
            cell={
              <TextCell data={this.props.tableData} field="team" />
            }
            width={150}
          />
        </Table>
      </div>
    )
  }
});

export default Roster;
