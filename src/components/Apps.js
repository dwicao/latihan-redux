import React from 'react';
import Formal from './Formal';

const Apps = (props) => {
  const {
    main,
    actions,
  } = props;

  const _handleClick = (nama) => (event) => {
    actions.vote(nama);
  }

  const totalSuara = main.reduce((sum, v) => {
    return sum + v.suara;
  }, 0);
console.log(props)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Pilih</td>
            <td>Nama</td>
            <td>Suara</td>
            <td>Presentase</td>
           </tr>
        </thead>
        <tbody>
          {
            main.map((v,i) =>
              <Formal
                key={i}
                nama={v.nama}
                suara={v.suara}
                totalSuara={totalSuara}
                onClick={_handleClick(v.nama)}
              />
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default Apps;
