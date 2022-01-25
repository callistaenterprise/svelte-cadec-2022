<script>
  import Welcome from './welcome.svelte';
  import GlobalContButt from './globalCounterButton.svelte'
  import GlobalContShow from './globalCounterShow.svelte';
  import ClickCounter from './clickCounter.svelte';
</script>
<div class="text-4xl mt-20">
<Welcome name="Cadec"/>
<br/>
<p>
  <ClickCounter/>
</p>
<br/>
<GlobalContButt />
<div class="mt-10">
<GlobalContShow/>
</div>
</div>
