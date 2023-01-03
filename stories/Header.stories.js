import Header from '../components/Organisms/Header';

export default {
  title: 'Organisms/Header',
  component: Header,
  argTypes: {
    
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Header },
  template: '<Header v-bind="$props" />'
})
