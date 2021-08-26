export function minLength(text, minLength){
    let result = !text || text.length < minLength;
    return result;
}