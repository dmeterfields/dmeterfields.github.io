<script lang="ts">
	import { tollingServices } from '$lib/assets/services-data';
	import { Accordion } from 'bits-ui';
	import type { Service } from '$lib/models/service';
	import { Tabs } from 'bits-ui';
	import { slide } from 'svelte/transition';

	const tollingServiceItems = tollingServices.map((service) => {
		return {
			value: service.name,
			title: service.name,
			content: service.description ?? service.subservice?.join('\n')
		};
	});
</script>

<div>
	<p>One of our major services is to process meat for our customers</p>
	<!-- <div>
		<Accordion.Root type="single" value={''}>
			{#each tollingServices as tollingService}
				<Accordion.Item value={tollingService.name}>
					<Accordion.Header>
						<Accordion.Trigger>
							{tollingService.name}
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Content forceMount={true}>
						{#snippet child({ props, open })}
							{#if open}
								<div transition:slide={{ duration: 300 }}>
									{tollingService.description}
									{#if tollingService.subservice}
										{#each tollingService.subservice as subservice}
											<div>{subservice.name}</div>
										{/each}
									{/if}
								</div>
							{/if}
						{/snippet}
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div> -->
	<div class="tolling-services">
		{#each tollingServices as tollingService}
			<div class="tolling-service card">
				<h3>{tollingService.name}</h3>
				<p>{tollingService.summary}</p>
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
