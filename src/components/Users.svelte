<script>
    import { onMount } from 'svelte';
  
    let users = [];

    const updateUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/v1/users');
        const data = await response.json();
        users = data.results;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    onMount(
        updateUsers
    );
    const handleDelete = async (id)=>{
            let x = await fetch(`http://localhost:5000/v1/users/${id}`,{
                headers : {
                    'Content-Type' : "application/json"
                },
                method : 'DELETE'
            })
            updateUsers()
    }
  </script>
  
  <button class="btn">
    <a href="/adduser">New</a>
  </button>
  
  <table>
    <thead>
      <tr>
        <th>Sl.No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {#each users as user,i}
        <tr>
          <td>{i+1}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>
            <button class="btn">
              <a href={`/edituser/${user.id}`}>Edit</a>
            </button>
            <button class="btn"
                on:click={()=>{handleDelete(user.id)}}
            >Delete</button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

  <style>
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
    .btn {
        background-color: orange;
        border: none;
        color: black;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
    .btn a{
        text-decoration: none;
        font-size: 1rem;
        color: black;
    }
</style>
  
  