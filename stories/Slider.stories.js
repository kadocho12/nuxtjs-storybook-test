import Slider from '../components/Molecules/Slider';

export default {
  title: 'Molecules/Slider',
  component: Slider,
  argTypes: {

  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Slider },
  template: '<Slider v-bind="$props" />'
})
