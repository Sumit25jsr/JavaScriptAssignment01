swapString = function swapString(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
document.write(swapString('SumIt SriVAstAva'));