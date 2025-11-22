import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Box, { BoxProps } from './Box'

const meta = {
    title: 'Design System/Atoms/Box',
    component: Box,
    argTypes: {
        children: {
            type: 'string',
        },
        type: {
            control: 'select',
            options: [
                'primary',
                'secondary',
                'dark',
                'alert',
                'success',
                'error',
            ],
        },
        rounded: {
            type: 'boolean',
        },
        border: {
            type: 'boolean',
        },
        filledBackground: {
            type: 'boolean',
        },
        className: {
            type: 'string',
        },
    },
} satisfies Meta<BoxProps>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: '',
    },
}

export const Default: Story = {
    args: {
        children: 'Este é uma Box Padrão',
        filledBackground: true,
        type: 'primary',
    },
}

export const Alert: Story = {
    args: {
        children: 'Este é um alerta!',
        filledBackground: true,
        rounded: true,
        type: 'alert',
    },
}

export const Success: Story = {
    args: {
        children: 'Operação concluída com sucesso!',
        filledBackground: true,
        rounded: true,
        type: 'success',
    },
}

export const Error: Story = {
    args: {
        children: 'Ocorreu um erro durante a operação.',
        filledBackground: true,
        rounded: true,
        type: 'error',
    },
}
