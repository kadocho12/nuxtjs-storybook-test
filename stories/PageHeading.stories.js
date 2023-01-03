import PageHeading from '../components/Molecules/PageHeading';

export default {
  title: 'Molecules/PageHeading',
  component: PageHeading,
  argTypes: {

  }
}

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PageHeading },
  template: '<PageHeading v-bind="$props"><template v-slot:main>About us</template><template v-slot:sub>私たちについて</template></PageHeading>'
})
