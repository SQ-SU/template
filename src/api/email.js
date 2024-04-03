import { API_ENDPOINT } from ".";

export const sendEmail = async (obj) => {
    try {
        const response = await fetch(`${API_ENDPOINT}/send-email/nvig`, {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        });
        return response.status;
    } catch (err) {
        console.log(err);
    }
};
