import Heading1 from '../components/Atoms/Heading1';

export default {
  title: 'Atom/Heading1',
  component: Heading1,
  argTypes: {
    center: {
      description: '中央寄せの設定をします。',
    },
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Heading1 },
  template: '<Heading1 v-bind="$props"></Heading1>'
})
