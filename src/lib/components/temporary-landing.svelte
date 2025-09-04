<script lang="ts">
	import DmeterfieldsLogo from '$lib/assets/dmeterfields-sigil.svg?raw';
	import { tollingServices } from '$lib/assets/services-data';
	import { Accordion } from 'bits-ui';
	import { Sun, SunHorizon } from 'phosphor-svelte';
	import { slide } from 'svelte/transition';

	const accessKey = '52251db6-c0b7-4ebc-b9fd-4ee9b80926c4';

	let status = '';
	const handleSubmit = async (data: { currentTarget: HTMLFormElement | undefined }) => {
		status = 'Submitting...';
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
			status = result.message || 'Success';
		}
	};
</script>

<section id="temporary">
	<div id="sigil">
		{@html DmeterfieldsLogo}
	</div>
	<h1 id="brand">Dmeter Fields</h1>
	<h2 id="slogan">Making your day</h2>
	<SunHorizon size="4rem" />
	<div class="timeline">
		<Accordion.Root type="multiple" value={['you']}>
			{#snippet child({ props })}
				<ul class="tolling-services">
					{#each tollingServices as tollingService}
						<Accordion.Item value={tollingService.name}>
							{#snippet child({ props })}
								<li>
									<Accordion.Header>
										<Accordion.Trigger>
											{#snippet child({ props })}
												<button {...props} class="tolling-service__chip"
													>{tollingService.name}</button
												>
											{/snippet}
										</Accordion.Trigger>
									</Accordion.Header>
									<Accordion.Content forceMount>
										{#snippet child({ props, open })}
											{#if open}
												<div
													class="tolling-service__content"
													{...props}
													transition:slide={{ duration: 300 }}
												>
													{tollingService.description}
												</div>
											{/if}
										{/snippet}
									</Accordion.Content>
								</li>
							{/snippet}
						</Accordion.Item>
					{/each}
					<li>
						<form
							id="contact"
							class="tolling-service__content"
							{...props}
							transition:slide={{ duration: 300 }}
							on:submit|preventDefault={handleSubmit}
						>
							<div {...props} class="tolling-service__chip--open">You</div>
							<input type="hidden" name="access_key" value={accessKey} />
							<input type="text" name="name" placeholder="name" required />
							<input type="email" name="email" placeholder="email address" required />
							<textarea name="message" placeholder="message" required rows="3"></textarea>
							{#if status === ''}
								<input type="submit" />
							{:else}
								{status}
							{/if}
						</form>
					</li>
					<!-- <Accordion.Item value="you">
						{#snippet child({ props })}
							<li>
								<Accordion.Header>
									<Accordion.Trigger>
										{#snippet child({ props })}
											<button {...props} class="tolling-service__chip">You</button>
										{/snippet}
									</Accordion.Trigger>
								</Accordion.Header>
								<Accordion.Content forceMount>
									{#snippet child({ props, open })}
										{#if open}
											<form
												id="contact"
												class="tolling-service__content"
												{...props}
												transition:slide={{ duration: 300 }}
												on:submit|preventDefault={handleSubmit}
											>
												<input type="hidden" name="access_key" value={accessKey} />
												<input type="text" name="name" placeholder="name" required />
												<input type="email" name="email" placeholder="email address" required />
												<textarea name="message" placeholder="message" required rows="3"></textarea>
												{#if status === ''}
													<input type="submit" />
												{:else}
													{status}
												{/if}
											</form>
										{/if}
									{/snippet}
								</Accordion.Content>
							</li>
						{/snippet}
					</Accordion.Item> -->
				</ul>
			{/snippet}
		</Accordion.Root>
		<div class="timeline__line"></div>
	</div>
	<Sun size="4rem" />
</section>

<style scoped>
	input {
		background-color: transparent;
		border: 1px solid var(--brand-color);
		padding: 1rem;
		color: var(--brand-color);
	}

	textarea {
		padding: 1rem;
		color: var(--brand-color);
	}

	#sigil {
		width: calc(min(12rem, 50vh));
	}

	#brand {
		font-weight: 100;
		font-size: 1.5rem;
		margin: 0;
		/* color: white; */
	}

	#temporary {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 8rem 0;
		gap: 1rem;
	}

	#slogan {
		font-weight: 400;
		font-size: 2rem;
		/* margin: 3rem 0; */
		/* color: var(--brand-color-alt); */
	}

	form.tolling-service__content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
	}

	.timeline {
		position: relative;
		width: max(min(100vw, 40rem), 50vw);
	}

	.timeline__line {
		/* background-color: white; */
		height: 100%;
		width: 0;
		position: absolute;
		top: 0;
		left: 50%;
		z-index: 0;
		border-left: 0.2rem dotted white;
	}

	.tolling-services {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		list-style-type: none;
		margin: 0 1rem;
		padding: 0;
		position: relative;
		z-index: 1;
	}

	.tolling-service__chip {
		background-color: var(--brand-color);
		color: white;
		border: 1px solid white;
		padding: 1rem;
		width: 100%;
		text-align: start;
		font-family: var(--font-family);
		cursor: pointer;
		transition-property: color, border-color, background-color;
		transition-duration: 300ms;
	}

	.tolling-service__chip:hover {
		background-color: var(--brand-color-alt);
	}

	.tolling-service__chip[data-state='open'],
	.tolling-service__chip--open {
		background-color: white;
		color: var(--brand-color);
		/* border: 1px solid var(--brand-color); */
	}

	.tolling-service__content {
		background-color: white;
		color: var(--brand-color);
		/* border: 1px solid var(--brand-color); */
		padding: 0 1rem 1rem 1rem;
	}
</style>
