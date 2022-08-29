

//Common to all the pages except home page and this is to show navigation as vertically if needed

function navbar(){
    document.querySelector(".newicon").classList.toggle('newicon--open')
}

//Login Button Alert
function confirmAction() {
        let confirmAction = confirm("Are you sure to Login?");
        if (confirmAction) {
          alert("CONGRADULATIONS!!");
        } else {
          alert("Sorry!! You Cancelled");
        }
      }

//Send Button Alert
function sendbut() {
    let sendbut = confirm("Are you sure to SEND?");
    if (sendbut) {
      alert("Sent Successfully");
    } else {
      alert("You Cancelled");
    }
  }

//Drop Down Menu
function find(src){
  window.location = src;
}



//This coding belongs to the todo list page or part of vuejs 

new Vue({

    el: '#todo',

    data: {
       
        isEditing: false,
        selectedIndex: null,
        todo: '',
        todos: ['Type your planes here']

    },

    methods: {

        storeTodo(){
            this.todos.push(this.todo)

            this.todo = ''
        },

        editTodo(index, todo){
            this.todo = todo
            this.selectedIndex = index
            this.isEditing = true
        },

        updateTodo(){
            this.todos.splice(this.selectedIndex, 1, this.todo)
            this.isEditing = false
        },

        deleteTodo(index){
            this.todos.splice(index, 1)
        }

    }
})


 