import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Link, { LinkProps } from './Link'

const meta = {
    title: 'Molecules/Link',
    component: Link,
    argTypes: {
        children: {
            type: 'string',
        },
        href: {
            type: 'string',
        },
        disabled: {
            type: 'boolean',
        },
        className: {
            type: 'string',
        },
    },
} satisfies Meta<LinkProps>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Link',
        href: '/',
    },
}

export const Disabled: Story = {
    args: {
        children: 'Link',
        href: '/',
        disabled: true,
    },
}

export const Violet: Story = {
    args: {
        children: 'Link',
        href: '/',
        className: 'theme-violet',
    },
}
