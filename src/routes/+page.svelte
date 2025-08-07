<script lang="ts">
	import DmeterfieldsLogo from '$lib/assets/dmeterfields-sigil.svg?raw';
	import * as commonmark from 'commonmark';

	const reader = new commonmark.Parser({ smart: true });
	const writer = new commonmark.HtmlRenderer({ safe: true });

	const navLinks = [
		{ title: 'products', href: '#' },
		{ title: 'services', href: '#' },
		{ title: 'clients', href: '#' }
	];

	const blurbs: { title: string; content: string }[] = [
		{
			title: 'Hassle Free',
			content: `We know how hard it is to run a business. That's why it's important to us to be a reliable, high-quality supplier, so you can focus on what only you can do.

We'll take the rest off your plate.`
		},
		{
			title: 'End to End',
			content: `Our service line is comprehensive, and we handle everything from farm right up to your kitchen.`
		},
		{
			title: 'A Proven Track Record',
			content: 'foo'
		}
	];

	const services: { title: string; content: string }[] = [
		{
			title: 'Tolling',
			content: 'what'
		},
		{
			title: 'Storage',
			content: 'Lorem Ipsum'
		},
		{
			title: 'Logistics',
			content: 'foo'
		}
	];
</script>

<section id="hero" class="container">
	<nav id="main-nav">
		<ul>
			{#each navLinks as navLink}
				<li>
					<a href={navLink.href}>{navLink.title}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<!-- <img id="sigil" src={img} alt="Dmeter Fields Logo" /> -->
	<div id="sigil">
		{@html DmeterfieldsLogo}
	</div>
	<h1 id="brand">Dmeter Fields</h1>
</section>
<section>
	<h2>Making your day</h2>
	<div class="blurb-container">
		{#each blurbs as blurb}
			<div class="">
				<h3>{blurb.title}</h3>
				<p>{@html writer.render(reader.parse(blurb.content))}</p>
			</div>
		{/each}
	</div>
</section>
<section>
	<h2>Services</h2>
	<div class="blurb-container">
		{#each services as service}
			<div>
				<h3>{service.title}</h3>
				<p>{@html writer.render(reader.parse(service.content))}</p>
			</div>
		{/each}
	</div>
</section>
<section>
	<h2>Products</h2>
	<!-- <div class="blurb-container">
		{#each services as service}
			<div>
				<h3>{service.title}</h3>
				<p>{@html writer.render(reader.parse(service.content))}</p>
			</div>
		{/each}
	</div> -->
</section>

<style scoped>
	#sigil {
		width: calc(min(12rem, 50vh));
	}

	#brand {
		font-weight: 100;
		font-size: 3rem;
		/* color: white; */
	}

	#slogan {
		font-weight: 900;
		font-size: 3rem;
		/* color: var(--brand-color-alt); */
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
