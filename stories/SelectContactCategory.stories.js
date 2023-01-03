import SelectContactCategory from '../components/Molecules/SelectContactCategory';

export default {
  title: 'Molecules/SelectContactCategory',
  component: SelectContactCategory,
  argTypes: {

  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SelectContactCategory },
  template: '<SelectContactCategory v-bind="$props"></SelectContactCategory>'
})
