import ServiceBlock from '../components/Molecules/ServiceBlock';

export default {
  title: 'Molecules/ServiceBlock',
  component: ServiceBlock,
  argTypes: {
    src: {
      defaultValue: '/images/services/img_services_01@2x.jpg'
    },
    alt: {
      defaultValue: 'テーブルを囲む8人分の椅子がある会議室の画像'
    }
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ServiceBlock },
  template: '<ServiceBlock v-bind="$props">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</ServiceBlock>'
})
