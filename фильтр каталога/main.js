const getScrollXY = {
	scrOfX: () => {
		let scrOfX = 0;
		if ( typeof ( window.pageYOffset ) == 'number' ) {
			
			scrOfX = window.pageXOffset;
		} else if ( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
			
			scrOfX = document.body.scrollLeft;
		} else if ( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
			
			scrOfX = document.documentElement.scrollLeft;
		}
		
		return scrOfX;
	},
	scrOfY: () => {
		let scrOfY = 0;
		if ( typeof ( window.pageYOffset ) == 'number' ) {
			
			scrOfY = window.pageYOffset;
		} else if ( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
		
			scrOfY = document.body.scrollTop;
		} else if ( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
		
			scrOfY = document.documentElement.scrollTop;
		}
	
		return scrOfY;
	}
};

const getCoords = (elem) => {
	const box = elem.getBoundingClientRect();
	const body = document.body;
	const docEl = document.documentElement;
	const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
	const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
	const clientTop = docEl.clientTop || body.clientTop || 0;
	const clientLeft = docEl.clientLeft || body.clientLeft || 0;
	const top = box.top + scrollTop - clientTop;
	const left = box.left + scrollLeft - clientLeft;
	return {
		top: top,
		left: left,
		right: box.right,
		bottom: box.bottom,
		width: elem.clientWidth,
		height: elem.clientHeight
	};
};

let sectionView = (selector) => {

	return ( getScrollXY.scrOfY() >= Math.round(getCoords(document.querySelector(selector)).top - document.documentElement.clientHeight / 2) && 
					getScrollXY.scrOfY() <= Math.round(getCoords(document.querySelector(selector)).top) + 
					Math.round(getCoords(document.querySelector(selector)).height )
				 ) ? (console.log('true'), true) : (console.log('false'), false);
}


const imgPath = 'images/content/catalog/category/'

const catallogConfig = {
    catalogListFilter: [
		{
			text: 'All',
			category: 'all',
			selected: true
		},
		{
			text: 'Exterior',
			category: 'exterior',
		},
		{
			text: 'Lighting',
			category: 'lighting',
		},
		{
			text: 'Performance Parts',
			category: 'performance_parts',
		},
		{
			text: 'Trailer Parts',
			category: 'trailer_parts',
		},
		{
			text: 'Wheels and Tires',
			category: 'wheels_tires',
		},
		{
			text: 'Others',
			category: 'other',
		}
    ],
    catalogList: [
		{
			category: 'exterior',
			title: 'Bumpers',
			img: {
				src: `${imgPath}Exterior/Bamper/Bamper.png`,
				alt: 'Bamper'
			}
		},
		{
			category: 'exterior',
			title: 'Fairings',
			img: {
				src: `${imgPath}Exterior/FairRing/FairRing.png`,
				alt: 'FairRing'
			}
		},
		{
			category: 'exterior',
			title: 'Fairing Steps',
			img: {
				src: `${imgPath}Exterior/Fairing Steps/FairingSteps.png`,
				alt: 'FairingSteps'
			}
		},
		{
			category: 'exterior',
			title: 'Cab Extenders',
		},
		{
			category: 'exterior',
			title: 'Mirrors',
			img: {
				src: `${imgPath}Exterior/Mirror/Mirror.png`,
				alt: 'FairingSteps'
			}
		},
		{
			category: 'exterior',
			title: 'Grilles',
			img: {
				src: `${imgPath}Exterior/Grils/Grill.png`,
				alt: 'Grill'
			}
		},
		{
			category: 'exterior',
			title: 'Hoods',
			img: {
				src: `${imgPath}Exterior/Hoods/Hoods.png`,
				alt: 'Hoods'
			}
		},
		{
			category: 'exterior',
			title: 'Brackets',
			img: {
				src: `${imgPath}Exterior/Brackets and Hinge/Brackets-and-Hinge.png`,
				alt: 'Brackets'
			}
		},
		{
			category: 'exterior',
			title: 'Chrome Parts',
		},
		{
			category: 'exterior',
			title: 'Deer Guards',
			img: {
				src: `${imgPath}Exterior/Deer Guards/Deer-Guards.png`,
				alt: 'Deer Guards'
			}
		},
		{
			category: 'exterior',
			title: 'Fenders',
			img: {
				src: `${imgPath}Exterior/Fender/Fender.png`,
				alt: 'Fender'
			}
		},
		
		{
			category: 'lighting',
			title: 'Headlights',
			img: {
				src: `${imgPath}Light/Headlight/HeadLight.png`,
				alt: 'HeadLight'
			}
		},
		{
			category: 'lighting',
			title: 'Fog Lights',
			img: {
				src: `${imgPath}Light/Fog Light/FOG-LIGHTS.png`,
				alt: 'Fog Light'
			}
		},
		{
			category: 'lighting',
			title: 'Lamps',
			img: {
				src: `${imgPath}Light/Lamp/Lamp.png`,
				alt: 'Lamp'
			}
		},
		
		{
			category: 'performance_parts',
			title: 'Air Filters',
			img: {
				src: `${imgPath}Performance Parts/Air Filters/Air-Filters.png`,
				alt: 'Air Filters'
			}
		},
		{
			category: 'performance_parts',
			title: 'Condensers',
			img: {
				src: `${imgPath}Performance Parts/Condensers/Condensers.png`,
				alt: 'Condensers'
			}
		},
		{
			category: 'performance_parts',
			title: 'Oil Filters',
			img: {
				src: `${imgPath}Performance Parts/Oil Filter/Oil-Filters.png`,
				alt: 'Oil Filter'
			}
		},
		{
			category: 'performance_parts',
			title: 'Tanks',
			img: {
				src: `${imgPath}Performance Parts/Tanks/Tanks.png`,
				alt: 'Tanks'
			}
		},
		{
			category: 'performance_parts',
			title: 'Fuel Filters',
			img: {
				src: `${imgPath}Performance Parts/Fuel Filters/Fuel-Filters.png`,
				alt: 'Fuel Filters'
			}
		},
		{
			category: 'performance_parts',
			title: 'Fan Covers',
		},
		{
			category: 'performance_parts',
			title: 'Shock Absorbers',
			img: {
				src: `${imgPath}Performance Parts/Shock Absorbers/Shock-Absorbers.png`,
				alt: 'Shock Absorbers'
			}
		},
		{
			category: 'performance_parts',
			title: 'Air Springs',
			img: {
				src: `${imgPath}Performance Parts/Air Springs/Air-Springs.png`,
				alt: 'Air Springs'
			}
		},
		{
			category: 'performance_parts',
			title: 'Brake Systems',
			img: {
				src: `${imgPath}Performance Parts/Brake Systems/Brake-Systems.png`,
				alt: 'Brake Systems'
			}
		},
		{
			category: 'performance_parts',
			title: 'Water Filters',
			img: {
				src: `${imgPath}Performance Parts/Water Filter/Water-Filters.png`,
				alt: 'Water Filters'
			}
		},
		// trailer_parts
		{
			category: 'trailer_parts',
			title: 'Hoses',
			img: {
				src: `${imgPath}Trailer Parts/Hoses/Hoses.png`,
				alt: 'Hoses'
			}
		},
		{
			category: 'trailer_parts',
			title: 'Straps',
			img: {
				src: `${imgPath}Trailer Parts/Straps/Straps.png`,
				alt: 'Straps'
			}
		},
		{
			category: 'trailer_parts',
			title: 'Truck Handers',
			img: {
				src: `${imgPath}Trailer Parts/Termoking Doors/Termoking Doors.png`,
				alt: 'Termoking Doors'
			}
        },
        // wheels_tires
		{
			category: 'wheels_tires',
			title: 'Hub Caps',
			img: {
				src: `${imgPath}Wheels and Tires/Hub Caps/Hub-Caps.png`,
				alt: 'Hub Caps'
			}
		},
		{
			category: 'wheels_tires',
			title: 'Wheels',
			img: {
				src: `${imgPath}Wheels and Tires/Wheels/Wheels_02.png`,
				alt: 'Wheels'
			}
		},
		{
			category: 'wheels_tires',
			title: 'Tires',
			img: {
				src: `${imgPath}Wheels and Tires/Tires/Tires.png`,
				alt: 'Tires'
			}
		},
	
        // other
		{
			category: 'other',
			title: 'Air Chute'
		},
		{
			category: 'other',
			title: 'Exhaust Pipes'
		},
		{
			category: 'other',
			title: 'Switches'
		},
		{
			category: 'other',
			title: 'Sun Visors'
		},
	]
}



class CatalogFilter {
	constructor() {
		this.catalogList = catallogConfig.catalogList;
		this.catalogFilter = document.getElementById('catalog-filter');
		this.resultFilter = document.getElementById('filter-result');
		this._category = 'all';
		this._hiddenElements = this.catalogList.slice(5)
	};

	init() {
		this.renderCards(this.catalogList);
		this.catalogFilter.addEventListener('click', (e) => this.onCategoryChange(e));
		this.resultFilter.addEventListener('click', (e) => this.showMoreBtnClick(e));
	};

	getCategory(e) {
		e.preventDefault();
		e.stopPropagation();

		const el = e.target.closest('.catalog-filter-list__item');

		if (!el) return;

		const catalogFilterListCollection = Array.from(this.catalogFilter.querySelectorAll('.catalog-filter-list__item'));

		catalogFilterListCollection.forEach((item) => item.classList.remove('selected'));
		el.classList.add('selected');

		return el.dataset.category;
	};

	renderCards(catalogData, loadMore) {
		let catalogCardTemplate = [];

		if (!loadMore) {
			catalogData.forEach((item, index) => {
				if (index < 6) catalogCardTemplate.push(this.makeCard(item))
			})

			if (catalogData.length > 6) catalogCardTemplate.push(this.makeButton())

		} else {
			catalogData.forEach((item) => catalogCardTemplate.push(this.makeCard(item, 'hidden')));
		}

		let template = catalogCardTemplate.toString().replace(/,/g, '');

		this.resultFilter.insertAdjacentHTML('beforeEnd', template);
		this.animate(`#filter-result .filter-result__item${loadMore ? '_hidden' : ''}`);
	};

	onCategoryChange(e) {
		const clickResult = this.getCategory(e)

		if (!clickResult || clickResult === this._category) return;

		this._category = clickResult;
		this.resultFilter.innerHTML = '';

		const categoryToShow = this._category === 'all' ?
			this.catalogList :
			this.catalogList.filter((item) => item.category === this._category)

		this._hiddenElements = categoryToShow.slice(5);
		this.renderCards(categoryToShow);
	};

	showMoreBtnClick(e) {
		const btn = e.target.closest('[type="button"]');

		if (!btn) return

		btn.parentNode.remove();
		this.renderCards(this._hiddenElements, 'loadMore');
	}

	animate(selector) {
		anime({
			targets: selector,
			duration: function (t, i) {
				return 1000 + i * 250;
			},
			easing: 'easeOutExpo',
			delay: function (t, i) {
				return i * 20;
			},
			opacity: {
				value: [0, 1],
				duration: function (t, i) {
					return 250 + i * 50;
				},
				easing: 'linear'
			},
			translateY: [200, 0]
		});
	}

	makeCard(item, hidden) {
		return `
			<div class="filter-result__item ${hidden ? 'filter-result__item_hidden' : ''} col-12 col-lg-4" data-result="${item.category}">
				<div class="categories-card">
					<div class="categories-card__img-zone">
						<img src="${(item.img) ? item.img.src : '/images/content/catalog/catalog IMG Default.jpg'}" 
							 alt="${(item.img) ? item.img.alt : ''}"/>
					</div>
					<div class="categories-card__title">${item.title}</div>
					<button class="btn categories-card__btn" type="submit">Buy Now</button>
				</div>
			</div>`
	}

	makeButton() {
		return `
			<div class="filter-result__item filter-result__item_has-btn col-12">	
				<button class="btn filter-result__btn" type="button">Show More</button>
			</div>`
	};
};





let catalogFilter = new CatalogFilter();
catalogFilter.init();
// ========================================


var allCallbacks = anime({
	targets: '#filter-result .filter-result__item',
	duration: function(t,i) {
		return 1000 + i*250;
	},
	easing: 'easeOutExpo',
	delay: function(t,i) {
		return i * 20;
	},
	opacity: {
		value: [0,1],
		duration: function(t,i) {
			return 250 + i*50;
		},
		easing: 'linear'
	},
	translateY: [200,0]
});
