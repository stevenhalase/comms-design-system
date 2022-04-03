// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CommsLogoComponent, CommsLogoSizeEnum } from './comms-logo.component';

export default {
  title: 'Comms / Logo',
  component: CommsLogoComponent,
  argTypes: {},
} as Meta;

const Template: Story<CommsLogoComponent> = (args: CommsLogoComponent) => ({
  props: args,
});

export const Small = Template.bind({});
Small.args = {
  logoUrl: 'https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg',
  size: CommsLogoSizeEnum.SMALL,
};

export const Medium = Template.bind({});
Medium.args = {
  logoUrl: 'https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg',
  size: CommsLogoSizeEnum.MEDIUM,
};

export const Large = Template.bind({});
Large.args = {
  logoUrl: 'https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg',
  size: CommsLogoSizeEnum.LARGE,
};
