<template lang="pug">
div.component
    h1.title Hello, World!
    hr
    inner(
      placeholder="Текст-подсказка"
      type="password"
      @click.native="handleClick"
    )
</template>

<script>
import inner from './components/inner';

export default {
  name: 'app',
  components: {
    inner: inner
  },
  data () {
    return {
      msg: 'Hello, World!'
    }
  },
  methods: {
    handleClick(e) {
      console.log('handleClick', e.target);
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  border-bottom: 1px solid black;
  color:green;
}

.description {
  color: blue;
}

.button {
  background: yellow;
}
</style>
