import { Box, HStack, Image, List, ListItem, SkeletonText } from '@chakra-ui/react'
import { EXCHANGE_RATES_BY_CURRENCY_KEY } from 'currencyConverter/queryKeys'
import api from 'http/rest/api'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import SmallText from 'ui/text/SmallText'
import { interceptError } from 'utils/errors/errorInterceptors'

const CurrencyConverterExchangeRatesList = ({ currency, amount }) => {
	const {
		data: exchangeRates,
		isLoading,
		isFetching
	} = useQuery([EXCHANGE_RATES_BY_CURRENCY_KEY, currency], () => fetchExchangeRatesByCurrency(currency), {
		select: (data) => data.filter((rate) => rate.pair.startsWith(`${currency}-`)),
		onError: interceptError
	})

	const fetchExchangeRatesByCurrency = async (currency) => await api.tickers.exchangeRatesByCurrency(currency)

	const calculateExchangeRate = (amount, bid) => Math.round(amount * parseFloat(bid) * 100000) / 100000

	const queryClient = useQueryClient()

	useEffect(() => {
		queryClient.invalidateQueries([EXCHANGE_RATES_BY_CURRENCY_KEY, currency])
	}, [currency, queryClient])

	return (
		<Box w='100%'>
			{(isLoading || isFetching) && amount > 0 && (
				<SkeletonText mt='4' noOfLines={10} spacing='6' skeletonHeight='4' />
			)}
			{!(isLoading || isFetching) && amount > 0 && (
				<List w='100%' paddingX={4} maxH='500px' overflowY='auto' aria-label={`Exchange rates for ${currency}`}>
					{exchangeRates?.map((rate) => (
						<ListItem key={rate.currency} id='currency-rate' marginY={4}>
							<HStack w='100%' justifyContent={'space-between'}>
								<Box>{calculateExchangeRate(amount, rate.bid)}</Box>
								<HStack>
									<Image maxW={4} maxH={4} src={`/assets/${rate.currency}.svg`} />
									<SmallText>{rate.currency}</SmallText>
								</HStack>
							</HStack>
						</ListItem>
					))}
				</List>
			)}
		</Box>
	)
}

CurrencyConverterExchangeRatesList.displayName = 'CurrencyConverterExchangeRatesList'

CurrencyConverterExchangeRatesList.propTypes = {
	currency: PropTypes.string.isRequired,
	amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

export default CurrencyConverterExchangeRatesList
