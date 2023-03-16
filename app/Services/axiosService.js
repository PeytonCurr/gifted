

// @ts-ignore
export const giphy = axios.create({
    baseURL: `https://api.giphy.com/v1/gifs`,
    timeout: 8000,
    params: { api_key: `cfw7W1ZVAbNkveK94nyWdZ8J6tti8fcL` }
})

// @ts-ignore
export const sandbox = axios.create({
    baseURL: `https://bcw-sandbox.herokuapp.com/`,
    timeout: 8000
})
