import Vue from 'vue';

const skill = {
    template: "#skill",
    props: {
        skillNameComp: String,
        skillPercentComp: Number
    },
    methods: {
        drawColoredCircle() {
            const circle = this.$refs['color-circle'];
            const dashArray = parseInt(
            getComputedStyle(circle).getPropertyValue('stroke-dasharray')
            );
            const percent = (dashArray / 100) * (100 - this.skillPercentComp);

            circle.style.strokeDashoffset = percent;
        }
    },
    mounted() {
        this.drawColoredCircle();
    }
}

const skillsRow = {
    template: "#skills-row",
    components: {
        skill
    },
    props: {
        skillRowObject: Object
    }
}

new Vue ({
    el: "#skills-component",
    template: "#skills-list",
    components: {
        skillsRow
    },
    data() {
        return {
            skillsData: {}
        }
    },
    created() {
        const data = require("../data/skills.json");
        this.skillsData = data;
    }
})