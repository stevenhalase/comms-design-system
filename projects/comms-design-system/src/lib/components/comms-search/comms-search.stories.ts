// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CommsSearchComponent } from './comms-search.component';

export default {
  title: 'Comms / Search',
  component: CommsSearchComponent,
  argTypes: {},
} as Meta;

const Template: Story<CommsSearchComponent> = (args: CommsSearchComponent) => ({
  props: args,
});

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Type to search',
};
export const Value = Template.bind({});
Value.args = {
  value: 'korengali',
};

export const Icon = Template.bind({});
Icon.args = {
  placeholder: 'Type to search',
  icon: 'search',
};
