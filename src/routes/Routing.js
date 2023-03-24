import LayOut from 'components/Layout';
import DetailInfoPage from 'Pages/DetailPage/detailInfo';
import SearchPage from 'Pages/Search';
import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../Pages/Home';

const router = createBrowserRouter([
	{
		path: '/',

		element: <LayOut />,
		children: [
			{
				path: '',
				element: <HomePage />,
			},
			{
				path: '/issues',
				element: <HomePage />,
			},
			{
				path: '/detail/:id',
				element: <DetailInfoPage />,
			},
			{
				path: '/search',
				element: <SearchPage />,
			},
		],
	},
]);

export default router;
