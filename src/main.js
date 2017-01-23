import Apps from './apps'
import store from './store'

const Main = () =>
    <div>
        <Apps />
    </div>

ReactDOM.render(
    <Main />,
    document.getElementById('container')
)

store.subscribe(() =>
    ReactDOM.render(
        <Main />,
        document.getElementById('container')
    )
)
