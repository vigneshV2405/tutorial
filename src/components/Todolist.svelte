<script>
    import { onMount } from "svelte";
    import { router } from "tinro";
    import { backend_URL } from "../url";
    let todos = []
    const refreshPage = async ()=>{
        let res = await fetch(`${backend_URL}/todos`,{
            headers: {
                "Content-Type": "application/json",
            }
        })
        let result = await res.json();
        todos = [...result]
    }
    onMount(refreshPage)
    function navToAdd(){
        router.goto('/addtodo')
    }
    function editTodo(id){
        router.goto(`/edittodo/${id}`)
    }
    const manageTodo = async (todo)=>{
        let temp = {
            status : "complete",
            todo : todo.todo,
            description : todo.description,
            name : todo.name,
            startDate : todo.startDate,
            endDate : new Date(),
        }
        let res = await fetch(`${backend_URL}/todos/${todo._id}`,{
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(temp),
            method: "PATCH"
        })
        let result = await res.json();
        if(result.id){
            refreshPage()
        }
    }
    const handleDelete = async (id)=>{
        let res = await fetch(`${backend_URL}/todos/${id}`,{
            headers: {
                "Content-Type": "application/json",
            },
            method: "DELETE"
        })
        refreshPage();
    }
</script>
<div class="m-2" >
    <button
        on:click={navToAdd}
        class="mb-3"
    >
        Add
    </button>
    <table>
        <thead>
            <tr>
                <th>Sl.No</th>
                <th>Task</th>
                <th>Description</th>
                <th>Assigned to</th>
                <th class="min">Start</th>
                <th class="min">End</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each todos as todo,i}
                <tr class={todo.status==='complete'?"complete":"pending"} >
                    <td>{i+1}</td>
                    <td>{todo.todo}</td>
                    <td>{todo.description}</td>
                    <td>{todo.name}</td>
                    <td>{new Date(todo.startDate)}</td>
                    <td>{todo.endDate?(new Date(todo.endDate)):"-"}</td>
                    <td>{todo.status}</td>
                    <td>
                        <button
                            on:click={()=>{editTodo(todo._id)}}
                        >
                            edit
                        </button>
                        <button
                            class="green"
                            on:click={()=>{manageTodo(todo)}}
                            disabled={todo.status==='complete'}
                        >
                            Mark as done
                        </button>
                        <button
                            class="red"
                            on:click={()=>{handleDelete(todo.id)}}
                        >
                            delete
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
        </table>
</div>

<style>
    button{
        background-color: yellow;
        font-size: 1.1rem;
        border-radius: 0.4rem;
        padding: 0.5rem,0.7rem;
        color: rgb(0, 0, 0);
    }
    table {
        border-collapse: collapse;
        width: 100%;
    }
    th, td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    th {
        background-color: #f2f2f2;
    }
    td button{
        font-size: 0.8rem;
    }
    .green{
        background-color: greenyellow;
    }
    .red{
        background-color: red;
    }
    .complete{
        background-color: rgb(192, 243, 208);
    }
    .pending{
        background-color: rgb(243, 182, 182);
    }
    tbody tr:hover{
        background-color: rgb(195, 197, 177);
        cursor: pointer;
    }
</style>