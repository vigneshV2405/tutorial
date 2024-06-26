<script>
    let todos = ['Good Morning!','Vignesh','Hello']
    let current = ''
    function addTodo(){
        todos = [...todos,current]
    }
</script>
<div>
    <input
        placeholder="enter something"
        bind:value={current}
    />
    <button on:click={addTodo}>add</button>
    {#each todos as todo,i}
        <h4>{todo}</h4>
    {/each}
</div>

<style>
    input{
        border: none;
        font-size: 1rem;
        background-color: rgb(235, 225, 225);
        color: rgb(0, 0, 0);
        padding: 1rem;
        border-radius: 0.4rem;
        font-size: 1.3rem;
    }
    input:focus{
        outline: none;
    }
    button{
        background-color: yellow;
        font-size: 1.2rem;
    }
</style>