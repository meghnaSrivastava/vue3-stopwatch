let id = null;
const Counter = {
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        stopTimer() {
            clearInterval(id);
        },
        restartTimer() {
            id = setInterval(() => {
                this.counter++;
            }, 1000);
        },
        resetTimer() {
            this.counter = 0;
        },
    },
    template: `<div>Timer - {{counter}}
    <br>
    <button @click="stopTimer()">Stop</button>
    <button @click="restartTimer()">Restart</button>
    <button @click="resetTimer()">Reset</button></div>`,
    mounted() {
        id = setInterval(() => {
            this.counter++;
        }, 1000);
    },
};

export default Counter;