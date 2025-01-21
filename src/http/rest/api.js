import axios from 'axios'
import { upholdSDK as SDK } from 'http/config'

export default {
	currencies: {
		list: (rangeMin, rangeMax) =>
			axios.get('/api/assets', {
				headers: {
					Range: `items=${rangeMin}-${rangeMax}`
				}
			})
	},
	tickers: {
		exchangeRatesByCurrency: (currency) => SDK.getTicker(currency)
	}
}
