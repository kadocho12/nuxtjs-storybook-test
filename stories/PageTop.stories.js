import PageTop from '../components/Atoms/PageTop';

export default {
  title: 'Atom/PageTop',
  component: PageTop,
  argTypes: {
    
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PageTop },
  template: '<PageTop v-bind="$props" />'
})
