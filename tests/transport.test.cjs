const assert = require('node:assert/strict');
const test = require('node:test');
const { peliqanApiRequest } = require('../dist/nodes/Peliqan/transport');
const { execute } = require('../dist/nodes/Peliqan/actions/endpoint/exec.operation');

test('Endpoint Execute sends the selected method, URL and body through authentication', async () => {
	const response = { success: true };
	const body = { message: 'Hello' };
	let request;
	const context = {
		getNodeParameter: (name) => ({
			selectedApiEndpoint: JSON.stringify({ method: 'POST', url: '4257/mail-ontvangen' }),
			useCustomBody: true,
			customBody: body,
		})[name],
		helpers: {
			httpRequestWithAuthentication: async function (credential, options) {
				assert.equal(this, context);
				assert.equal(credential, 'peliqanApi');
				request = options;
				assert.equal(options.method, 'POST');
				assert.deepEqual(options.body, body);
				return response;
			},
		},
	};
	assert.deepEqual(await execute.call(context, 0), [{ json: response }]);
	assert.equal(request.url, 'https://api.eu.peliqan.io/4257/mail-ontvangen');
});

test('requests without an explicit URL keep the app domain and query parameters', async () => {
	const response = { results: [] };
	const context = {
		helpers: {
			httpRequestWithAuthentication: async (credential, options) => {
				assert.equal(credential, 'peliqanApi');
				assert.equal(options.url, 'https://app.eu.peliqan.io/api/applications/');
				assert.equal(options.method, 'GET');
				assert.deepEqual(options.qs, { limit: 10 });
				assert.equal('body' in options, false);
				return response;
			},
		},
	};
	assert.equal(
		await peliqanApiRequest.call(context, 'GET', 'api/applications/', {}, { limit: 10 }),
		response,
	);
});
