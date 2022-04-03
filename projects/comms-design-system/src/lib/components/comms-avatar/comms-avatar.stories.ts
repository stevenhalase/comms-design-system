// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {
  CommsAvatarComponent,
  CommsAvatarSizeEnum,
} from './comms-avatar.component';

export default {
  title: 'Comms / Avatar',
  component: CommsAvatarComponent,
  argTypes: {},
} as Meta;

const Template: Story<CommsAvatarComponent> = (args: CommsAvatarComponent) => ({
  props: args,
});

export const Small = Template.bind({});
Small.args = {
  imageUrl: 'https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg',
  size: CommsAvatarSizeEnum.SMALL,
};

export const Medium = Template.bind({});
Medium.args = {
  imageUrl: 'https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg',
  size: CommsAvatarSizeEnum.MEDIUM,
};

export const Large = Template.bind({});
Large.args = {
  imageUrl: 'https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg',
  size: CommsAvatarSizeEnum.LARGE,
};
