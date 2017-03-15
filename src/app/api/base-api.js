class BaseApi {

    constructor(apiHost, tokenProvider) {
        if (typeof tokenProvider !== 'function') {
            throw Error('tokenProvider must be a function');
        }

        this.apiHost = apiHost;
        this.tokenProvider = tokenProvider;
    }

    jsonHeaders() {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    }

    authHeaders() {
        return {
            headers: {
                'Authorization': `Bearer ${this.tokenProvider()}`,
                ...this.jsonHeaders()
            }
        }
    }

    apiFetch(path, options = {}) {
        return fetch([this.apiHost, path].join(''), Object.assign(options, this.jsonHeaders())).then((response) => response.json())
    }

    authorizedFetch(url, options) {
        return this.apiFetch(url, Object.assign(options, this.authHeaders()))
    }
}

export default BaseApi;