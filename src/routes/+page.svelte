<script lang="ts">
	import img from '$lib/assets/dmeterfields-sigil.svg';
	import ServiceTile from '$lib/components/service-tile.svelte';
	import type { Service } from '$lib/models/service';
	import * as commonmark from 'commonmark';

	var reader = new commonmark.Parser({ smart: true });
	var writer = new commonmark.HtmlRenderer({ safe: true });
	var parsed = reader.parse('Hello *world*'); // parsed is a 'Node' tree
	// transform parsed if you like...
	var result = writer.render(parsed); // result is a String

	const navLinks = [
		{ title: 'products', href: '#' },
		{ title: 'services', href: '#' },
		{ title: 'clients', href: '#' }
	];

	const services: Service[] = [
		{
			label: 'Tolling',
			description: 'what'
		},
		{
			label: 'Storage',
			description: 'Lorem Ipsum'
		},
		{
			label: 'Logistics',
			description: 'foo'
		}
	];
</script>

<section id="hero" class="container">
	<nav>
		<ul>
			{#each navLinks as navLink}
				<li>
					<a href={navLink.href}>{navLink.title}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<img id="sigil" src={img} alt="Dmeter Fields Logo" />
	<h1 id="brand">Dmeter Fields</h1>

	<p>From the start to the end</p>
	<h1 id="slogan">Making your day</h1>
	<p>We approach food supply like engineers.</p>

	<div>
		<h3>Hassle Free</h3>
		<h3>End to End</h3>
		<h3>A Proven Track Record</h3>
	</div>
</section>
{#each services as service}
	<ServiceTile {service} />
{/each}

<style>
	#sigil {
		width: calc(min(12rem, 50vh));
	}

	#brand {
		font-weight: 100;
		font-size: 3rem;
		color: white;
	}

	#slogan {
		font-weight: 900;
		font-size: 3rem;
		color: var(--brand-color-alt);
	}

	#hero {
		background-color: var(--brand-color);
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* height: 100%; */
		width: 100%;
	}
</style>
