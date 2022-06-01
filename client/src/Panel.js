import * as React from 'react';

/**
 * Exercise:
 * Render a list of cities using the CityCard component.
 * The cities should be sorted alphabetically.
 * 
 * Bonus Requirement:
 * Implement a text input acting like a filter on the city list.
 * The input should filter the cities by name both in the list and on the map.
 * Only cities with a name that matches the input substring (case insensitive)
 * should be displayed.
 */

function Panel() {
  return (
    <div className="panel">
      {/*div class="input-container">
        <label>Filter cities</label>
        <input id="cityNameFilter" />
      </div>*/}
      <h2>Cities</h2>
    </div>
  );
}

export default React.memo(Panel);
