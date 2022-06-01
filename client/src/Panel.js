import * as React from 'react';

/**
 * Render a panel component with an input and a list of city cards.
 * The input should filter the cities by name both in the list and on the map.
 *
 * There are a few existing css classes you may choose to use
 *  - panel : layout and positioning of the card
 *  - input-container : grouping the input and the label together
 */

function Panel() {
  return (
    <div className="panel">
      <h2>Filters</h2>
    </div>
  );
}

export default React.memo(Panel);
