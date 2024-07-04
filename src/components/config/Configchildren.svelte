<script>
    import Addchildrenconfig from "./Addchildrenconfig.svelte";
    import Configsubchildren from "./Configsubchildren.svelte";
    export let selectedType;
    export let groupedByType;
    export let loadTypes;

    let showPopup = false;

    const openPopup = () => {
        showPopup = true;
    };
</script>

{#if selectedType }
    {#each groupedByType[selectedType] as config,i}
        <div class="children" >
            <div class="content" >
                <table>
                    <tbody>
                        <tr>
                            <th>key</th>
                            <td>{config.key}</td>
                        </tr>
                        <tr>
                            <th>type description</th>
                            <td>{config.type_description}</td>
                        </tr>
                        <tr>
                            <th>map</th>
                            <td>{config.map}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button on:click={openPopup}>Open Popup</button>
            <Addchildrenconfig bind:show={showPopup} parentIds={[config._id]} />
            {#if config.children.length>0}
                {#each config.children as children,i}
                    <Configsubchildren parentIds={[config._id]} />
                {/each}
            {/if}
        </div>
    {/each}
{/if}

<style>
    .children {
        margin: 1rem;
        border: 1px dashed;
        padding: 0.5rem;
        width: 16rem;
        overflow: auto;
    }
    tbody tr:nth-child(odd) {
        background-color: rgb(188, 208, 214); /* Change color for odd-numbered children */
    }

    tbody tr:nth-child(even) {
        background-color: rgb(217, 231, 217); /* Change color for even-numbered children */
    }
    .children .content{
        max-height: 15rem;
        overflow: auto;
    }
    .content div{
        padding: 0.3rem;
    }
</style>