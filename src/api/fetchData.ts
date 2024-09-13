const fetchData = async () => {
    try {
        const res = await fetch(`https://66e08e312fb67ac16f29fed1.mockapi.io/data`);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json(); 
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return []; 
    }
}

export default fetchData;