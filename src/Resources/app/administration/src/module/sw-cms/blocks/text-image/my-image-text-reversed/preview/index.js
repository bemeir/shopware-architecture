// <plugin root>/src/Resources/app/administration/src/module/sw-cms/blocks/text-image/my-image-text-reversed/preview/index.js
import template from './sw-cms-preview-my-image-text-reversed.html.twig';

Shopware.Component.register('sw-cms-preview-my-image-text-reversed', {
    template,
    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset');
        },
    },
});
