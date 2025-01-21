import { Box, HStack, NumberInput, NumberInputField } from '@chakra-ui/react'
import LoadMoreButton from 'currencyConverter/components/LoadMoreButton'
import { CURRENCY_CONVERTER_CURRENCIES_KEY } from 'currencyConverter/queryKeys'
import api from 'http/rest/api'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import SmallText from 'ui/text/SmallText'
import { interceptError } from 'utils/errors/errorInterceptors'
import PaginatedOptionsSelect from 'utils/select/PaginatedOptionsSelect'

const fetchUpholdAssets = async ({ pageParam = { rangeMin: 0, rangeMax: 9 } }) => {
	const { rangeMin, rangeMax } = pageParam

	const { data, headers } = await api.currencies.list(rangeMin, rangeMax)

	const totalItems = parseInt(headers['content-range'].split('/')[1], 10)

	return {
		data,
		nextRange: rangeMax + 1 < totalItems ? { rangeMin: rangeMax + 1, rangeMax: rangeMax + 10 } : null
	}
}

const CurrencyConverterInput = ({ currency, handleCurrency, handleAmountChange }) => {
	const [search, setSearch] = useState('')

	const defaultUSDCurrency = {
		value: 'USD',
		label: 'USD',
		currencyImg: '/assets/USD.svg'
	}

	const {
		data: currencies,
		isLoading,
		hasNextPage,
		fetchNextPage,
		isFetchingNextPage
	} = useInfiniteQuery([CURRENCY_CONVERTER_CURRENCIES_KEY, { assets: 'assets', search }], fetchUpholdAssets, {
		getNextPageParam: (lastPage) => lastPage.nextRange,
		keepPreviousData: true,
		onError: interceptError
	})

	let currenciesList =
		currencies?.pages
			.flatMap((page) => page.data)
			.map((currency) => ({
				value: currency.code,
				label: currency.code,
				currencyImg: currency.image
			})) ?? []

	currenciesList = [defaultUSDCurrency, ...currenciesList]

	currenciesList = currenciesList.filter(
		(currency, index, self) => index === self.findIndex((item) => item.value === currency.value)
	)

	return (
		<>
			<HStack
				w='100%'
				bg={'#F5F9FC'}
				h={'60px'}
				borderRadius='md'
				_focusWithin={{
					border: '1px solid #3182CE',
					boxShadow: '0 0 0 1px rgba(49, 130, 206, 0.5)'
				}}
				justifyContent={'space-between'}
			>
				<Box w='65%' paddingLeft={4} paddingRight={0}>
					<NumberInput variant='unstyled' onChange={handleAmountChange} precision={2}>
						<NumberInputField placeholder={'0.00'} fontSize={'32px'} p={0} />
					</NumberInput>
				</Box>
				<Box w='35%' pr={4}>
					<PaginatedOptionsSelect
						onInputChange={setSearch}
						options={currenciesList}
						isLoading={isLoading || isFetchingNextPage}
						loadMoreButton={
							hasNextPage ? (
								<LoadMoreButton my='2' onClick={() => fetchNextPage()} isLoading={isFetchingNextPage} />
							) : null
						}
						onChange={(option) => {
							if (option === null && option === undefined) return
							handleCurrency(option.value)
						}}
						value={currency}
					/>
				</Box>
			</HStack>
			<SmallText color='gray.400' align='center'>
				Enter an amount to check the rates.
			</SmallText>
		</>
	)
}

CurrencyConverterInput.displayName = 'CurrencyConverterInput'

CurrencyConverterInput.propTypes = {
	currency: PropTypes.string,
	handleCurrency: PropTypes.func.isRequired,
	handleAmountChange: PropTypes.func.isRequired
}

export default CurrencyConverterInput
