const initialState = {
    fruits: [
        { key: 1, name: 'Lemon', cost: 3, count: 0 },
        { key: 2, name: 'Banana', cost: 4, count: 0 },
        { key: 3, name: 'Mango', cost: 5, count: 0 }
    ],
    totalPrice: 0
}
const reducer = (state = initialState, action) => {
    if (action.type === 'DELETE') {
        const newFruits = state.fruits.filter(f => f.key !== action.key);
        let newTotalPrice = 0;
        newFruits.forEach(f => {newTotalPrice += f.count * f.cost});
        return {
            fruits: newFruits,
            totalPrice: newTotalPrice
        }
    }
    if (action.type === 'ADD') {
        const fruitIndex = state.fruits.findIndex(f => f.key === action.key);
        const newFruits = [...state.fruits];
        newFruits[fruitIndex].count += 1;
        const newTotalPrice = state.totalPrice + state.fruits[fruitIndex].cost;
        return {
            fruits: newFruits,
            totalPrice: newTotalPrice
        }
    }
    if (action.type === 'REMOVE') {
        const fruitIndex = state.fruits.findIndex(f => f.key === action.key);
        if (state.fruits[fruitIndex].count > 0) {
            const newFruits = [...state.fruits];
            newFruits[fruitIndex].count -= 1;
            const newTotalPrice = state.totalPrice - state.fruits[fruitIndex].cost;
            return {
                fruits: newFruits,
                totalPrice: newTotalPrice
            }
        }
    }
    return state;
}

export default reducer;