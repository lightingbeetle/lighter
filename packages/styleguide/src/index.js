import React from 'react';
import styleguide from './styleguide';

import Page from './components/Page';

import Hello from './pages/Hello.mdx';
import KitchenSink from './pages/KitchenSink.mdx';
import PreviewDocs from './components/Preview/Preview.docs.mdx';
import ComponentDocsDocs from './components/ComponentDocs/ComponentDocs.docs.mdx';
import CodeDocs from './components/Code/Code.docs.mdx';
import ColorPaletteDocs from './components/ColorPalette/ColorPalette.docs.mdx';

styleguide({
  config: {
    version: 'lighter-styleguide',
    name: 'Lighter',
    styleguideBasePath: '/'
  },
  routes: [
    {
      title: 'Hello',
      path: '/',
      render: <Page render={Hello} />
    },
    {
      title: 'Kitchen Sink',
      path: '/Kitchen Sink',
      render: <Page render={KitchenSink} />
    },
    {
      title: 'Components',
      path: '/components',
      nodes: [
        {
          title: 'Code',
          path: '/code',
          render: <Page render={CodeDocs} />
        },
        {
          title: 'ColorPalette',
          path: '/color-palette',
          render: <Page render={ColorPaletteDocs} />
        },
        {
          title: 'ComponentDocs',
          path: '/component-docs',
          render: <Page render={ComponentDocsDocs} />
        },
        {
          title: 'Preview',
          path: '/preview',
          render: <Page render={PreviewDocs} />
        }
      ]
    }
  ]
});
