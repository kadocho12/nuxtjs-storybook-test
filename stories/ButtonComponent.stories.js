import ButtonComponent from '../components/Atoms/ButtonComponent';

export default {
  title: 'Atom/Button',
  component: ButtonComponent,
  argTypes: {
    link: {
      defaultValue: "#"
    }
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonComponent },
  template: '<ButtonComponent v-bind="$props" />'
})
