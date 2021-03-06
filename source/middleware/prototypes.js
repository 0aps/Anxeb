'use strict';

module.exports = function () {
	if (!String.prototype.padStart) {
		String.prototype.padStart = function padStart(targetLength, padString) {
			targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
			padString = String(padString || ' ');
			if (this.length > targetLength) {
				return String(this);
			}
			else {
				targetLength = targetLength - this.length;
				if (targetLength > padString.length) {
					padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
				}
				return padString.slice(0, targetLength) + String(this);
			}
		};
	}

	if (!String.prototype.repeat) {
		String.prototype.repeat = function repeat(count) {
			return Array(count).join(String(this))
		};
	}

	if (!String.prototype.toCamelCase) {
		String.prototype.toCamelCase = function () {
			return this.replace(/\s(.)/g, function ($1) { return $1.toUpperCase(); }).replace(/\s/g, '').replace(/^(.)/, function ($1) { return $1.toLowerCase(); });
		}
	}

	if (!String.prototype.toPascalCase) {
		String.prototype.toPascalCase = function (spaced) {
			if (spaced) {
				return this.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); })
			} else {
				return this.replace(/^./, function (str) { return str.toUpperCase(); })
			}
		}
	}

	if (!String.prototype.isTrue) {
		String.prototype.isTrue = function () {
			return this.toLowerCase() === "true" || this.toLowerCase() === "t" || this.toLowerCase() === "1" || this.toLowerCase() === "yes";
		}
	}
};
