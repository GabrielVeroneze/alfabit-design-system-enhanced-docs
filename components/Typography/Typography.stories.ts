import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Typography, { TypographyProps } from './Typography'

const meta = {
    title: 'Atoms/Typography',
    component: Typography,
    argTypes: {
        className: {
            type: 'string',
        },
    },
} satisfies Meta<TypographyProps>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Texto',
    },
}

export const TextHeadingH1: Story = {
    args: {
        children: 'Texto',
        element: 'h1',
        size: 'title1',
        className: 'font-extrabold',
    },
}

export const TextHeadingH2: Story = {
    args: {
        children: 'Texto',
        element: 'h2',
        size: 'title2',
        className: 'font-extrabold',
    },
}

export const TextHeadingH3: Story = {
    args: {
        children: 'Texto',
        element: 'h3',
        size: 'title3',
        className: 'font-extrabold',
    },
}

export const TextParagraph: Story = {
    args: {
        children: 'Texto',
        element: 'p',
        size: 'md',
        className: 'text-gray-primary',
    },
}
