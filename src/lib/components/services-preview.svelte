<script lang="ts">
	import { tollingServices } from '$lib/assets/services-data';
	import type { Service } from '$lib/models/service';
	import { Tabs } from 'bits-ui';
</script>

<div>
	<p>One of our major services is to process meat for our customers</p>
	<div class="tolling-services">
		{#each tollingServices as tollingService}
			<div class="tolling-service card">
				<h3>{tollingService.name}</h3>
				<p>{tollingService.description}</p>
			</div>
		{/each}
	</div>
</div>

<style scoped>
	.tolling-services {
		width: 100%;
		display: grid;
		gap: var(--layout-gap-md);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 35ch), 1fr));
	}
	.tolling-service {
		display: flex;
		flex-direction: column;
		gap: var(--layout-gap-sm);
	}
	.tolling-service p {
		margin: 0;
	}
	.tolling-service h3 {
		margin: 0;
	}
	.card {
		padding: var(--padding-md);
		border-radius: 1rem;
		border: 1px solid white;
	}
</style>
