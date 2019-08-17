const INITIAL = { description: '', list: [] }

export default (state = INITIAL, action) => {
    switch (action.type) {
        case 'DESCRIPT_CHANGED':
            return {
                ...state,
                description: action.payload
            }

        case 'TODO_SEARCH':
            return {
                ...state,
                list: action.payload.data
            }
        case 'TODO_ADD':
        case 'TODO_CLEAR':    
            return {
                ...state,
                description: ''
            }
        
        default:
            return state
    }

}