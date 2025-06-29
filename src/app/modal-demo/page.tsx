'use client';

import React from 'react';
import {
	SimpleModalExample,
	RenderPropsModalExample,
	NoCloseButtonModalExample,
	CustomStyledModalExample,
	EventHandlerModalExample,
} from '@/shared/ui/modal-window/examples.tsx';

export default function ModalDemoPage() {
	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4">
			<div className="max-w-4xl mx-auto">
				{/* Заголовок */}
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">ModalWindow Component Demo</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Демонстрация переиспользуемого модального компонента с паттернами Compound Components и Render Props
					</p>
				</div>

				{/* Сетка примеров */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Пример 1: Простое модальное окно */}
					<div className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Простое модальное окно</h2>
						<p className="text-gray-600 mb-6">
							Базовый пример использования модального окна с заголовком, описанием и кнопками действий.
						</p>
						<SimpleModalExample />
					</div>

					{/* Пример 2: Render Props */}
					<div className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Render Props паттерн</h2>
						<p className="text-gray-600 mb-6">
							Использование Render Props для динамического изменения внешнего вида кнопки в зависимости от состояния.
						</p>
						<RenderPropsModalExample />
					</div>

					{/* Пример 3: Без кнопки закрытия */}
					<div className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Без кнопки закрытия</h2>
						<p className="text-gray-600 mb-6">
							Модальное окно без стандартной кнопки закрытия в правом верхнем углу. Закрытие только через кнопку в футере.
						</p>
						<NoCloseButtonModalExample />
					</div>

					{/* Пример 4: Кастомные стили */}
					<div className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Кастомные стили</h2>
						<p className="text-gray-600 mb-6">
							Демонстрация возможностей кастомизации с градиентами, иконками и нестандартным дизайном.
						</p>
						<CustomStyledModalExample />
					</div>

					{/* Пример 5: Обработка событий */}
					<div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Обработка событий</h2>
						<p className="text-gray-600 mb-6">
							Модальное окно с обработчиком событий открытия/закрытия. Откройте консоль разработчика (F12), чтобы увидеть
							логи.
						</p>
						<div className="flex justify-center">
							<EventHandlerModalExample />
						</div>
					</div>
				</div>

				{/* Информация о компоненте */}
				<div className="mt-12 bg-blue-50 rounded-lg p-6">
					<h3 className="text-xl font-semibold text-blue-900 mb-4">Особенности компонента</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
						<div>
							<h4 className="font-semibold mb-2">✅ Архитектура FSD</h4>
							<ul className="space-y-1">
								<li>• Полная инкапсуляция логики</li>
								<li>• Независимость от других слоев</li>
								<li>• Четкое разделение ответственности</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-2">✅ Паттерны</h4>
							<ul className="space-y-1">
								<li>• Compound Components</li>
								<li>• Render Props</li>
								<li>• Context API</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-2">✅ Технологии</h4>
							<ul className="space-y-1">
								<li>• Radix UI для доступности</li>
								<li>• shadcn/ui для стилей</li>
								<li>• TypeScript для типизации</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-2">✅ Использование</h4>
							<ul className="space-y-1">
								<li>• Не требует импорта хуков</li>
								<li>• Гибкая кастомизация</li>
								<li>• Простой API</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Ссылка на документацию */}
				<div className="mt-8 text-center">
					<p className="text-gray-600">
						Подробная документация доступна в{' '}
						<code className="bg-gray-100 px-2 py-1 rounded text-sm">src/shared/ui/modal-window/README.md</code>
					</p>
				</div>
			</div>
		</div>
	);
}
