<script>
    export let type;
    let newConfig = {
        key:"",
        type:"",
        type_description:"",
        children:[]
    }
</script>

<div>
    <div>
        <h1>Add {type}</h1>
    </div>
    <div>
        <form>
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
                <label for="type_description" class="text">Type description:</label>
                <input
                    type="text"
                    placeholder="enter type description"
                    id="type_description"
                    class="input"
                    bind:value={newConfig.type_description}
                />
            </div>
        </form>
    </div>
</div>

<style>
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