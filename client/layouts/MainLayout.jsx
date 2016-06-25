import React from 'react';
import Header from '../Header.jsx';


export const MainLayout = ({content}) => (
		<div className="">
			<header>
				<Header />
			</header>
			<main>
				<div className="container main-container">
					{content}
				</div>
			</main>
		</div>
)