import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Dropdown, { DropdownProps } from './Dropdown'

const meta = {
    title: 'Design System/Molecules/Dropdown',
    component: Dropdown,
    decorators: [
        (Story) => (
            <div style={{ padding: '3rem 0 15rem' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<DropdownProps>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        list: [],
    },
}

export const Common: Story = {
    args: {
        list: [
            'Durward Reynolds',
            'Kenton Towne',
            'Therese Wunsch',
            'Benedict Kessler',
            'Katelyn Rohan',
        ],
    },
}
