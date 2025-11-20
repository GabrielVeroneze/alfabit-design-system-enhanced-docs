import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Input, { InputProps } from './Input'

const meta = {
    title: 'Molecules/Input',
    component: Input,
    argTypes: {},
} satisfies Meta<InputProps>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        value: 'Input',
    },
}

export const PrimaryDisabled: Story = {
    args: {
        value: 'Input',
        disabled: true,
    },
}

export const Multiline: Story = {
    args: {
        value: 'Input',
        multiline: true,
    },
}

export const MultilineDisabled: Story = {
    args: {
        value: 'Input',
        multiline: true,
        disabled: true,
    },
}

export const PrimaryLabel: Story = {
    args: {
        value: 'Input',
        label: 'Label',
    },
}

export const PrimaryLabelDisabled: Story = {
    args: {
        value: 'Input',
        label: 'Label',
        disabled: true,
    },
}

export const MultilineLabel: Story = {
    args: {
        value: 'Input',
        multiline: true,
        label: 'Label',
    },
}

export const MultilineLabelDisabled: Story = {
    args: {
        value: 'Input',
        multiline: true,
        label: 'Label',
        disabled: true,
    },
}
