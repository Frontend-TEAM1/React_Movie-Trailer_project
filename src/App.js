import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import router from 'Routes/Routing';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'Styles/global';
import { theme } from 'Styles/theme';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<RouterProvider router={router} />
				</ThemeProvider>
			</RecoilRoot>
		</QueryClientProvider>
	);
}

export default App;
