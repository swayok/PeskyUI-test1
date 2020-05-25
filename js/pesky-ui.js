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
            sidebarMenuContainerSelector: '.sidebar-menu',
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
            console.log(this.$leftSidebar, this.$leftSidebar.find(this.options.sidebarMenuContainerSelector), this.$leftSidebar.find(this.options.sidebarScrollContainerSelector));
            this.$leftSidebar.find(this.options.sidebarMenuContainerSelector).Treeview();
            let $scrollable = this.$leftSidebar.find(this.options.sidebarScrollContainerSelector);
            if (!$scrollable.length) {
                $scrollable = this.$leftSidebar;
            }
            $scrollable.SimpleScrollbar();
        }
    }

    initRightSidebar() {
        this.$rightSidebar = $(this.options.rightSidebarSelector);
        if (this.$rightSidebar.length) {
            this.$rightSidebar.find(this.options.sidebarMenuContainerSelector).Treeview();
            let $scrollable = this.$rightSidebar.find(this.options.sidebarScrollContainerSelector);
            if (!$scrollable.length) {
                $scrollable = this.$rightSidebar;
            }
            $scrollable.SimpleScrollbar();
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