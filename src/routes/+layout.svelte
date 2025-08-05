<script lang="ts">
	import '../app.css';
</script>

<slot></slot>

<style>
	:global(:root) {
		--brand-color: #005843;
		--brand-color-alt: #002729;
	}
	:global {
		body {
			background-color: var(--brand-color-alt);
			height: 100vh;
			width: 100vw;
			margin: 0;
			font-family: 'Rubik', serif;
			font-optical-sizing: auto;
			font-weight: 400;
			font-style: normal;
			/* color: white; */
		}

		/* .rubik-light {
      font-family: "Rubik", serif;
      font-optical-sizing: auto;
      font-weight: 200;
      font-style: normal;
    }

    .rubik-regular {
      font-family: "Rubik", serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
    }

    .rubik-bold {
      font-family: "Rubik", serif;
      font-optical-sizing: auto;
      font-weight: 700;
      font-style: normal;
    } */
	}
</style>
