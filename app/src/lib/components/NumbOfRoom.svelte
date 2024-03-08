<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import * as RadioGroup from '$lib/components/ui/radio-group';

	const numberOfRoom = [
		{
			value: '1',
			id: 'house-one'
		},
		{
			value: '2',
			id: 'house-two'
		},
		{
			value: '3',
			id: 'house-three'
		},
		{
			value: '4',
			id: 'house-four'
		},
		{
			value: '5',
			id: 'house-five'
		},
		{
			value: '6',
			id: 'house-six'
		},
		
	];
</script>

<div class="grid gap-4">
  <div>
    <span class="text-md">
      Chambres
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
    <RadioGroup.Input name="numberOfRoom" />
  </RadioGroup.Root>
  
</div>