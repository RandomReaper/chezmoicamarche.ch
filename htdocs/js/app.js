const vueApp = new Vue({
    el: '#vapp',
    data: {
        checked: false,
        keysPressed: {},
    },
    methods: {
        add: function (event) {
            this.keysPressed[event.key] = true;
            if (this.keysPressed['s'] && this.keysPressed['n'] && this.keysPressed['o'] && this.keysPressed['w']) {
                this.checked = !this.checked;
            }
        },
        del: function (event) {
            this.keysPressed[event.key] = false;
        }
    },
    created: function () {
        window.addEventListener('keydown', function (event) {
            vueApp.add(event);
        });
        window.addEventListener('keyup', function (event) {
            vueApp.del(event);
        });
    }
})
