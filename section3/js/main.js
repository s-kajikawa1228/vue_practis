var app = new Vue({
    el: '#app',
    data: {
        newItem: '',
        todos: []
    },
    methods: {
        addItem: function(e) {
            if(this.newItem == '')return
            var todo = {
                item: this.newItem,
                isDone: false
            }
            this.todos.push(todo)
            this.newItem = ''
        },
        itemDelete: function(idx) {
            this.todos.splice(idx, 1)
        }
    }

})