import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'prototype',
    label: 'sw-cms.elements.customPrototypeElement.label',
    component: 'sw-cms-el-prototype',
    configComponent: 'sw-cms-el-config-prototype',
    previewComponent: 'sw-cms-el-preview-prototype',
    defaultConfig: {
        textAreaContent: {
            source: 'static',
            value: '', // Default empty text
        },
        media: {
            source: 'static',
            value: null, // Default null media
        },
        position: {
            source: 'static',
            value: 'image-left', // Default position (image on the left)
        },
    },
});
