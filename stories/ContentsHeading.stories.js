import ContentsHeading from '../components/Molecules/ContentsHeading';

export default {
  title: 'Molecules/ContentsHeading',
  component: ContentsHeading,
  argTypes: {

  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ContentsHeading },
  template: '<ContentsHeading v-bind="$props" />'
})
