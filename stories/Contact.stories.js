import Contact from '../components/Organisms/Contact';

export default {
  title: 'Organisms/Contact',
  component: Contact,
  argTypes: {
    
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Contact },
  template: '<Contact v-bind="$props" />'
})
