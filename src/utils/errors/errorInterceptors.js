export const interceptError = (error) => {
	if (error.isAxiosError) {
		const { status, detail } = error.response || {}

		if (status >= 400 && status < 500) {
			console.warn(detail)
			return Promise.reject(error)
		}
	}
}
