import InputNameKana from '../components/Molecules/InputNameKana';

export default {
  title: 'Molecules/InputNameKana',
  component: InputNameKana,
  argTypes: {

  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputNameKana },
  template: '<InputNameKana v-bind="$props"></InputNameKana>'
})
