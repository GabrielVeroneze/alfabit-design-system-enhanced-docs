import { Meta, StoryObj } from '@storybook/nextjs-vite'
import TextBlock, { TextBlockProps } from './TextBlock'

const meta = {
    title: 'Design System/Molecules/TextBlock',
    component: TextBlock,
    argTypes: {
        type: {
            control: 'radio',
            options: ['primary', 'secondary', 'dark'],
        },
        title: {
            type: 'string',
        },
        children: {
            type: 'string',
        },
        className: {
            type: 'string',
        },
    },
} satisfies Meta<TextBlockProps>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: 'Título de Exemplo',
        children: 'Este é um conteúdo de exemplo para o componente TextBlock.',
    },
}

export const Primary: Story = {
    args: {
        title: 'Título de Exemplo',
        children: 'Este é um conteúdo de exemplo para o componente TextBlock.',
        type: 'primary',
    },
}

export const Secondary: Story = {
    args: {
        title: 'Título de Exemplo',
        children: 'Este é um conteúdo de exemplo para o componente TextBlock.',
        type: 'secondary',
    },
}

export const Tertiary: Story = {
    args: {
        title: 'Título de Exemplo',
        children: 'Este é um conteúdo de exemplo para o componente TextBlock.',
        type: 'dark',
    },
}
