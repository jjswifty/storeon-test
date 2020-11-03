export const clicker = store => {
    
    store.on('@init', () => ({
        clickCounts: 0,
        attempts: 1,
        history: []
    }))

    clickerActions(store)

}

const clickerActions = store => {

    store.on('clicker/click', state => ({
        clickCounts: state.clickCounts + 1,
    }))

    store.on('clicker/newAttempt', state => ({
        history: [...state.history, state.clickCounts],
        clickCounts: 0,
        attempts: state.attempts + 1,
    }))

}