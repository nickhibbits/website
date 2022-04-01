<script lang="ts">
</script>

<main class="connect-links-component">
	<div class="links-wrapper">
		<a href="https://instagram.com/nhibit" class="connect-link">
			<ion-icon id="instagram" size="large" name="logo-instagram" />
		</a>
		<a href="https://www.linkedin.com/in/nicholas-hibbits/" class="connect-link">
			<ion-icon id="linkedin" size="large" name="logo-linkedin" />
		</a>
		<a href="https://github.com/nickhibbits" class="connect-link">
			<ion-icon id="github" size="large" name="logo-github" />
		</a>
		<a href="mailto:nicholashibbits@gmail.com" class="connect-link">
			<ion-icon style="font-size: 80px;" id="email" size="large" name="mail-outline" />
		</a>
	</div>
	<script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
</main>

<style lang="scss">
	@import '../../../scss/global.scss';

	.links-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		border: solid 2px black;
		border-radius: 30px;
		width: 10rem;
		background-color: black;
	}

	.connect-link {
		display: flex;
		text-decoration: none;
		color: white;
		transition: 0.6s;
		align-items: center;
	}

	.connect-link:hover {
		color: rgba(10, 99, 140, 1);
	}
</style>
