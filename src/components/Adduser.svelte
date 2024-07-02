<script>
  import { router } from "tinro";

    let newUser = {
        name : "",
        email : "",
        password : "",
        role : "",
    }
    let errors = {
        name : null,
        email : null,
        password : null,
        role : null
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:5000/v1/users",{
            headers: {
                "Content-Type": "application/json",
            },
            method:'post',
            body: JSON.stringify(newUser)
        })
        .then((res)=>{
            res.json().then((resp)=>{
                if(resp.code){
                    console.log(resp.message)
                }
                else{
                    console.log('successfully added the user')
                    router.goto('/')
                }
            })
        })
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
                bind:value={newUser.name}
            >
        </div>
        <div class="form-group">
            <label for="useremail">Email:</label>
            <input type="text" class="form-control" id="useremail" placeholder="Enter Customer email"
                bind:value={newUser.email}
            >
        </div>
        <div class="form-group">
            <label for="userpassword">Password:</label>
            <input type="text" class="form-control" id="userpassword" placeholder="Enter password"
                bind:value={newUser.password}
            >
        </div>
        <div class="form-group">
            <label for="userrole">Role:</label>
            <input type="text" class="form-control" id="userrole" placeholder="role"
                bind:value={newUser.role}
            >
        </div>
        <div class="mt-3" >
            <button
                type="submit"
                class="btn btn-success"
                disabled={errors.name || errors.email || errors.password || errors.role }
            >
                Submit
            </button>
            <button type="reset" class="btn btn-danger ml-2">Reset</button>
        </div>
    </form>
</div>

<style>
    button a{
        text-decoration: none;
        color: white;
    }
</style>