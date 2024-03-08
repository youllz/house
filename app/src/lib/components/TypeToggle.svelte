<script lang="ts">
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import { Label } from '$lib/components/ui/label';
	import { typeFilter } from '$lib/store';
</script>

<RadioGroup.Root value="all">
	<div class="grid grid-cols-6 gap-1 py-4">
		<div class="flex items-center justify-center space-x-2">
			<RadioGroup.Item on:click={() => ($typeFilter = 'all')} value="all" id="typeIm1" />
			<Label for="typeIm1">Tous les types</Label>
		</div>
		<div class="flex items-center justify-center space-x-2">
			<RadioGroup.Item on:click={() => ($typeFilter = 'house')} value="house" id="typeIm2" />
			<Label for="typeIm2">Maisons</Label>
		</div>
		<div class="flex items-center justify-center space-x-2">
			<RadioGroup.Item on:click={() => ($typeFilter = 'apartment')} value="apartment" id="typeIm3" />
			<Label for="typeIm3">Appartements</Label>
		</div>
		<div class="flex items-center justify-center space-x-2">
			<RadioGroup.Item on:click={() => ($typeFilter = 'store')} value="store" id="typeIm-4" />
			<Label for="typeIm-4">Commerces</Label>
		</div>
		<div class="flex items-center justify-center space-x-2">
			<RadioGroup.Item on:click={() => ($typeFilter = 'office')} value="office" id="typeIm5" />
			<Label for="typeIm5">Offices</Label>
		</div>
		<div class="flex items-center justify-center space-x-2">
			<RadioGroup.Item on:click={() => ($typeFilter = 'ground')} value="ground" id="typeIm6" />
			<Label for="typeIm6">Terrains</Label>
		</div>
	</div>
	<RadioGroup.Input name="spacing" />
</RadioGroup.Root>
