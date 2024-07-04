<!-- Popup.svelte -->
<script>
    export let show = false;
    export let parentIds

    const closePopup = () => {
        show = false;
    };
    let newChildren = {
        key:"",
        type:"",
        map:"",
        description:"",
        children:[]
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        
    }
</script>

{#if show}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="overlay" on:click={closePopup}>
      <div class="popup" on:click|stopPropagation>
        <h2>Add a new children</h2>
        <div>
            <form on:submit={(e)=>{handleSubmit(e)}} >
                <div class="coolinput">
                    <label for="key" class="text">Key:</label>
                    <input
                        type="text"
                        placeholder="enter key"
                        id="key"
                        class="input"
                        bind:value={newChildren.key}
                    />
                </div>
                <div class="coolinput">
                    <label for="type" class="text">Type:</label>
                    <input
                        type="text"
                        placeholder="enter type"
                        id="type"
                        class="input"
                        bind:value={newChildren.type}
                    />
                </div>
                <div class="coolinput">
                    <label for="map" class="text">Map:</label>
                    <input
                        type="text"
                        placeholder="map to"
                        id="map"
                        class="input"
                        bind:value={newChildren.map}
                    />
                </div>
                <div class="coolinput">
                    <label for="type_description" class="text">Type description:</label>
                    <input
                        type="text"
                        placeholder="enter type description"
                        id="type_description"
                        class="input"
                        bind:value={newChildren.type_description}
                    />
                </div>
                <button type="submit" >add</button>
            </form>
        </div>
        <button on:click={closePopup}>Close</button>
      </div>
    </div>
  {/if}



  <style>
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: center;
      align-items: center; 
      backdrop-filter: blur(10px) saturate(180%);
      -webkit-backdrop-filter: blur(10px) saturate(180%);
    }
    .popup {
      background: white;
      padding: 2em;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    .coolinput {
        display: flex;
        flex-direction: column;
        width: fit-content;
        position: static;
        max-width: 240px;
    }

    .coolinput label.text {
        font-size: 0.75rem;
        color: #818CF8;
        font-weight: 700;
        position: relative;
        top: 0.5rem;
        margin: 0 0 0 7px;
        padding: 0 3px;
        background: #ffffff;
        width: fit-content;
    }

    .coolinput input[type=text].input {
        padding: 11px 10px;
        font-size: 0.75rem;
        border: 2px #818CF8 solid;
        border-radius: 5px;
        background: #ffffff;
    }

    .coolinput input[type=text].input:focus {
        outline: none;
    }
  </style>
