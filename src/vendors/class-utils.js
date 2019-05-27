"use strict";

/**
 * A set of utility functions for Abitol classes.
 *
 * @class app.helpers.class-utils
 */
module.exports = {
    /**
     * A generic accessor for Abitbol classes.
     *
     * @method getter
     * @static
     */
    getter: function() {
        return this.$data[this.$computedPropertyName];
    },

    /**
     * A generic mutator for Abitbol classes.
     *
     * @method setter
     * @static
     */
    setter: function(value) {
        this.$data[this.$computedPropertyName] = value;
    },

    /**
     * Apply parameters to Abitbol classes' computed properties.
     *
     * @method applyProperties
     * @static
     * @param {abitbol} instance Any Abitbol class instance.
     * @param {Object} params Parameters to apply to the class.
     */
    applyProperties: function(instance, params) {
        if (!params) {
            return;
        }
        for (var key in params) {
            if (instance.$map.computedProperties[key]) {
                instance[key] = params[key];
            }
        }
    }
};
