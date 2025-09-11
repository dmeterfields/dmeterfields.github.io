<script lang="ts">
	import DmeterfieldsLogo from '$lib/assets/dmeterfields-sigil.svg?raw';
	import { tollingServices } from '$lib/assets/services-data';
	import { Accordion } from 'bits-ui';
	import { Sun, SunHorizon } from 'phosphor-svelte';
	import { slide } from 'svelte/transition';
	import * as commonmark from 'commonmark';

	const accessKey = '33ae2c7b-2096-429f-80d3-b63a8b8d751e';

	const reader = new commonmark.Parser({ smart: true });
	const writer = new commonmark.HtmlRenderer();

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

	var parsed = reader.parse('Hello *world*'); // parsed is a 'Node' tree
	// transform parsed if you like...
	var result = writer.render(parsed); // result is a String
</script>

<section id="temporary">
	<div id="sigil">
		{@html DmeterfieldsLogo}
	</div>
	<h1 id="brand">Dmeter Fields</h1>
	<div class="blurb">
		<h2 id="slogan">Making your day</h2>
		<p>
			If you succeed, we succeed. We treat our clients as partners, and that's why we do everything
			we can to help you thrive: consistent, reliable service, mixed with out-of-the-box solutions.
			We support you behind the scenes so you can focus on what you do best.
		</p>
		<!-- <p>
			We know how hard it is to run a business. That's why we do everything we can to be a reliable,
			dedicated partner, so you can focus on what only you can do.
		</p> -->
		<!-- <p>We'll take the rest off your plate.</p> -->
	</div>
	<SunHorizon size="4rem" />
	<div class="timeline">
		<Accordion.Root type="single">
			{#snippet child({ props })}
				<ul {...props} class="tolling-services">
					{#each tollingServices as tollingService}
						<Accordion.Item value={tollingService.name}>
							{#snippet child({ props })}
								<li {...props}>
									<Accordion.Header>
										<Accordion.Trigger>
											{#snippet child({ props })}
												<button {...props} class="tolling-service__chip">
													{tollingService.name}
												</button>
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
													{@html writer.render(reader.parse(tollingService.description))}
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
							<div class="tolling-service__chip--open">You</div>
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
				</ul>
			{/snippet}
		</Accordion.Root>
		<div class="timeline__line"></div>
	</div>
	<Sun size="4rem" />
	<p class="copyright"><small>Copyright © 2026 D'meter Fields Corporation</small></p>
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
		resize: vertical;
	}

	input:focus,
	textarea:focus {
		outline-color: var(--brand-color-alt);
		outline-width: thin;
	}

	p {
		font-weight: 300;
	}

	input[type='submit'] {
		cursor: pointer;
		transition-property: background-color;
		transition-duration: 200ms;
	}

	input[type='submit']:hover {
		color: var(--brand-color-alt);
		border-color: var(--brand-color-alt);
		background-color: var(--brand-color-lighter);
	}

	.copyright {
		margin-top: 3rem;
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
		margin: 8rem auto;
		gap: 1rem;
		width: max(min(100vw, 40rem), 50vw);
	}

	#slogan {
		font-weight: 400;
		font-size: 2rem;
		/* margin: 3rem 0; */
		/* color: var(--brand-color-alt); */
	}

	.blurb {
		padding: 1rem;
	}
	.blurb h2 {
		text-align: center;
	}
	form.tolling-service__content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
	}

	.timeline {
		position: relative;
		width: 100%;
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
		transition-duration: 200ms;
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
		display: flow-root;
		background-color: white;
		color: var(--brand-color);
		/* border: 1px solid var(--brand-color); */
		padding: 0 1rem;
		margin: 0;
	}
</style>
