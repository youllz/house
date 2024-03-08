<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import * as RadioGroup from '$lib/components/ui/radio-group';

	const numberOfRoom = [
		{
			value: '1',
			id: 'bathroom-one'
		},
		{
			value: '2',
			id: 'bathroom-two'
		},
		{
			value: '3',
			id: 'bathroom-three'
		},
		{
			value: '4',
			id: 'bathroom-four'
		},
		{
			value: '5',
			id: 'bathroom-five'
		},
		{
			value: '6',
			id: 'bathroom-six'
		},
		
	];
</script>

<div class="grid gap-4">
  <div>
    <span class="text-md">
      Salles de bain
    </span>
  </div>
  
  <RadioGroup.Root value="" class="grid grid-cols-7 gap-1">
    
    {#each numberOfRoom as item}
    <div class="flex items-center space-x-2">
      <RadioGroup.Item value={item.value} id={item.id} />
      <Label for={item.id}>{item.value}</Label>
    </div>
      {/each}
    <div class="flex items-center space-x-2">
      <RadioGroup.Item value="more" id="more" />
      <Label for="more">7+</Label>
    </div>
  </RadioGroup.Root>
  
</div>