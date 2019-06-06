let token = null;
const interceptors = [];

/**
 * Get fetch headers
 * @returns {Object}
 */
function getHeaders() {
    const headers = {
        'content-type': 'application/json'
    };

    if (token !== null) {
        headers.authorization = `Bearer ${token}`;
    }

    return headers;
}

/**
 * GET anonymous ajax request
 * @param {String} url 
 * @returns {Promise.<Object>}
 */
async function get(url) {
    try {
        runAllInterceptors(url, 'get');
    }
    catch (ex) { return ex.response || {}; }

    const response = await fetch(url, {
        method: 'GET',
        headers: getHeaders()
    });

    const jsonResponse = await response.json();

    if (response.status >= 400) {
        throw jsonResponse;
    }

    return jsonResponse;
}

/**
 * POST ajax request
 * @param {String} url 
 * @param {Object} params 
 * @returns {Promise.<Object>}
 */
async function post(url, params) {
    try {
        runAllInterceptors(url, 'post', params);
    }
    catch (ex) { return ex.response || {}; }

    const response = await fetch(url, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(params)
    });

    const jsonResponse = await response.json();

    if (response.status >= 400) {
        throw jsonResponse;
    }

    return jsonResponse;
}

/**
 * POST file over ajax
 * @param {String} url 
 * @param {Object} formData 
 * @returns {Promise.<Object>}
 */
async function postFile(url, formData) {
    try {
        runAllInterceptors(url, 'postFile', formData);
    }
    catch (ex) { return ex.response || {}; }

    const response = await fetch(url, {
        method: 'POST',
        headers: getHeaders(),
        body: formData
    });

    const jsonResponse = await response.json();

    if (response.status >= 400) {
        throw jsonResponse;
    }

    return jsonResponse;
}

/**
 * PATCH ajax request
 * @param {String} url 
 * @param {Object} params 
 * @returns {Promise.<Object>}
 */
async function patch(url, params) {
    try {
        runAllInterceptors(url, 'patch', params);
    }
    catch (ex) { return ex.response || {}; }

    const response = await fetch(url, {
        method: 'PATCH',
        headers: getHeaders(),
        body: JSON.stringify(params)
    });

    const jsonResponse = await response.json();

    if (response.status >= 400) {
        throw jsonResponse;
    }

    return jsonResponse;

}

/**
 * DELETE ajax request
 * @param {String} url 
 * @param {Object} params 
 * @returns {Promise.<Object>}
 */
async function del(url, params = {}) {
    try {
        runAllInterceptors(url, 'delete', params);
    }
    catch (ex) { return ex.response || {}; }

    const response = await fetch(url, {
        method: 'DELETE',
        headers: getHeaders(),
        body: JSON.stringify(params)
    });

    const jsonResponse = await response.json();

    if (response.status >= 400) {
        throw jsonResponse;
    }

    return jsonResponse;
}

/**
 * Intercept a request that is handled with this service
 * @param {RegExp|String} url 
 * @param {String} method 
 * @param {Function} handler 
 */
function intercept(url, method, handler) {
    const urlRegex = typeof url === 'string' ? new RegExp(url) : url;

    interceptors.push({
        method,
        urlRegex,
        handler
    });
}

function runAllInterceptors(url, method, params = {}) {
    interceptors.forEach(interceptor => {
        if (
            (!method || method.toLowerCase() === interceptor.method.toLowerCase()) &&
            url.match(interceptor.urlRegex) &&
            typeof interceptor.handler === 'function'
        ) {
            interceptor.handler({
                params,
                overrideResponse: function (response) {
                    const error = new Error('INTERCEPT_BREAK');
                    error.response = response;
                    throw error;
                }
            });
        }
    });
}

export default {
    get,
    post,
    postFile,
    patch,
    delete: del,
    intercept,
    set authenticationToken(value) {
        token = value;
    }
};
