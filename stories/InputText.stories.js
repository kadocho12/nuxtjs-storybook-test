import InputText from '../components/Molecules/InputText';

export default {
  title: 'Molecules/InputText',
  component: InputText,
  argTypes: {

  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputText },
  template: '<InputText v-bind="$props"></InputText>'
})
