import React from 'react'
import PropTypes from 'prop-types';

const Portfolio = ({ portfolioImages, labels }) => {
	if (!labels) {
    	return null;
  	}

	return (
		<div id='portfolio' className='py-16 bg-gray-800 text-white'>
			<div className='container mx-auto px-60'>
				<h2 className='h1 text-center uppercase'>Questo è il Portfolio</h2>
				<ul className='grid grid-cols-4 gap-0'>
					{portfolioImages.edges.map((brand, i) => (
						<li
							key={brand.node.id} 
							className='portfolio__element m-px flex bg-white'
						>
							<div 
								className="portfolio__image bg-no-repeat bg-cover bg-center w-full m-2"
								style={{backgroundImage: `url(${brand.node.publicURL})`}}
							>
								{brand.node.id === labels[i].id ? labels[i].label : null}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

Portfolio.propTypes = {
  brands: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })
}

export default Portfolio;

