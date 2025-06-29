import { Button } from '@/shared/ui/button';
import { ModalWindow } from '@/shared/ui/modal-window';
import { UserCreateForm } from './user-create-form';

export const UserCreateModal = () => {
	return (
		<ModalWindow>
			<ModalWindow.Trigger>
				<Button>Create New User</Button>
			</ModalWindow.Trigger>
			<ModalWindow.Content>
				{({ close }) => (
					<>
						<ModalWindow.Header>
							<ModalWindow.Title>Create User</ModalWindow.Title>
							<ModalWindow.Description>Fill in the form below to create a new user account.</ModalWindow.Description>
						</ModalWindow.Header>
						<UserCreateForm onSubmitSuccess={close} />
					</>
				)}
			</ModalWindow.Content>
		</ModalWindow>
	);
};
