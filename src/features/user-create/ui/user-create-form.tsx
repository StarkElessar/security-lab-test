import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { handleUserCreate } from '../model/user-create.service';
import { UserCreateFormData, userCreateSchema } from '../model/user-create.schema';

interface UserCreateFormProps {
	onSubmitSuccess?: () => void;
}

export const UserCreateForm = ({ onSubmitSuccess }: UserCreateFormProps) => {
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
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="Enter your name" autoComplete="name" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="Enter your email" type="email" autoComplete="email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input placeholder="Enter your password" type="password" autoComplete="new-password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button loading={form.formState.isSubmitting} disabled={form.formState.isSubmitting} type="submit">
					Create User
				</Button>
			</form>
		</Form>
	);
};
