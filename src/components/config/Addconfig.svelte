<!-- Popup.svelte -->
<script>
    import {backend_URL} from '../../url'
    export let show = false;
    export let loadTypes;
  
    const closePopup = () => {
      show = false;
    };
    let newConfig = {
        key:"",
        type:"",
        map:"",
        type_description:"",
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let res = await fetch(`${backend_URL}/config`,{
            headers: {
                "Content-Type": "application/json",
            },
            method:'POST',
            body: JSON.stringify(newConfig)
        })
        let conf = await res.json()
        newConfig = {
            key:"",
            type:"",
            map:"",
            type_description:"",
        }
        console.log(conf)
    }
    const close = ()=>{
        loadTypes();
        closePopup();
    }
  </script>
  
  {#if show}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="overlay" on:click={closePopup}>
      <div class="popup" on:click|stopPropagation>
        <h2>Add a new type</h2>
        <div>
            <form on:submit={(e)=>{handleSubmit(e)}} >
                <div class="coolinput">
                    <label for="key" class="text">Key:</label>
                    <input
                        type="text"
                        placeholder="enter key"
                        id="key"
                        class="input"
                        bind:value={newConfig.key}
                    />
                </div>
                <div class="coolinput">
                    <label for="type" class="text">Type:</label>
                    <input
                        type="text"
                        placeholder="enter type"
                        id="type"
                        class="input"
                        bind:value={newConfig.type}
                    />
                </div>
                <div class="coolinput">
                    <label for="map" class="text">Map:</label>
                    <input
                        type="text"
                        placeholder="map to"
                        id="map"
                        class="input"
                        bind:value={newConfig.map}
                    />
                </div>
                <div class="coolinput">
                    <label for="type_description" class="text">Type description:</label>
                    <input
                        type="text"
                        placeholder="enter type description"
                        id="type_description"
                        class="input"
                        bind:value={newConfig.type_description}
                    />
                </div>
                <button type="submit" >add</button>
            </form>
        </div>
        <button on:click={close}>Close</button>
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
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
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
  