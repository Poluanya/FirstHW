function generateUserPayload(name: string, age: number, isPremium: boolean): string {
    return `User: ${name}, Age: ${age}, Premium: ${isPremium}`;
}

interface UserData {
        id: number;
        email: string;
        tags: string[];
}


interface ApiResponse {
    status: string;
    data: UserData;
}

const mockResponse: ApiResponse = {
    status: "success",
    data: {
        id: 101,
        email: "test@qa.com",
        tags: ["e2e", "smoke"]
    }
};

console.log(mockResponse.data);
console.log(mockResponse.status);

type Environment = 'local' | 'stage' | 'prod';

function setApiUrl(env: Environment): string{
switch(env){
case 'local':
return 'http://localhost:3000';
case 'stage':
return 'https://stage.api.com';
case 'prod':
return 'https://api.com';
}
}

console.log(setApiUrl('stage'));


const fetchUser = async (): Promise<UserData> => {
return { id: 1, email: "ts@cool.com", tags: ["api"] }
}

fetchUser().then(user => {
    console.log(user); 
}); 


interface BaseResponse {
timestamp: number
error?: string
}

interface LoginResponse extends BaseResponse{
    token: string
}

const loginResponse: LoginResponse = {
"timestamp": Date.now(),
"token": "eyJhGc"
}

console.log(loginResponse.timestamp);
console.log(loginResponse.token);