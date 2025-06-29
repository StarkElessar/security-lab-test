import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from '@/shared/ui/form';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { handleUserCreate } from '../model/user-create.service';
import { UserCreateFormData, userCreateSchema } from '../model/user-create.schema';

interface UserCreateFormProps {
	onSubmitSuccess?: () => void;
}

export const UserCreateFormNew = ({ onSubmitSuccess }: UserCreateFormProps) => {
	const form = useForm<UserCreateFormData>({
		resolver: zodResolver(userCreateSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit = async (data: UserCreateFormData) => {
		try {
			await handleUserCreate(data);
			onSubmitSuccess?.();
		} catch (error) {
			console.error('Error creating user:', error);
		}
	};

	return (
		<Form form={form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<Form.Field
					control={form.control}
					name="name"
					render={({ field }) => (
						<Form.Item>
							<Form.Label>Name</Form.Label>
							<Form.Control>
								<Input placeholder="Enter your name" autoComplete="name" {...field} />
							</Form.Control>
							<Form.Message />
						</Form.Item>
					)}
				/>
				<Form.Field
					control={form.control}
					name="email"
					render={({ field }) => (
						<Form.Item>
							<Form.Label>Email</Form.Label>
							<Form.Control>
								<Input placeholder="Enter your email" type="email" autoComplete="email" {...field} />
							</Form.Control>
							<Form.Message />
						</Form.Item>
					)}
				/>
				<Form.Field
					control={form.control}
					name="password"
					render={({ field }) => (
						<Form.Item>
							<Form.Label>Password</Form.Label>
							<Form.Control>
								<Input placeholder="Enter your password" type="password" autoComplete="new-password" {...field} />
							</Form.Control>
							<Form.Message />
						</Form.Item>
					)}
				/>
				<Button loading={form.formState.isSubmitting} disabled={form.formState.isSubmitting} type="submit">
					Create User
				</Button>
			</form>
		</Form>
	);
};
