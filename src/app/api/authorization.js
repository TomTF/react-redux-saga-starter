import BaseApi from './base-api';

class Authorization extends BaseApi {

    login(username, password) {
        return this.apiFetch('/api/v1/Account/Login', {
            method: 'POST',
            body: JSON.stringify({username: username, password: password})
        });
    }
}

export default Authorization;
