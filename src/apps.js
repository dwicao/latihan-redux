import Formal from './formal'
import store from './store'

class Apps extends React.Component {
    _handleClick (i) {
        store.dispatch({
            type: 'VOTE',
            payload: i
        })
    }

    render () {

        const totalSuara = store.getState().reduce((sum, v) => {
            return sum + v.suara
        }, 0)

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
                            store.getState().map((v,i) =>
                                <Formal
                                    key={i}
                                    nama={v.nama}
                                    suara={v.suara}
                                    totalSuara={totalSuara}
                                    onClick={
                                        this._handleClick.bind(this, i)
                                    }
                                />
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

// Ini awalnya mau pake SFC, cuma gak tau gimana cara ngitung reduce di sini mas
//
// const _handleClick = (i) => {
//     store.dispatch({
//         type: 'VOTE',
//         payload: i
//     })
// }

// const Apps = () =>
//     <div>
//         <table>
//             <thead>
//                 <tr>
//                     <td>Pilih</td>
//                     <td>Nama</td>
//                     <td>Suara</td>
//                     <td>Presentase</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     store.getState().map((v,i) =>
//                         <Formal
//                             key={i}
//                             nama={v.nama}
//                             suara={v.suara}
//                             onClick={
//                                 (evt) => {
//                                     _handleClick(i)
//                                 }
//                             }
//                         />
//                     )
//                 }
//             </tbody>
//         </table>
//     </div>

export default Apps
