import ImageComponent from '../components/Atoms/ImageComponent';

export default {
  title: 'Atom/ImageComponent',
  component: ImageComponent,
  argTypes: {
    src: {
      description: 'srcを設定します。',
      defaultValue: '/images/img_home_visual_1@2x.jpg',
    },
    alt: {
      description: 'altを設定します。',
      defaultValue: 'altを設定してください'
    }
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ImageComponent },
  template: '<ImageComponent v-bind="$props" />'
})
