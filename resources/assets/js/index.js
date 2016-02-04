import React from 'react';
import ReactDOM from 'react-dom';

import Roster from './app/components/Roster/Roster.jsx';
import DimensionChooser from './app/components/Dimensions/DimensionChooser.jsx';
import CREDENTIALS from './app/data/credentials';


ReactDOM.render(<Roster tableData={CREDENTIALS.roster} />, document.getElementById('credentials-app-roster'));
ReactDOM.render(<DimensionChooser />, document.getElementById('dimension-chooser'));
