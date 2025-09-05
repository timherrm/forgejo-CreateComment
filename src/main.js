const core = require('@actions/core');
const ForgejoAPI = require('./forgejo');

async function run() {
    try {
        const api_url = core.getInput('api_url');
        const token = core.getInput('token');
        const repository = core.getInput('repository');
        const index = core.getInput('index');
        const body = core.getInput('body');
        const debug = core.getInput('debug') === 'true';

        const forgejo = new ForgejoAPI(api_url, token, debug);

        let result;
        result = await forgejo.CreateIssueComment(
            repository,
            index,
            body
        );
        core.setOutput('result', JSON.stringify(result, null, 2));
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();