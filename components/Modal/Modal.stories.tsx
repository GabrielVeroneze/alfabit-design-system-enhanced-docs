import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Modal, { ModalProps } from './Modal'
import Button from '@/components/Button/Button'
import Typography from '@/components/Typography/Typography'

const meta = {
    title: 'Molecules/Modal',
    component: Modal,
    decorators: [
        (Story) => (
            <div style={{ margin: '1rem' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<ModalProps>

export default meta

type Story = StoryObj<typeof meta>

export const ModalInfo: Story = {
    args: {
        title: 'Modal Info',
        isOpen: false,
        onClose: () => {},
        children: (
            <>
                <Typography>
                    Today, every company I talk to wants to implement a design
                    system from scratch. Unfortunately, the details of a design
                    system are not explored, so often they are not used to the
                    maximum to create a useful user experience.
                </Typography>
                <Typography>
                    New designers can take a look at any of the design patterns
                    listed below to learn best practices and make informed
                    design decisions on their projects.
                </Typography>
                <div className="flex flex-col gap-3">
                    <Button>Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                </div>
            </>
        ),
    },
    render: (args: ModalProps) => {
        const [isOpen, setIsOpen] = useState(args.isOpen)

        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
                <Modal
                    {...args}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                />
            </>
        )
    },
}

export const ModalChoice: Story = {
    args: {
        title: 'Do you want to save your changes?',
        isOpen: false,
        onClose: () => {},
        children: (
            <>
                <Typography>Your changes will be lost</Typography>
                <div className="flex flex-col gap-3">
                    <Button>Save changes</Button>
                    <Button variant="secondary">Don’t save</Button>
                </div>
            </>
        ),
    },
    render: (args: ModalProps) => {
        const [isOpen, setIsOpen] = useState(args.isOpen)

        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
                <Modal
                    {...args}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                />
            </>
        )
    },
}
