import React from 'react';

const Formal = ({nama, suara, totalSuara, onClick}) =>
  <tr>
    <td>
      <button onClick={onClick}>Add Vote</button>
    </td>
    <td>
      { nama }
    </td>
    <td>
      { suara }
    </td>

    <td>
      {
        ((suara / totalSuara) * 100) || 0
      } %
    </td>
  </tr>

export default Formal;
