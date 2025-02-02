export const useApi = (endpoint: string, opts: object) => {
    const config = useRuntimeConfig();

    return useFetch(endpoint, {
        baseURL: config.public.apiUrl,
        ...opts 
    });
};