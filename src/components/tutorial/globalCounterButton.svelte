<script>
  import {counter} from "../../stores/counterstore.js";
  // let counter = 0;
  const increment = () => {
     $counter+=1
  }
</script>

<button class="btn btn-color" on:click={increment}>Clicks: {$counter}</button>

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-color {
    @apply bg-red-500 text-white;
  }
  .btn-color:hover {
    @apply bg-red-700;
  }
</style>