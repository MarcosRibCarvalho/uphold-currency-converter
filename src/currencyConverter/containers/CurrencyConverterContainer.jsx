import { Container, VStack } from '@chakra-ui/react'
import CurrencyConverterExchangeRatesList from 'currencyConverter/components/CurrencyConverterExchangeRatesList'
import CurrencyConverterHeader from 'currencyConverter/components/CurrencyConverterHeader'
import CurrencyConverterInput from 'currencyConverter/components/CurrencyConverterInput'
import { debounce } from 'lodash'
import { useState } from 'react'

const CurrencyConverterContainer = () => {
	const [currency, setCurrency] = useState('USD')
	const [amount, setAmount] = useState(0)

	const DEBOUNCE_DELAY = 1000

	const handleAmountChange = debounce((value) => {
		setAmount(value)
	}, DEBOUNCE_DELAY)

	return (
		<Container w='100%' maxW='sm' centerContent>
			<VStack w='100%' spacing={10}>
				<CurrencyConverterHeader />
				<VStack>
					<CurrencyConverterInput
						currency={currency}
						handleCurrency={setCurrency}
						handleAmountChange={handleAmountChange}
					/>
					<CurrencyConverterExchangeRatesList currency={currency} amount={amount} />
				</VStack>
			</VStack>
		</Container>
	)
}

export default CurrencyConverterContainer
