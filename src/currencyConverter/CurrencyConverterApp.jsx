import CurrencyConverterFrame from 'currencyConverter/CurrencyConverterFrame'
import PageHeader from 'utils/layout/PageHeader'
import SectionStack from 'utils/layout/SectionStack'
import CurrencyConverterContainer from './containers/CurrencyConverterContainer'

const CurrencyConverterApp = () => {
	return (
		<CurrencyConverterFrame>
			<SectionStack>
				<SectionStack.Element>
					<PageHeader />
				</SectionStack.Element>
				<SectionStack.Element>
					<CurrencyConverterContainer />
				</SectionStack.Element>
			</SectionStack>
		</CurrencyConverterFrame>
	)
}

export default CurrencyConverterApp
