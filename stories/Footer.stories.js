import Footer from '../components/Organisms/Footer';

export default {
  title: 'Organisms/Footer',
  component: Footer,
  argTypes: {
    
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Footer },
  template: '<Footer v-bind="$props" />'
})
