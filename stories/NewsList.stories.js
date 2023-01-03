import NewsList from '../components/Molecules/NewsList';

export default {
  title: 'Molecules/NewsList',
  component: NewsList,
  argTypes: {
    
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NewsList },
  template: '<NewsList v-bind="$props" />'
})
