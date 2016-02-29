import React from 'react';
import { render } from 'react-dom';

import Roster from '../app/components/Roster/Roster.jsx';
import DimensionChooser from '../app/components/Dimensions/DimensionChooser.jsx';
import CREDENTIALS from '../app/data/credentials';

const App = () => (
  <div>
    <h1>Credential Maker</h1>
    
    <section id="step-1" className="group">
      <h3>Dimensions</h3>
      <div id="step-1-sub1" className="subgroup">
        <h4>Choose size:</h4>
        <div className="row">
          <DimensionChooser className="col-md-12"></DimensionChooser>
        </div>
      </div>
    </section>
    
    <section id="step-2" className="group">
      <h3>Roster</h3>
      <div id="step-2-sub1" className="subgroup">
        <h4>Upload your roster</h4>
        <div id="credentials-app-roster-upload"></div>
        <Roster tableData={CREDENTIALS.roster} />
      </div>
    </section>
  </div>
);

export default App;
