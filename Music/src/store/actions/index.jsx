export function update(payload){
    console.log(payload)
    return {
        type:'UPDATE',
        payload
    }
}