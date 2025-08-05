<script lang="ts">
	import type { Service } from '$lib/models/service';
	let { service }: { service: Service } = $props();
</script>

<div>
	<h1>{service.label}</h1>
	<p>{service.description}</p>
</div>
