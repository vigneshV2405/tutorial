<script>
  import { router } from "tinro";
  import { backend_URL } from "../url";

    let newTodo = {
        todo : "",
        description : "",
        name : "",
        startDate : "",
        status : "pending"
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        newTodo.startDate = new Date()
        let res = await fetch(`${backend_URL}/todos`,{
            headers: {
                "Content-Type": "application/json",
            },
            method : "POST",
            body : JSON.stringify(newTodo)
        })
        let result = await res.json();
        if(result._id){
            router.goto('/todos')
        }
        
    }
</script>

<div class="w-100 d-flex justify-content-center" >
    <div class="w-50" >
        <h2 class="mb-4 mt-4" >Add new Todo</h2>
        <form
            on:submit={(e)=>{handleSubmit(e)}}
        >
            <div>
                <label for="todo" >Todo</label>
                <input  
                    class="form-control"
                    id="todo"
                    bind:value={newTodo.todo}
                    placeholder="enter a task"
                />
            </div>
            <div>
                <label for="description" >Description</label>
                <input
                    class="form-control"
                    id="description"
                    bind:value={newTodo.description}
                    placeholder="todo description"
                />
            </div>
            <div>
                <label for="name" >Name</label>
                <input 
                    class="form-control"
                    id="name"
                    bind:value={newTodo.name}
                    placeholder="assigned to"
                />
            </div>
            <div>
                <button
                    type="submit"
                    class="btn btn-success"
                >
                    Add
                </button>
                <button
                    type="reset"
                    class="btn btn-warning"
                >
                    reset
                </button>
            </div>
        </form>
    </div>
</div>

<style>
    .w-50 div{
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }
</style>