import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Switch, { SwitchProps } from './Switch'

const meta = {
    title: 'Molecules/Switch',
    component: Switch,
    argTypes: {
        defaultEnable: {
            type: 'boolean',
            control: { type: 'boolean' },
        },
        disabled: {
            type: 'boolean',
            control: { type: 'boolean' },
        },
        variant: {
            control: { type: 'radio' },
        },
    },
} satisfies Meta<SwitchProps>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}

export const CommonEnabled: Story = {
    args: {
        variant: 'common',
        defaultEnable: true,
    },
}

export const CommonNotEnabled: Story = {
    args: {
        variant: 'common',
        defaultEnable: false,
    },
}

export const ContractEnabled: Story = {
    args: {
        variant: 'contract',
        defaultEnable: true,
    },
}

export const ContractNotEnabled: Story = {
    args: {
        variant: 'contract',
        defaultEnable: false,
    },
}

export const CommonEnabledDisabled: Story = {
    args: {
        variant: 'common',
        defaultEnable: true,
        disabled: true,
    },
}

export const CommonNotEnabledDisabled: Story = {
    args: {
        variant: 'common',
        defaultEnable: false,
        disabled: true,
    },
}

export const ContractEnabledDisabled: Story = {
    args: {
        variant: 'contract',
        defaultEnable: true,
        disabled: true,
    },
}

export const ContractNotEnabledDisabled: Story = {
    args: {
        variant: 'contract',
        defaultEnable: false,
        disabled: true,
    },
}
