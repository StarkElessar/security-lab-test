'use client';

import { sleep } from '@/shared/lib/sleep';
import { ModalWindow } from '@/shared/ui/modal-window';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import { UserCreateModal } from '@/features/user-create';

export default function Home() {
	return (
		<section className="py-10">
			<Container className="flex flex-col gap-4">
				<ModalWindow>
					<ModalWindow.Trigger>
						<Button>Example Default Popup</Button>
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
											await sleep(2000);
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
				<UserCreateModal />
			</Container>
		</section>
	);
}
