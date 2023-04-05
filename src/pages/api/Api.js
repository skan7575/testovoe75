const API = () => {
    const getCards = async () => {
        try {
            const response = await fetch("https://642d2f0e66a20ec9ce96a139.mockapi.io/cards");
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching cards:", error);
        }
    };

    return { getCards };
};

export default API;