import Vue from "vue";



const thumbs = {
    template: "#slider-thumbs",
    props: {
        works: Array,
        currentWork: Object
    }
};

const btns = {
    template: "#slider-btns",
    methods: {
        slide(direction) {
          switch (direction) {
            case "next":
              break;
            case "prev":
              break;
          }
        }
      }
};

const tags = {
    template: "#slider-tags",
    props: {
        tagsArray: Array
    }
};


const info = {
    template: "#slider-info",
    components: {
        tags
    },
    props: {
        currentWork: Object
    },
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(',')
        }
    }
};

const display = {
    template: "#slider-display",
    components: {
        btns, thumbs
    },
    props: {
        works: Array,
        currentWork: Object,
        currentIndex: Number
    },
    computed: {
        reversedWorks() {
            const works = [...this.works];
            return works.reverse();
        }
    }
};
new Vue ({
    template: "#slider-container",   // Откуда взять
    el: "#slider-components",         // Куда примонтировать    
    components: {
        display,
        info
    },
    data() {
        return {
            works: [],
            currentIndex: 0
        };
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        }
    },
    watch: {
        currentIndex(value) {
            this.makeInfiniteLoopForCurIndex(value);
        }
    },
    methods: {
        makeInfiniteLoopForCurIndex(value) {
            const worksAmount = this.works.length - 1;
            if (value > worksAmount) this.currentIndex = 0;
            if (value < 0) this.currentIndex = worksAmount;
        },
        makeArrWithRequiredImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/${item.photo}`);
                item.photo = requiredPic;

                return item;
            })
        },
        handleSlide(direction) {
            switch (direction) {
                case 'next':
                    this.currentIndex++;
                    break;
                case 'prev':
                    this.currentIndex--;
                    break;
            }
        }
    },
    created() {
        const data = require('../data/works.json');
        this.works = this.makeArrWithRequiredImages(data);

        this.works = this.works;
    }
})
