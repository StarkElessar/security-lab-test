import { sleep } from '@/shared/lib/sleep';
import { type UserCreateFormData } from './user-create.schema';

export const handleUserCreate = async (data: UserCreateFormData) => {
	// TODO: Здесь будет логика отправки данных на API (в моём случае заглушка)
	await sleep(2500);
	console.log('Creating user:', data);
	return { success: true };
};
