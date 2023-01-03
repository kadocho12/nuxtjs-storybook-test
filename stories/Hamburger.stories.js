import Hamburger from '../components/Atoms/Hamburger';

export default {
  title: 'Atom/Hamburger',
  component: Hamburger,
  argTypes: {

  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Hamburger },
  template: '<Hamburger v-bind="$props" />'
})
