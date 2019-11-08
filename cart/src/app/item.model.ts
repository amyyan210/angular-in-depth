export class Item {

	constructor(
		public name: string,
		public isRedeemingReward: boolean,
		public isRedeemingOffer: boolean,
		public menuPrice: number,
		public offerPrice?: number,
		public rewardPrice?: number) {
	}

}
