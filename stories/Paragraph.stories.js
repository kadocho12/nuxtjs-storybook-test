import Paragraph from '../components/Atoms/Paragraph';

export default {
  title: 'Atom/Paragraph',
  component: Paragraph,
  argTypes: {
    default: {
      description: 'デフォルトのslotです。'
    }
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Paragraph },
  template: '<Paragraph v-bind="$props">これはParagraphコンポーネントです。</Paragraph>'
})
