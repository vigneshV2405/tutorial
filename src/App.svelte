<script>
  import { router, Route , } from 'tinro';
  import Users from './components/Users.svelte';
  import Adduser from './components/Adduser.svelte';
  import Edituser from './components/Edituser.svelte';
  import Todolist from './components/Todolist.svelte';
  import Addtodo from './components/Addtodo.svelte';
  import Edittodo from './components/Edittodo.svelte';
</script>

<div>

</div>

<style>
  
</style>

<router>
  <Route path="/"><Users/></Route>
  <Route path="/adduser"><Adduser /></Route>
  <Route path="/edituser/:id"  let:params ><Edituser params={params} /></Route>
  <Route path="/todos" ><Todolist/></Route>
  <Route path="/addtodo" ><Addtodo/></Route>
  <Route path="/edittodo/:id" let:params><Edittodo {params} /></Route>
</router>