const request = async (method, token, url, data) => {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            options.body = JSON.stringify(data);
        }
    }

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorizarion': token,
        };
    }

    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }
    return result;
};

export const requestFactory = (token) => {
    if (!token) {
        const serializedAuth = localStorage.getItem('auth');

        if (serializedAuth) {
            const auth = JSON.stringify(serializedAuth);
            token = auth.accessToken;
        }
    }
    return {
        get: request.bind(null, 'GET', token),
        post: request.bind(null, 'POST', token),
        put: request.bind(null, 'PUT', token),
        patch: request.bind(null, 'PATCH', token),
        delete: request.bind(null, 'DELETE', token),
    }
};





// const request = async (method, url, data) => {

//     try {
//         const user = localStorage.getItem('auth');
//         const auth = JSON.parse(user || '{}');

//         let headers = {}

//         if (auth.accessToken) {
//             headers['X-Authorization'] = auth.accessToken;
//         }

//         let buildRequest = '';

//         if (method === 'GET') {
//             buildRequest = fetch(url, { headers });
//         } else {
//             buildRequest = fetch(url, {
//                 method,
//                 headers: {
//                     ...headers,
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             })
//         }
//         const response = await buildRequest;

//         const result = await response.json();

//         return result;
//     } catch (error) {
//         console.log(error);
//     }
// };


// export const get = request.bind({}, 'GET');
// export const post = request.bind({}, 'POST');
// export const put = request.bind({}, 'PUT');
// export const del = request.bind({}, 'DELETE');
// export const patch = request.bind({}, 'PATCH');

