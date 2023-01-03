import InputName from '../components/Molecules/InputName';

export default {
  title: 'Molecules/InputName',
  component: InputName,
  argTypes: {

  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputName },
  template: '<InputName v-bind="$props"></InputName>'
})
