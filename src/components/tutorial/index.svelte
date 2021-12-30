<script>
  import Welcome from './welcome.svelte';
  import GlobalContButt from './globalCounterButton.svelte'
  import GlobalContShow from './globalCounterShow.svelte';
  import ClickCounter from './clickCounter.svelte';
  let year = new Date().getFullYear();
  
</script>
<Welcome name="Cadec"/>
<br/>
<p>
  <ClickCounter/>
</p>
<br/>
<GlobalContButt />
<GlobalContShow />
