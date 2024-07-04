<script>
    import _ from 'lodash';
    import { onMount } from 'svelte';
    import { backend_URL } from '../../url';
    import Addconfig from './Addconfig.svelte';
    import Configchildren from './Configchildren.svelte';
    import Test from './Test.svelte';
  import { router } from 'tinro';
    var groupedByType;
    let selectedType;
    const loadTypes = async ()=>{
        let res = await fetch(`${backend_URL}/config`,{
            headers: {
                "Content-Type": "application/json",
            }
        })
        let result = await res.json();
        groupedByType = await _.groupBy(result, 'type');
    }
    onMount(()=>{
        loadTypes()
    })
    const changeType = (e)=>{
        router.goto(`/configs/${e.target.value}`)
    }

    let showPopup = false;

    const openPopup = () => {
      showPopup = true;
    };
</script>

<main>
    <select on:change={(e)=>{changeType(e)}}>
        <option selected disabled >select a type</option>
        {#if groupedByType}
            {#each Object.entries(groupedByType) as [key]}
                <option
                    value={key}
                >{key}</option>
            {/each}
        {/if}
    </select>
    <button on:click={openPopup}>Add new config</button>
    <Addconfig bind:show={showPopup} {loadTypes} />
    {#if selectedType }
        <div class="children-container" >
            <Test {selectedType} {groupedByType} />
            <!-- <Configchildren {selectedType} {groupedByType} {loadTypes}/> -->
        </div>
    {/if}
</main>

<style>
    .children-container{
        display: flex;
    }
</style>