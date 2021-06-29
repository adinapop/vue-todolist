Vue.config.devtools = true;

new Vue (
    {
        el: "#app",
        data: {
            toDoList: [
                "Fare i compiti",
                "Fare la spesa",
                "Fare il bucato"
            ],
            newTaskToDo: ""
        },

        methods: {
            addTask: function () {
                this.toDoList.push(this.newTaskToDo);
                // aggiungendo dopo una stringa vuota ci elimina quello scritto precedentemnte e lascia spazio nuovo per scrivere
                this.newTaskToDo = "";
            },
            
            deleteTask: function(index) {
                //da questa lista togli un elemento a partire dall'index = che è lo start
                this.toDoList.splice(index, 1);
            }
        }
    }
)