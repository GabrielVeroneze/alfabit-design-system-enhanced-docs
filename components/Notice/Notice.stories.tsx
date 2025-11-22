import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Notice, { NoticeProps } from './Notice'

const meta = {
    title: 'Design System/Molecules/Notice',
    component: Notice,
    argTypes: {
        children: {
            type: 'string',
        },
        type: {
            control: 'radio',
            options: ['alert', 'success', 'error'],
        },
        message: {
            type: 'string',
        },
        onClose: {
            type: 'function',
        },
        className: {
            type: 'string',
        },
    },
} satisfies Meta<NoticeProps>

export default meta

type Story = StoryObj<typeof meta>

export const Alert: Story = {
    args: {
        type: 'alert',
        message: 'Esta é uma mensagem de alerta.',
    },
}

export const Success: Story = {
    args: {
        type: 'success',
        message: 'Ação concluída com sucesso!',
    },
}

export const Error: Story = {
    args: {
        type: 'error',
        message: 'Ocorreu um erro inesperado.',
    },
}

export const WithChildren: Story = {
    args: {
        type: 'alert',
        message: 'Mensagem com conteúdo adicional.',
        children: (
            <div className="text-gray-primary text-sm w-full">
                Este é um texto extra exibido como children.
            </div>
        ),
    },
}

export const Closable: Story = {
    args: {
        type: 'success',
        message: 'Esta notificação pode ser fechada.',
        onClose: () => {},
    },
}

export const Complete: Story = {
    args: {
        type: 'alert',
        message: 'Alerta completo com children e botão de fechar.',
        children: (
            <div className="text-gray-primary text-sm w-full">
                Informações adicionais podem aparecer aqui.
            </div>
        ),
        onClose: () => {},
    },
}
