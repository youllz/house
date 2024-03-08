<script lang="ts">
	import * as RadioGroup from "$lib/components/ui/radio-group";
	import { Label } from "$lib/components/ui/label";
  </script>
   
  <div class="grid gap-4">
	<div>
		<span class="text-md">Type de transaction</span>
	</div>
	<RadioGroup.Root value="all">
		<div class="grid grid-cols-3">
			<div class="flex items-center space-x-2">
			  <RadioGroup.Item value="all" id="t1" />
			  <Label for="t1">Tout type</Label>
			</div>
			<div class="flex items-center space-x-2">
			  <RadioGroup.Item value="selling" id="t2" />
			  <Label for="t2">Vente</Label>
			</div>
			<div class="flex items-center space-x-2">
			  <RadioGroup.Item value="location" id="t3" />
			  <Label for="t3">Location</Label>
			</div>
		</div>
		<RadioGroup.Input name="transaction" />
	</RadioGroup.Root>
  </div>