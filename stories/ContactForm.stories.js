import ContactForm from '../components/Organisms/ContactForm';

export default {
  title: 'Organisms/ContactForm',
  component: ContactForm,
  argTypes: {
    
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ContactForm },
  template: '<ContactForm v-bind="$props" />'
})
