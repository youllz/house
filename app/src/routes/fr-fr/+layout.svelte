<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { LayoutData } from './$types';
	import { ModeWatcher } from 'mode-watcher';
	import Theme from '$lib/components/Theme.svelte';
	import Lang from './Lang.svelte';
	import Account from '$lib/components/Account.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { MixerHorizontal } from 'radix-icons-svelte';
	import * as Select from '$lib/components/ui/select';
	import TypeToggle from '$lib/components/TypeToggle.svelte';
	import { typeFilter } from '$lib/store';
	import CitySelect from '$lib/components/CitySelect.svelte';
	import BatimentsType from '$lib/components/Transaction.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Separator } from '$lib/components/ui/separator';
	import NumbOfRoom from '$lib/components/NumbOfRoom.svelte';
	import NumbOfBat from '$lib/components/NumbOfBat.svelte';
	import Equipment from '$lib/components/Equipment.svelte';
	import Surface from '$lib/components/Surface.svelte';
	import { page } from '$app/stores';

	// export let data: LayoutData;

	const types = [
		{ value: 'terrain', label: 'Terrain' },
		{ value: 'batiments', label: 'Batiments' }
	];

	$: url = $page.url.pathname;

	$: console.log(url.includes('create-announce'));
</script>

<ModeWatcher />
<header class="topq bg-card fixed z-50 grid w-full gap-6 border-b px-[5vw] py-8">
	<nav class="flex items-center justify-between">
		<div class="flex gap-6">
			<a href="/"> House </a>
			<ul class="items flex gap-5">
				<li>
					<a href="/fr-fr/terrains"> Terrains </a>
				</li>
				<li>
					<a href="/fr-fr/batiments"> Batiments </a>
				</li>
				<li>
					<a href="/fr-fr/agence-constructions"> Agences de constructions </a>
				</li>
			</ul>
		</div>

		<ul class="item-center relative flex gap-5">
			<li>
				<Button href="/fr-fr/create-announce/home" variant="ghost">Créer une annonce</Button>
			</li>
			<li>
				<Theme />
			</li>
			<li>
				<Lang />
			</li>
			<li>
				<Account />
			</li>
		</ul>
	</nav>

	<!-- fliter -->
	{#if !url.includes('create-announce')}
		<div
			class="absolute left-[50%] top-[50%] grid translate-x-[-50%] translate-y-[-50%] place-items-center px-[5vw] py-4"
		>
			<Dialog.Root>
				<Dialog.Trigger class="flex items-center">
					<Button>
						<MixerHorizontal class="mr-4" /> Rechercher avec un filtre
					</Button>
				</Dialog.Trigger>
				<Dialog.Content class="min-w-[400px] max-w-[50rem]">
					<Dialog.Header>
						<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
						<Dialog.Description>
							This action cannot be undone. This will permanently delete your account and remove
							your data from our servers.
						</Dialog.Description>
					</Dialog.Header>

					<form action="" method="get" class="grid gap-3">
						<TypeToggle />
						<div class="w-full">
							<CitySelect />
						</div>
						{#if $typeFilter === 'all'}
							<div></div>
						{/if}

						<Separator />

						{#if $typeFilter === 'house'}
							<div class="grid gap-8">
								<BatimentsType />
								<NumbOfRoom />
								<NumbOfBat />
								<Equipment />
								<Surface />
							</div>
						{/if}
						{#if $typeFilter === 'terrains'}
							<div>3</div>
						{/if}
						<Button type="submit">Valider</Button>
					</form>
				</Dialog.Content>
			</Dialog.Root>
		</div>
	{/if}
</header>

<main class="pt-[8rem]">
	<slot />
</main>
