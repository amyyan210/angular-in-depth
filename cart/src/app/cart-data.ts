import { Item } from './item.model';

export class CartData {

	const regularCart: Item[] =
	[
		{
			name: `Avocado Bacon Burger Whatameal`,
			isRedeemingReward: false,
			isRedeemingOffer: false,
			menuPrice: 4.50
		},
		{ 
			name: `Apple Pie`,
			isRedeemingReward: false,
			isRedeemingOffer: false,
			menuPrice: 1.00
		}
	];
	
	const cartWithReward: Item[] =
	[
		{ 
			name: `Whataburger Whatameal`,
			isRedeemingReward: false,
			isRedeemingOffer: false,
			menuPrice: 4.50
		},
		{ 
			name: `Medium fries`,
			isRedeemingReward: true,
			isRedeemingOffer: false,
			menuPrice: 1.00,
			rewardPrice: 0
		},
		{ 
			name: `Breakfast taquito`,
			isRedeemingReward: false,
			isRedeemingOffer: false,
			menuPrice: 1.75
		}
	];
	
	const cartWithOffer: Item[] =
	 [
		{ 
			name: `Whatachicken`,
			isRedeemingReward: false,
			isRedeemingOffer: false,
			menuPrice: 4.24 }
		{ 
			name: `Whataburger Jr.`,
			isRedeemingReward: false,
			isRedeemingOffer: true,
			menuPrice: 3.50,
			offerPrice: 0
		},
		{ 
			name: `Fruit chew`,
			isRedeemingReward: false,
			isRedeemingOffer: false,
			menuPrice: 0.99
		}
	];
	
	const regularFries: Item = {
		name: 'Large fries',
		isRedeemingReward: false,
		isRedeemingOffer: false,
		menuPrice: 1.50
	}
	
	const rewardShake: Item = {
		name: `Shake`,
		isRedeemingReward: true,
		isRedeemingOffer: false,
		menuPrice: 1.50,
		rewardPrice: 0
	}
	
	const offerBurger: Item = {
		name: `Whataburger Jr.`,
		isRedeemingReward: false,
		isRedeemingOffer: true,
		menuPrice: 3.50,
		offerPrice: 0
	}
}
