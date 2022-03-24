import React from 'react';
import NavAbout from './NavAbout/NavAbout';

const AboutApp = () => {
	return (
		<>
			<NavAbout />
			<div
				style={{
					textAlign: 'left',
					width: '50%',
					margin: 'auto',
				}}
			>
				<h1>About the App</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam et
					optio vel in voluptatibus placeat inventore hic, ducimus consequuntur,
					dolorum doloribus. Totam explicabo, ducimus laborum ad voluptatibus
					vel consequatur repellendus.
				</p>
			</div>
		</>
	);
};

export default AboutApp;
