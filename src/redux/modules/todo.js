const SUBMIT = "SUBMIT"
const DELETE = "DELETE"
const COMPLETE = "COMPLETE"
const VIEW = "VIEW"

export const submitThis = (payload) => {
    if (!payload[0]) {
        return;
    }
    if (!payload[1]) {
        return;
    }
    return {
        type: SUBMIT,
        payload,
    }
}

export const deleteThis = (payload) => {
    return {
        type: DELETE,
        payload,
    }
}

export const completeThis = (payload) => {
    return {
        type: COMPLETE,
        payload,
    }
}

export const viewThis = (payload) => {
    return {
        type: VIEW,
        payload,
    }
}

const initialState = {
    todos: [
        {
            id: 1,
            title: "리액트 공부하기",
            body: "심화 과정 학습하기",
            isDone: false
        },
        {
            id: 2,
            title: "Redux 공부하기",
            body: "Redux로 투두리스트 구현해서 배포하기",
            isDone: true
        },
    ]
};

const todoSetter = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT:
            const id = Date.now()
            return {
                todos: [...state.todos, {title: action.payload[0], body: action.payload[1], isDone:false, id}]
            };
        case DELETE:
            const afterDel = state.todos.filter((todo) => todo.id !== action.payload)
            return {
                todos: afterDel,
            };
        case COMPLETE:
            const afterCompl = state.todos.map((todo)=> todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo);
            return {
                todos: afterCompl,
            };
        case VIEW:
            const afterView = state.todos.filter((todo) => todo.id === action.payload)
            return {
                selectedTodo: afterView,
                ...state
            }
        default:
            return state;
    }
}

export default todoSetter;

