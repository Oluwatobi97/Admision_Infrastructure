
// change all the URL To environmental variables


const localUrl = "http://localhost:3000/api";
const BASE_URL = "https://admision-infrastructure.vercel.app/api";


export const apiFetcher = async (endpoint: string, options: RequestInit = {}) => {
    const url = `${ BASE_URL }${ endpoint }`;
    const response = await fetch(url, {
        ...options,
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...(options?.headers || {}),
        }
    });

    if (!response.ok)
    {
        const error = await response.json();
        throw new Error(error.message || "An error occurred while fetching data.");
    }
    return response.json();
} 