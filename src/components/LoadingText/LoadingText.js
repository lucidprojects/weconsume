import React from 'react';
import { Wave } from 'react-animated-text';

const Calculating = () => (
//   <Wave text="loading" />
  <div><Wave className="waveText" text="Calculating potential future..." effect="fadeOut" effectChange={1.15} /></div>
);

export default Calculating;