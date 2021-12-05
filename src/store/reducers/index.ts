type IState = {
    x: string,
    y: string,
    operation: string,
    output: string,
    inputTarget: string
}

const initialState = {
    x: '0',
    y: '0',
    operation: 'EQUAL',
    output: '0',
    inputTarget: 'x'
}

const operations = {
    'INCREMENT': (x: string, y: string) => String(Number(x) + Number(y)),
    'DECREMENT': (x: string, y: string) => String(Number(x) - Number(y)),
    'MULTIPLY': (x: string, y: string) => String(Number(x) * Number(y)),
    'DIVIDE': (x: string, y: string) => String(Number(x) / Number(y)),
}

export default function reducer(state = initialState, action: any) {
    console.info('reducer', state, action)
    const nextState = {...state};
    switch (action.type) {
        case 'CLICK_NUMBER': {
            const nextValue = nextState[state.inputTarget as keyof IState] + action.value;
            nextState[state.inputTarget as keyof IState] = nextValue;
            nextState['output'] = nextValue;
            return { ...nextState };
        };
        case 'CLICK_CANCEL': {
            return {... initialState};
        };
        case 'CLICK_EQUAL': {
            const operation = state.operation;
            const nextValue = operation ? operations[operation as keyof typeof operations](state.x, state.y) : state[state.inputTarget as keyof IState];
            nextState.output = nextValue;
            nextState['x'] = nextValue;
            nextState['y'] = '0';
            nextState.inputTarget = 'x';
            nextState.operation = 'EQUAL';
            return {... nextState};
        };
        case 'CLICK_OPERATION': {
            const nextTarget = nextState.inputTarget == 'x' ? 'y' : 'x';
            if (nextTarget == 'x') {
                nextState['y'] = '0';
                const nextValue = operations[nextState.operation as keyof typeof operations](state.x, state.y);
                nextState[nextTarget as keyof IState] = String(nextValue);
                nextState.output = Number(nextValue) ? nextValue : '0';
            } else {
                nextState.inputTarget = nextTarget;
            }
            
            nextState.operation = action.value;
            return {... nextState};
        };
        default: {
            return state;
        }
    }
}