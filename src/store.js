import { createStore } from 'redux'

const initialState = [
    {
        nama: 'Andi',
        suara: 0
    },
    {
        nama: 'Budi',
        suara: 0
    },
    {
        nama: 'Susan',
        suara: 0
    },
    {
        nama: 'Heru',
        suara: 0
    }
]

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'VOTE': {
            // const nowState = state[action.payload]
            // nowState.suara = nowState.suara + 1

            return Object.assign(state, state[action.payload], {
                nama: state[action.payload].nama,
                suara: state[action.payload].suara++
            })
        }

        default: {
            return state
        }
    }
}

const store = createStore(reducer)

export default store
