<script lang='ts'>
  import img from '$lib/assets/dmeterfields-sigil.svg';
</script>

<div class="container">
  <img id="sigil" src="{img}" alt="Dmeter Fields Logo" />
</div>

<style>
  :global(body) {
    background-color: #005843;
    height: 100vh;
    width: 100vw;
    margin: 0;
  }

  #sigil {
    height: 32rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
</style>
