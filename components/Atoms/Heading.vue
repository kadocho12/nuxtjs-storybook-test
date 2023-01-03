<template>
  <compnent
    :is="tag"
    :class="[headingClass, {'--center': center}]"
  >
    <slot>default</slot>
  </compnent>
</template>
<script>
export default {
  props: {
    center: {
      type: Boolean,
      default: false,
    },
    level: {
      type: Number,
      required: true
    },
    headingClass: {
      type: String,
      required: true
    }
  },
  computed: {
    tag() {
      return `h${this.level}`
    },
  },
}
</script>

<style lang="scss" scoped>
.heading1 {
  @include headFont;
  @include lineHeightCrop(1.5);
  @include setNextSpace;
  line-height: 1.5;
  font-weight: $medium;

  @media #{$screenSize_XS} {
    @include fontSize(28);
  }
  @media #{$screenSize_S} {
    @include fontSize(44);
  }
}

.heading1--center {
  text-align: center;
}

.heading2 {
  @include headFont;
  @include lineHeightCrop(1.5);
  @include setNextSpace;
  line-height: 1.5;
  font-weight: $medium;

  border-left: 6px solid $mainColor;
  padding-left: 16px;
  @media #{$screenSize_XS} {
    @include fontSize(22);
  }
  @media #{$screenSize_S} {
    @include fontSize(32);
  }
}

.heading3 {
  @include headFont;
  @include lineHeightCrop(1.5);
  @include setNextSpace;
  line-height: 1.5;
  font-weight: $medium;
  /* color: red; */

  @media #{$screenSize_XS} {
    @include fontSize(18);
  }
  @media #{$screenSize_S} {
    @include fontSize(22);
  }
}

.--center {
  text-align: center;
}
</style>