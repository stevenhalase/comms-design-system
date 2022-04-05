// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { components } from '..';
import { CommsMessageTypeEnum } from '../comms-message/comms-message.component';
import {
  CommsMessageInterface,
  CommsMessagingComponent,
} from './comms-messaging.component';

export default {
  title: 'Comms / Messaging',
  component: CommsMessagingComponent,
  decorators: [
    moduleMetadata({
      declarations: [...components],
      imports: [CommonModule],
    }),
  ],
  argTypes: {},
} as Meta;

const Template: Story<CommsMessagingComponent> = (
  args: CommsMessagingComponent
) => ({
  props: args,
});

const messages: CommsMessageInterface[] = [
  {
    userImageUrl:
      'https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg',
    text: 'This is nice.',
    date: new Date(),
    type: CommsMessageTypeEnum.OUTGOING,
  },
  {
    userImageUrl:
      'https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_400x400.jpg',
    text: 'It sure is bud.',
    date: new Date(),
    type: CommsMessageTypeEnum.INCOMING,
  },
  {
    userImageUrl:
      'https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg',
    text: 'I like it.',
    date: new Date(),
    type: CommsMessageTypeEnum.OUTGOING,
  },
  {
    userImageUrl:
      'https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_400x400.jpg',
    text: 'Yee haw.',
    date: new Date(),
    type: CommsMessageTypeEnum.INCOMING,
  },
];

export const Default = Template.bind({});
Default.args = {
  messages,
};
