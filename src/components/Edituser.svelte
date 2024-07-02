<script>
    export let params
    import {onMount} from 'svelte';
  import { router } from 'tinro';
    let current = {
        name : "",
        email : "",
        password : ""
    }
    onMount(async ()=>{
        let x = await fetch(`http://localhost:5000/v1/users/${params.id}`)
        let resp = await x.json()
        current.name = resp.name
        current.email = resp.email
    })

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            let x = await fetch(`http://localhost:5000/v1/users/${params.id}`,{
                headers : {
                    'Content-Type' : "application/json"
                },
                method : 'PATCH',
                body : JSON.stringify(current)
            })
            let y = await x.json()
            if(y.code){
                console.log(y.message)
            }
            else{
                router.goto('/')
            }
        }
        catch(error){
            console.log(error)
        }
    }
</script>


<div class="container mt-5">
    <button class="btn btn-secondary" >
        <a href="/" >Home</a>
    </button>
    <h2>Add User</h2>
    <form on:submit={(e)=>{handleSubmit(e)}} >
        <div class="form-group">
            <label for="username">Name:</label>
            <input type="text" class="form-control" id="username" placeholder="Enter Customer name"
                bind:value={current.name}
            >
        </div>
        <div class="form-group">
            <label for="useremail">Email:</label>
            <input type="text" class="form-control" id="useremail" placeholder="Enter Customer email"
                bind:value={current.email}
            >
        </div>
        <div class="form-group">
            <label for="userpassword">Password:</label>
            <input type="text" class="form-control" id="userpassword" placeholder="Enter password"
                bind:value={current.password}
            >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="reset" class="btn btn-secondary ml-2">Reset</button>
    </form>
</div>

<style>
    button a{
        text-decoration: none;
        color: white;
    }
</style>