const App = {
    data() {
        return {
            inputValue:'' 
        }
    },
    methods: {
        result(event) {
            this.inputValue=event.target.value
        }
    }
}

Vue.createApp(App).mount('#app')