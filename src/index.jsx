import { ChakraProvider } from '@chakra-ui/react'
import App from 'App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import theme from 'theme/theme'

const queryClient = new QueryClient()

const root = createRoot(document.getElementById('root'))

root.render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<App />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ChakraProvider>
	</StrictMode>
)
