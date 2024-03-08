<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel';
	import { city } from '$lib/index';
	// export let data: PageData;
</script>

<section>
	{#each Array(20) as _}
		<div class="grid w-min gap-4">
			<Carousel.Root class="w-full max-w-xs">
				<Carousel.Content>
					{#each Array(5) as _, i (i)}
						<Carousel.Item>
							<div class="p-1">
								<Card.Root>
									<Card.Content class="flex aspect-square items-center justify-center p-8">
										<img
											src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=1730&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
											alt=""
											class="h-full w-full rounded-sm object-cover"
										/>
									</Card.Content>
								</Card.Root>
							</div>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
				<Carousel.Previous />
				<Carousel.Next />
			</Carousel.Root>
			<div>
				<p class="text-sm">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit voluptate nam vero? Facere
					quas error ipsam, .
				</p>
			</div>
		</div>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
		padding-inline: 5vw;
		gap: 1rem;
	}
</style>
