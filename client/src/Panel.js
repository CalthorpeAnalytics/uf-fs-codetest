import * as React from 'react';

/**
 * Exercise:
 * Render an alphabetically sorterd list of cities.
 * There are some CSS classes you can use:
 *  - card: container layout for a city list item
 *    - image: css for city <img/> element
 *    - text: css for the city card info
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
