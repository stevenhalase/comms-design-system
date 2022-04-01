// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CommsInputComponent } from './comms-input.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Comms / Input',
  component: CommsInputComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<CommsInputComponent> = (args: CommsInputComponent) => ({
  props: args,
});

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Text.args = {};

export const Placeholder = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Placeholder.args = {
  placeholder: 'Username',
};

export const Label = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Label.args = {
  label: 'Username',
};

export const Value = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Value.args = {
  label: 'Username',
  value: 'korengali',
};
