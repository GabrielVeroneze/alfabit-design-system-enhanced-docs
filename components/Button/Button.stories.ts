import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Button, { ButtonProps } from './Button'

const meta = {
    title: 'Molecules/Button',
    component: Button,
    argTypes: {
        children: {
            type: 'string',
        },
        disabled: {
            type: 'boolean',
        },
        className: {
            type: 'string',
        },
    },
} satisfies Meta<ButtonProps>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Botão',
    },
}

export const Disabled: Story = {
    args: {
        children: 'Botão',
        disabled: true,
    },
}

export const Secondary: Story = {
    args: {
        children: 'Botão',
        variant: 'secondary',
    },
}

export const SecondaryDisabled: Story = {
    args: {
        children: 'Botão',
        variant: 'secondary',
        disabled: true,
    },
}

export const Tertiary: Story = {
    args: {
        children: 'Botão',
        variant: 'tertiary',
    },
}

export const TertiaryDisabled: Story = {
    args: {
        children: 'Botão',
        variant: 'tertiary',
        disabled: true,
    },
}

export const Violet: Story = {
    args: {
        children: 'Botão',
        className: 'theme-violet',
    },
}

export const VioletSecondary: Story = {
    args: {
        children: 'Botão',
        className: 'theme-violet',
        variant: 'secondary',
    },
}

export const VioletTertiary: Story = {
    args: {
        children: 'Botão',
        className: 'theme-violet',
        variant: 'tertiary',
    },
}
