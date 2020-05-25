import $ from 'jquery';
import TreeView from './plugins/admin-lte/treeview';

class PeskyUI {

    static get defaultInitializers() {
        return [
            'initLeftSidebar',
            'initRightSidebar',
        ];
    }

    static get defaults() {
        return {
            //< array of functions to call in constructor (strings - call PeskyUI methods, functions - call custom methods
            initializers: PeskyUI.defaultInitializers,
            leftSidebarSelector: '#left-sidebar',
            rightSidebarSelector: '#right-sidebar',
            sidebarMenuContainerSelector: '.menu-container',
            sidebarScrollContainerSelector: '.scrollable',
        };
    }

    constructor(options) {
        if (options && $.isPlainObject(options)) {
            options = {};
        }
        this.options = $.extend({}, PeskyUI.defaults, options);

        for (let key in this.options.initializers) {
            let initializer = this.options.initializers[key];
            if (typeof initializer === 'function') {
                initializer.call(this);
            } else {
                this[initializer]();
            }
        }
    }

    initLeftSidebar() {
        this.$leftSidebar = $(this.options.leftSidebarSelector);
        if (this.$leftSidebar.length) {
            this.$leftSidebar.find(this.options.sidebarMenuContainerSelector).Treeview();
            this.$leftSidebar.find(this.options.sidebarScrollContainerSelector).SimpleScrollbar();
        }
    }

    initRightSidebar() {
        this.$rightSidebar = $(this.options.leftSidebarSelector);
        if (this.$rightSidebar.length) {
            this.$rightSidebar.find(this.options.sidebarMenuContainerSelector).Treeview();
            this.$rightSidebar.find(this.options.sidebarScrollContainerSelector).SimpleScrollbar();
        }
    }

}

$(function () {
    const dataKey = 'pesky-ui';
    if (!$(document).data(dataKey)) {
        const data = new PeskyUI(typeof PeskyUIConfig === 'undefined' ? {} : PeskyUIConfig);
        $(document).data(dataKey, data);
    }
});

export default PeskyUI;