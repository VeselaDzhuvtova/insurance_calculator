const request = async (method, url, data) => {

    try {
        const user = localStorage.getItem('auth');

        const auth = JSON.parse(user || '{}');

        let headers = {}

        if (auth.accessToken) {
            headers['X-Authorization'] = auth.accessToken;
        }

// Make an HTTP PUT Request
// async delete(url) {
  
//     // Awaiting fetch which contains 
//     // method, headers and content-type
//     const response = await fetch(url, {
//         method: 'DELETE',
//         headers: {
//             'Content-type': 'application/json'
//         }
//     });

//     // Awaiting for the resource to be deleted
//     const resData = 'resource deleted...';

//     // Return response data 
//     return resData;
// }

        let buildRequest;

        if (method === 'GET' && method !== 'DELETE') {
            buildRequest = fetch(url, { headers });
        } else {
            // buildRequest = fetch(url, {
                buildRequest = fetch('http://localhost:3030/data/cars/12344432', {
                method,
                headers: {
                    ...headers,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
        const response = await buildRequest;

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
};


export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const remove = request.bind({}, 'DELETE');
export const patch = request.bind({}, 'PATCH');

