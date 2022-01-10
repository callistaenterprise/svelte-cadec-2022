<script context="module">
  export async function load({ page }) {
    console.log('run load');
		const year = page.params.year;
		return { props: { year } };
	}
</script>
<script>
  export let year;
</script>

<h1>{year}</h1>