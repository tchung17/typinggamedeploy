<template>
    <div>
        <h3>{{ this.getDifficulty }}</h3>
        <el-progress :stroke-width="24" :percentage="this.getTime" :color="colors"></el-progress>
        <br>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'indicator',
    data() {
        return {
            colors: [
                {color: '#f56c6c', percentage: 20},
                {color: '#e6a23c', percentage: 40},
                {color: '#5cb87a', percentage: 60},
                {color: '#1989fa', percentage: 80},
                {color: '#6f7ad3', percentage: 100}
                ]
        }
    },
    computed: {
        ...mapGetters([
            'getDifficulty',
            'getTime',
        ])
    },
    
}
</script>

<style scoped>

</style>