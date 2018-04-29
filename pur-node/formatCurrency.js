var formatCurrency = function(input) {
	return input.toLocaleString('en-US', {style: 'currency', currency: 'USD', currencyDisplay: 'symbol'});
}

module.exports = formatCurrency;
