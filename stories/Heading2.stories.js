import Heading2 from '../components/Atoms/Heading2';

export default {
  title: 'Atom/Heading2',
  component: Heading2,
  argTypes: {
    center: {
      description: '中央寄せの設定をします。',
    },
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Heading2 },
  template: '<Heading2 v-bind="$props"></Heading2>'
})
