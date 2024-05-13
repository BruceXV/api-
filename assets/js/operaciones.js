
//paso 0 fecha dia,mes y anio
export const generateHash = (timestamp, privateKey, publicKey) =>{
    const hash = Crypto.MD5(timestamp + privateKey + publicKey)
}