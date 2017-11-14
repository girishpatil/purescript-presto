const View = require("@juspay/mystique").baseView;

class HeaderWithArrow extends View {

	constructor(props, children, state) {
		super(props, children, state);
		this.shouldCacheScreen = false;
	}

}

module.exports = HeaderWithArrow;
