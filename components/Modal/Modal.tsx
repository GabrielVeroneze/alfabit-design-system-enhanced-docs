import {
    Dialog,
    DialogPanel,
    DialogProps,
    DialogTitle,
    Transition,
    TransitionChild,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export interface ModalProps extends DialogProps {
    children: React.ReactNode
    title: string
    isOpen: boolean
    onClose: () => void
}

const Modal = ({ children, title, isOpen, onClose }: ModalProps) => {
    return (
        <Transition appear show={isOpen}>
            <Dialog className="relative z-10" onClose={onClose}>
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </TransitionChild>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-full p-4">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="flex flex-col w-full max-w-md p-7 gap-5 rounded-lg bg-white overflow-hidden transform transition-all">
                                <div className="flex items-center justify-between">
                                    <DialogTitle
                                        as="h3"
                                        className="text-lg font-semibold"
                                    >
                                        {title}
                                    </DialogTitle>
                                    <button onClick={onClose}>
                                        <XMarkIcon className="w-5 h-5 text-disabled" />
                                    </button>
                                </div>
                                {children}
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal
