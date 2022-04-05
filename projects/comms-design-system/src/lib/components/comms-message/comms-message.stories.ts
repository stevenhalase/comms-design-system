// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { components } from '..';
import {
  CommsMessageComponent,
  CommsMessageTypeEnum,
} from './comms-message.component';

export default {
  title: 'Comms / Message',
  component: CommsMessageComponent,
  decorators: [
    moduleMetadata({
      declarations: [...components],
      imports: [CommonModule],
    }),
  ],
  argTypes: {},
} as Meta;

const Template: Story<CommsMessageComponent> = (
  args: CommsMessageComponent
) => ({
  props: args,
});

export const Outgoing = Template.bind({});
Outgoing.args = {
  userImageUrl:
    'https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg',
  text: 'something',
  type: CommsMessageTypeEnum.OUTGOING,
};

export const Incoming = Template.bind({});
Incoming.args = {
  userImageUrl:
    'https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg',
  text: 'something',
  type: CommsMessageTypeEnum.INCOMING,
};
