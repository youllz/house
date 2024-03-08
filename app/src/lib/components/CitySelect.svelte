<script lang="ts">
	import { allCity } from '$lib/index';
	import { Check } from 'radix-icons-svelte';
	import { CaretSort } from 'radix-icons-svelte';
	import * as Command from '$lib/components/ui/command';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { tick } from 'svelte';

	console.log(allCity);

	let open = false;
	let value = '';

	$: selectedValue =
		allCity.find((f) => f.value === value)?.label ?? 'Sélectionnez une ville . . .';

	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}
</script>


<Popover.Root bind:open let:ids>
	<Popover.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="outline"
			role="combobox"
			aria-expanded={open}
			class="w-[100%] justify-between"
		>
			{selectedValue}
			<CaretSort class="ml-2 h-4 w-4 shrink-0 opacity-50" />
		</Button>
	</Popover.Trigger>
	<Popover.Content class="h-[20rem] w-[100%] overflow-clip p-0">
		<Command.Root>
			<Command.Input placeholder="Sélectionnez une ville . . . " class="h-9" />
			<Command.Empty>Ville non trouvée</Command.Empty>
			<Command.Group>
				{#each allCity as city}
					<Command.Item
						value={city.value}
						onSelect={(currentValue) => {
							value = currentValue;
							closeAndFocusTrigger(ids.trigger);
						}}
					>
						<Check class={cn('mr-2 h-4 w-4', value !== city.value && 'text-transparent')} />
						{city.label}
					</Command.Item>
				{/each}
			</Command.Group>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
