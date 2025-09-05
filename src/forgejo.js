class ForgejoAPI {
    constructor(api_url, token, debug = false) {
        this.api_url = api_url;
        this.token = token;
        this.debug = debug;
    }

    async CreateComment(repository,index,body) {
        const requestBody = {};
        if (body) requestBody.body = body;

        // Debug output
        if (this.debug) {
            console.log('CreateComment payload:', requestBody);
        }

        const response = await this._makeRequest(
            `/repos/${repository}/issues/${index}/comments`,
            'POST',
            requestBody
        );
        return response.data;
    }

    async _makeRequest(endpoint, method, data) {
        const url = `${this.api_url}${endpoint}`;
        const options = {
            method,
            headers: {
                'Authorization': `token ${this.token}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            data
        };

        if (this.debug) {
            console.log('ForgejoAPI request:', {
                url,
                method,
                headers: options.headers,
                data
            });
        }

        const axios = require('axios');
        return await axios(url, options);
    }
}

module.exports = ForgejoAPI;