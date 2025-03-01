import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default{
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({token})
    });
    //transformando em um json
    const json = await req.json();
    return json;

    },
    SignIn: async (email, password) => {
        const req = await fetch(`${BASE_API}/auth/login`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });
    //transformando em um json
    const json = await req.json();
    return json;
    },
    SignUp: async (name, email, password) => {
        const req = await fetch(`${BASE_API}/user`, {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    });
    //transformando em um json
    const json = await req.json();
    return json;
        

    },
};