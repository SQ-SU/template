export const API_ENDPOINT = process.env.NODE_ENV === "production" ? "https://us-central1-nvre-server.cloudfunctions.net/expressApi/api/v1" : "http://127.0.0.1:5001/nvre-server/us-central1/expressApi/api/v1";