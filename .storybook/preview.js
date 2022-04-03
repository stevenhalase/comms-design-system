import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

export const decorators = [
  (storyFunc, context) => {
    const story = storyFunc();
    const theme = context.globals.theme;
    const isLight = theme === 'light';
    const decorated = {
      ...story,
      template: `<div class="${theme}-theme" style="padding:15px;${
        isLight ? '' : 'background-color:#202022;'
      }">${story.template}</div>`,
    };
    //debugger;
    return decorated;
  },
];
