import Heading from '../components/Atoms/Heading';

export default {
  title: 'Atom/Heading',
  component: Heading,
  argTypes: {
    level: {
      description: '見出しレベルを設定します。',
      defaultValue: 1,
      control: {
        type: 'number',
        min: 1,
        max: 3,
        step: 1
      }
    },
    headingClass: {
      description: '見出しスタイルを設定します。',
      defaultValue: 'heading1',
      control: {
        type: 'select',
        options: ['heading1', 'heading2', 'heading3']
      }
    }
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Heading },
  template: '<Heading v-bind="$props" />'
})
