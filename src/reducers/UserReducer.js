//ações específicas e local de armazenamento
export const initialState = {
    Avatar: '',
    favorites: [],
    appointments: []  
};

export const UserReducer = (state, action) =>{
    switch(action.type){
        case 'setAvatar':
            return{...state, avatar: action.payload.avatar};
        break;
        default:
            return state;
    }

}