module.exports = {
    getFilterObject: function(filter) {

        var filterObject = {};

        const { /** KEYS */ } = filter;

        if (typeof /** KEY */ != 'undefined') {
            filterObject.KEY = KEY;
        }

        console.log(filterObject);
        return filterObject;
    }
}