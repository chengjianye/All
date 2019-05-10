const defaultProps = {
    topList: []
}

const TopListReducers = (state = defaultProps, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE':
            return { ...state, topList: payload }
        default:
            return state
    }
}

export default TopListReducers