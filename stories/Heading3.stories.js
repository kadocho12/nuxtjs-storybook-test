import Heading3 from '../components/Atoms/Heading3';

export default {
  title: 'Atom/Heading3',
  component: Heading3,
  argTypes: {
    center: {
      description: '中央寄せの設定をします。',
    },
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Heading3 },
  template: '<Heading3 v-bind="$props"></Heading3>'
})
