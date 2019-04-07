import Vue from 'vue';
import Flickity from 'vue-flickity';
 
new Vue ({
    el:"#reviews",
    components: {
    Flickity
  },
 
  data() {
    return {
      flickityOptions: {
      prevNextButtons: false,
      pageDots: false,
      groupCells: 2
 
      // any options from Flickity can be used
      }
    }
  },
 
  methods: {
    next() {
      this.$refs.flickity.next();
    },
 
    previous() {
      this.$refs.flickity.previous();
    }
  }
});