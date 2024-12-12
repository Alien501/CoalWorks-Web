import CryptoJs from 'crypto-js'

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY

const encryptData = (data) => {
    console.log(SECRET_KEY);
    return CryptoJs.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

export {
    encryptData
}