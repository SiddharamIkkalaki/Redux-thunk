const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake(){
    return{
           type: BUY_CAKE,
           info: 'First Redux Action'
    }
}

function buyIcecrean(){
    return{
           type: BUY_ICECREAM,
           info: 'First Redux Action'
    }
}
// (PrevState, action) => newState

// const initialState = {
//     numOfCakes:10,
//     numOfIcecreams:20
// }

const cakeInitialState = {
    numOfCakes:10
}

const iceCreamInitialState = {
    numOfIcecreams:20
}

// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case 'BUY_CAKE': 
//         return{
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case 'BUY_ICECREAM': 
//         return{
//             ...state,
//             numOfIcecreams: state.numOfIcecreams - 1
//         }
//         default:  return state
//     }
// }

const cakeReducer = (state = cakeInitialState, action) => {
    switch(action.type){
        case 'BUY_CAKE': 
        return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default:  return state
    }
}

const iceCreamReducer = (state = iceCreamInitialState, action) => {
    switch(action.type){
        case 'BUY_ICECREAM': 
        return{
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }
        default:  return state
    }
}

const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial state', store.getState());
// const unSubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
const unSubscribe = store.subscribe(() => {})

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecrean());
store.dispatch(buyIcecrean());
unSubscribe();
