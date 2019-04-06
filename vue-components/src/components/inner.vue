<template lang="pug">
    div.root-title
        input(
            v-bind="$attrs"
        )
        button(
            v-on="$listeners"
        ) Отправить
</template>

<script>

export default {
  inheritAttrs: false,
  data () {
    return {
      title: 'Hello, World'
    };
  },
  methods: {
    handleClick() {
      console.log('click');
    }
  },
  mounted() {
    console.log(this.$attrs);
  }
};
</script>
