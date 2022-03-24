import React from 'react';
import NavAbout from './NavAbout/NavAbout';
const AboutAuthor = () => {
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
				<h1>About the Author</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
					delectus velit ducimus, molestias maxime vero quis voluptates. Sunt,
					autem iste!
				</p>
			</div>
		</>
	);
};

export default AboutAuthor;