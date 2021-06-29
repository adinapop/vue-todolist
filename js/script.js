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
        }
        }
    }
)