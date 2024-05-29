/* eslint-disable react/prop-types */
import SideBar from './SideBar';

const Empty = ({ pageName }) => {
	return (
		<div className="page-container">
			<SideBar />
			<div className="side-page">
				<div className="side-page-nav">
					<div className="side-page-heading">{pageName}</div>
					<div className="add-item">
						<button type='button' className='btn'
						>add new {pageName}</button>
					</div>
				</div>
				<h3>your {pageName} is empty, start adding!</h3>
			</div>
		</div>
	);
};

export default Empty;