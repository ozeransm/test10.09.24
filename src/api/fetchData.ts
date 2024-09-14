import { UserData } from "../redux/types";
const fetchData = async (urlData: UserData) => {
    try {
        const res = await fetch(`https://66e08e312fb67ac16f29fed1.mockapi.io/users?${!urlData.name.trim() ? '' : 'name='}${urlData.name.trim()}${!urlData.login.trim() ? '' : '&login='}${urlData.login.trim()}${!urlData.email.trim() ? '' : '&email='}${urlData.email.trim()}${!urlData.phone.trim() ? '' : '&phone='}${urlData.phone.trim()}`);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json(); 
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error; 
    }
}

export default fetchData;
