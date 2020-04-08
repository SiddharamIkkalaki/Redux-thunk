import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeAction'

const HooksCakeContainer = () =>{
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return(
        <div>
            <h2>Number Of Cakes using Hooks - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;