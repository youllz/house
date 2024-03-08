<script lang="ts">
    import * as Select from "$lib/components/ui/select";
   
    const equipments = [
      { value: "pool", label: "Piscine" },
      { value: "garden", label: "Jardin" },
      { value: "garage", label: "Garage" },
      { value: "balcony", label: "Balcon" },
    ];
  </script>
   
  <Select.Root>
    <Select.Trigger class="w-full">
      <Select.Value placeholder="Equipement" />
    </Select.Trigger>
    <Select.Content>
      <Select.Group>
        <Select.Label>Equipments</Select.Label>
        {#each equipments as equipment}
          <Select.Item value={equipment.value} label={equipment.label}
            >{equipment.label}</Select.Item
          >
        {/each}
      </Select.Group>
    </Select.Content>
    <Select.Input name="equipment" />
  </Select.Root>