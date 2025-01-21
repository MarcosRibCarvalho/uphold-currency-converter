import SDK from '@uphold/uphold-sdk-javascript'

export const upholdSDK = new SDK({
	baseUrl: 'http://api-sandbox.uphold.com',
	clientId: 'foo',
	clientSecret: 'bar'
})
