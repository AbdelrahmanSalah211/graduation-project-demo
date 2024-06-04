import SideBar from './SideBar';
import Loading from '../../../src/Loading';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';

const Menu = () => {

	const URL = import.meta.env.VITE_REACT_API_URL;
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchImages = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get(`${URL}/restaurant/menu/get/`, {
					headers: {
						'Authorization': localStorage.getItem('token'),
					},
				});

				if (response.status === 200) {
					const data = response.data;
					console.log(data);
					// Convert the binary data to base64 string
					const base64Images = data.map(item => {
						const buffer = item.menuImage.data;
						const base64String = Buffer.from(buffer).toString('base64');
						return {
							...item,
							menuImage: `data:image/png;base64,${base64String}`,
						};
					});

					setImages(base64Images);
					console.log(images);
					console.log(base64Images);
					setIsLoading(false);
				} else {
					console.error('Failed to fetch images');
					setIsLoading(false);
				}
			} catch (error) {
				setIsLoading(false);
				console.error('Error fetching images:', error);
			}
		};

		fetchImages();
	}, [URL]);

	if (isLoading) {
		return (<div className="page-container">
			<SideBar />
			<Loading />
		</div>);

	}

	return <div className="page-container">
		<SideBar />
		<div className="side-page">
			<div className="side-page-nav">
				<div className="side-page-heading">menu</div>
				<div className="add-item">
					<button className='btn' type='button'>add</button>
				</div>
			</div>

			<ul className="list-items">
				{
					images?.map((image) => {
						return <img key={image.menuId} src={image.menuImage} alt="menu image" />;
					})
				}
			</ul>
		</div>
	</div>;
};

export default Menu;