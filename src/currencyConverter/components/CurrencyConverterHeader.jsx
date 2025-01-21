import { VStack } from '@chakra-ui/react'
import PageTitle from 'ui/text/PageTitle'
import TextInfo from 'ui/text/TextInfo'

const CurrencyConverterHeader = () => (
	<VStack spacing={4}>
		<PageTitle>Currency Converter</PageTitle>
		<TextInfo align='center'>
			Receive competitive and transparent pricing with no hidden spreads. See how we compare.
		</TextInfo>
	</VStack>
)

CurrencyConverterHeader.displayName = 'CurrencyConverterHeader'

export default CurrencyConverterHeader
