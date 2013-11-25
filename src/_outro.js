    /**
     * Expose recycle
     */
    // AMD suppport
    if (typeof root.define === 'function' && root.define.amd !== undefined) {
        root.define('recycle', [], function () {
            return recycle;
        });

    // CommonJS suppport
    } else if (typeof module !== 'undefined' && module.exports !== undefined) {
        module.exports = recycle;

    // Default
    } else {
        root.recycle = recycle;
    }

}(this));
