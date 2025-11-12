<script>
	import { goto } from '$app/navigation';

	function irACamara() {
		goto('/XalapAR/camara');
	}
</script>

<main>
	<div class="contenido">
		<h1 class="titulo">XalapAR</h1>
		<h3 class="subtitulo">Proyecto final Interfaces de usuario avanzadas</h3>
		<button class="comenzar" on:click={irACamara}>Experimentar xalapa en AR ➪</button>
	</div>
</main>

<style>
	main {
		background-image: url('../imagenes/xalapa-landing.jpeg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		align-items: center;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		margin: 0;
		padding: 0;
	}
	main::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		margin: 0;
		padding: 0;
	}
	.titulo {
		color: white;
		font-size: 80px;
	}
	.subtitulo {
		color: white;
		font-size: 40px;
	}
	.comenzar {
		cursor: pointer;
		background-color: #259efa;
		color: white;
		border: none;
		padding: 1rem 2.5rem;
		justify-content: center;
		align-items: center;
		font-size: 20px;
		transition: background-color 0.15s;
	}

	.comenzar:hover {
		background-color: #1f84d1;
	}

	.comenzar:active {
		background-color: #124c78;
	}

	.contenido {
		position: relative;
		z-index: 1;
		text-align: center;
		max-width: 900px;
		color: #fff;
		font-family: Arial;
	}
</style>
