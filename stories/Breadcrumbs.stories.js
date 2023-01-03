import Breadcrumbs from '../components/Molecules/Breadcrumbs';

export default {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    breadcrumbsLists: {
      defaultValue: [
        {
          id: 1,
          href: "/",
          item: "ホーム",
        },
        {
          id: 2,
          href: "/news",
          item: "私たちについて",
        },
      ]
    }
  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Breadcrumbs },
  template: '<Breadcrumbs v-bind="$props" />'
})
