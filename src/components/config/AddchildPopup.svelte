<!-- Modal.svelte -->
<script>
    export let show = false;
    export let close;
  
    // Prevent event propagation when clicking inside the modal content
    function stopPropagation(event) {
      event.stopPropagation();
    }
    </script>
    
    {#if show}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="modal-overlay" on:click={close}>
        <div class="modal-content" on:click={stopPropagation}>
            <slot></slot>
            <button class="close-button" on:click={close}>Close</button>
        </div>
        </div>
    {/if}
  
  <style>
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .modal-content {
      background: white;
      padding: 1rem;
      border-radius: 0.5rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .close-button {
      margin-top: 1rem;
      background: #f44336;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      cursor: pointer;
    }
  
    .close-button:hover {
      background: #d32f2f;
    }
  </style>
  