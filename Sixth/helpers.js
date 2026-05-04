function checkResponse(response){
    if(!response){
        return false;
    } 
        return response.ok;
}

export default checkResponse;


export function assertEqual(actual, expected, message){
if(actual === expected){
    console.log(`[PASSED] ${message}`);
} else {
throw new Error(`[FAILED] ${message}: ожидалось ${expected}, получили ${actual}`);
}
}

