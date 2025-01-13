import template from './sw-cms-el-prototype.html.twig';
import './sw-cms-el-prototype.scss';

Shopware.Component.register('sw-cms-el-prototype', {
    template,

    mixins: ['cms-element'],

    computed: {
        textAreaContent() {
            return this.element.config.textAreaContent.value || '';
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('prototype');
        },
    },
});
