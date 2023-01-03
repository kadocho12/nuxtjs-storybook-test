import Card from '../components/Molecules/Card';

export default {
  title: 'Molecules/Card',
  component: Card,
  argTypes: {
    src: {
      description: 'srcを設定します。',
      defaultValue: '/images/img_home_visual_1@2x.jpg',
    },
    alt: {
      description: 'altを設定します。',
      defaultValue: 'altを設定してください'
    },
    text: {
      description: 'リンク先の内容の説明文が入ります。',
    },
    title: {
      description: 'リンク先のタイトルが入ります。',
    }
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template: '<Card v-bind="$props"><template v-slot:title>タイトルが入ります</template><template v-slot:text>テキストが入ります。</template></Card>'
})
