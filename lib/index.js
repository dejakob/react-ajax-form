import AjaxForm from './ajax-form';
import ApiFetch from './api-fetch';

const { intercept } = ApiFetch;

/**
 * Set authentication token (for authenticated requests)
 */
function setAuthToken(authToken) {
    ApiFetch.authenticationToken = authToken;
}

export default AjaxForm;
export {
    intercept,
    setAuthToken
};