// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CommsRadioComponent } from './comms-radio.component';

export default {
  title: 'Comms / Radio',
  component: CommsRadioComponent,
  argTypes: {},
} as Meta;

const Template: Story<CommsRadioComponent> = (args: CommsRadioComponent) => ({
  props: args,
});

export const Label = Template.bind({});
Label.args = {
  label: 'Remember me',
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'Remember me',
  value: true,
};
