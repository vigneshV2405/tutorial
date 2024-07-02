<script>
    import { onMount } from "svelte";
    import { router } from "tinro";
    import {backend_URL} from "../url"
    export let params
    let current = {
        todo : "",
        description : "",
        name : "",
    }
    onMount(async ()=>{
        let res = await fetch(`${backend_URL}/todos/${params.id}`,{
            headers: {
                "Content-Type": "application/json",
            }
        })
        let result = await res.json()
        current = {
            todo : result.todo,
            description : result.description,
            name : result.name,
            status : result.status,
            startDate : result.startDate,
        }
    })
    const handleEdit = async (e)=>{
        e.preventDefault();
        let res = await fetch(`${backend_URL}/todos/${params.id}`,{
            headers: {
                "Content-Type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify(current)
        })
        let result = await res.json()
        if(result._id){
            router.goto('/todos')
        }
    }

</script>

<div class="w-100 d-flex justify-content-center" >
    <div class="w-50" >
        <h2 class="mb-4 mt-4" >Edit Todo</h2>
        <form
            on:submit={(e)=>{handleEdit(e)}}
        >
            <div>
                <label for="todo" >Todo</label>
                <input  
                    class="form-control"
                    id="todo"
                    bind:value={current.todo}
                    placeholder="enter a task"
                />
            </div>
            <div>
                <label for="description" >Description</label>
                <input
                    class="form-control"
                    id="description"
                    bind:value={current.description}
                    placeholder="todo description"
                />
            </div>
            <div>
                <label for="name" >Name</label>
                <input 
                    class="form-control"
                    id="name"
                    bind:value={current.name}
                    placeholder="assigned to"
                />
            </div>
            <div>
                <button
                    type="submit"
                    class="btn btn-success"
                >
                    Update
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