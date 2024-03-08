<script lang="ts">
	import type { PageData } from './$types';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';

	export let data: PageData;
</script>

<header class="px-[5vw] py-4 text-xl fixed w-full ">
  <a href="/fr-fr/">
    House
  </a>
</header>
<section class="flex h-[100dvh] flex-col items-center gap-5 p-[5vw]">
	<div>
		<h1 class="text-xl">Connectez-vous à house</h1>
	</div>
	<Card.Root class="w-[400px]">
		<!-- <Card.Header>
			<Card.Title>Card Title</Card.Title>
			<Card.Description>Card Description</Card.Description>
		</Card.Header> -->
		<Card.Content>
			<form action="" class="grid gap-2 py-3">
				<div>
					<Button class="w-full">
						<span class="mr-4">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 262"
								><path
									fill="#4285F4"
									d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
								/><path
									fill="#34A853"
									d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
								/><path
									fill="#FBBC05"
									d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
								/><path
									fill="#EB4335"
									d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
								/></svg
							>
						</span>
						avec Google
					</Button>
				</div>
				<div class="grid grid-cols-3 place-items-center py-3">
					<Separator />
					<span class="text-center text-xs">ou par email</span>
					<Separator />
				</div>
				<div class="space-y-1">
					<Label for="email">Email</Label>
					<Input type="email" name="email" id="email" />
				</div>
				<div class="space-y-1">
					<div class="flex items-center justify-between">
            <Label for="password">Confirmez mot de passe</Label>
            <Button variant="link">oublié?</Button>
          </div>
					<Input type="password" name="passwordConfirm" id="passwordConfirm" />
				</div>
				<div class="space-y-1">
					<Button class="w-full">Se connecter</Button>
				</div>
			</form>
		</Card.Content>
	</Card.Root>

	<div>
		Vous n'avez pas de compte ? <Button variant="link" href="/fr-fr/singup">S'inscrire</Button>
	</div>
</section>
