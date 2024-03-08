<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Avatar, HamburgerMenu } from 'radix-icons-svelte';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline" size="default">
			<HamburgerMenu class="mr-2" />
			<Avatar />
			<span class="sr-only">Toggle theme</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item href="/fr-fr/singup">Inscription</DropdownMenu.Item>
		<DropdownMenu.Item href="/fr-fr/login">Connexion</DropdownMenu.Item>
		<DropdownMenu.Separator></DropdownMenu.Separator>
		<DropdownMenu.Item href="/fr-fr/creer-annonce/accueil">Créer une annonce</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
