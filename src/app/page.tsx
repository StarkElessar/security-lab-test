'use client';

import { ModalWindow } from '@/shared/ui/modal-window';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';

export default function Home() {
	return (
		<section className="py-10">
			<Container>
				<ModalWindow>
					<ModalWindow.Trigger>
						<Button>Click Me</Button>
					</ModalWindow.Trigger>
					<ModalWindow.Content showCloseIconButton={false}>
						{({ close }) => (
							<>
								<ModalWindow.Header>
									<ModalWindow.Title>Are you absolutely sure?</ModalWindow.Title>
									<ModalWindow.Description>
										This action cannot be undone. This will permanently delete your account and remove your data from
										our servers.
									</ModalWindow.Description>
								</ModalWindow.Header>
								<ModalWindow.Footer>
									<Button
										onClick={async () => {
											await new Promise((r) => setTimeout(r, 1000));
											close();
										}}
									>
										Save
									</Button>
									<Button variant="outline" onClick={close}>
										Close
									</Button>
								</ModalWindow.Footer>
							</>
						)}
					</ModalWindow.Content>
				</ModalWindow>
			</Container>
		</section>
	);
}
