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

        // legge sia il JS che l'HTML
        mounted() {
            // giusto per provare, faccio partire l'autofocus dopo 1s
            setTimeout(() => {
                this.autofocusFunction();
            }, 1500);
        },

        methods: {
            autofocusFunction: function() {
                const focusElement = document.getElementById("autofocus-input");
                focusElement.focus();
            },

            toUpperCase: function(word) {
                word.charAt(0).toUpperCase() + word.slice(1);
            },

            addTask: function () {
                this.newTaskToDo = this.newTaskToDo[0].toUpperCase() + this.newTaskToDo.slice(1);
                this.toDoList.push(this.newTaskToDo);
                // aggiungendo dopo una stringa vuota ci elimina quello scritto precedentemnte e lascia spazio nuovo per scrivere
                this.newTaskToDo = "";
                this.autofocusFunction();
            },
            
            deleteTask: function(index) {
                //da questa lista togli un elemento a partire dall'index = che è lo start
                this.toDoList.splice(index, 1);
                this.autofocusFunction();
            },
        }
    }
)