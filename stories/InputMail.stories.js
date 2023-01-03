import InputMail from '../components/Molecules/InputMail';

export default {
  title: 'Molecules/InputMail',
  component: InputMail,
  argTypes: {

  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputMail },
  template: '<InputMail v-bind="$props"></InputMail>'
})
