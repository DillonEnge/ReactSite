import { Component } from 'react';

class AdvancedComponent extends Component {

    bindParams(method, ...params) {
		return (...args) => {
			if (method && method.constructor && method.apply) {
				method.apply(this, params.concat(args));
			}
		};
	}
}

export default AdvancedComponent;