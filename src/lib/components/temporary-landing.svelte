<script lang="ts">
	import DmeterfieldsLogo from '$lib/assets/dmeterfields-sigil.svg?raw';
	import { tollingServices } from '$lib/assets/services-data';
	import { Sun, SunHorizon } from 'phosphor-svelte';

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
		<ul class="tolling-services-timeline">
			{#each tollingServices as tollingService}
				<li>
					<div class="tolling-service-chip">{tollingService.name}</div>
				</li>
			{/each}
			<div id="contact-container">
				<div>You</div>
				<form id="contact" on:submit|preventDefault={handleSubmit}>
					<input type="hidden" name="access_key" value={accessKey} />
					<input type="text" name="name" placeholder="name" required />
					<input type="email" name="email" placeholder="email address" required />
					<textarea name="message" placeholder="message" required rows="3"></textarea>
					<input type="submit" />
				</form>
				<div>{status}</div>
			</div>
		</ul>
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

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	#contact-container {
		display: flex;
		flex-direction: column;
		/* border: 1px solid white; */
		/* background-color: var(--brand-color); */
		background-color: white;
		color: var(--brand-color);
		width: min(100vw, 30rem);
		padding: 1rem;
		gap: 1rem;
	}

	.timeline {
		position: relative;
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

	.tolling-services-timeline {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		list-style-type: none;
		margin: 0;
		padding: 0;
		position: relative;
		z-index: 1;
	}

	.tolling-service-chip {
		background-color: var(--brand-color);
		color: white;
		border: 1px solid white;
		padding: 1rem;
	}

	#hero {
		/* background-color: var(--brand-color); */
	}

	#main-nav {
	}

	.container {
		/* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
		/* height: 100%; */
		/* width: 100%; */
	}
</style>
