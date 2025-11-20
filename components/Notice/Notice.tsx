import {
    CheckCircleIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'
import Box from '@/components/Box/Box'
import Typography from '@/components/Typography/Typography'

export interface NoticeProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode
    type: 'alert' | 'success' | 'error'
    message: string
    onClose?: () => void
}

const getIcon = (type: NoticeProps['type']) => {
    switch (type) {
        case 'alert':
            return <InformationCircleIcon className="text-yellow-500 w-5 h-5" />
        case 'success':
            return <CheckCircleIcon className="text-green-500 w-5 h-5" />
        case 'error':
            return <ExclamationTriangleIcon className="text-red-500 w-5 h-5" />
    }
}

const Notice = ({
    children,
    type,
    message,
    onClose,
    className,
    ...rest
}: NoticeProps) => {
    return (
        <Box
            className={`flex items-center justify-between p-5 ${className}`}
            type={type}
            filledBackground
            rounded
            {...rest}
        >
            <div className="flex items-center gap-x-6 gap-y-3 flex-wrap">
                <div className="flex items-center gap-3">
                    {getIcon(type)}
                    <Typography
                        size="md"
                        variant="primary"
                        className={className}
                    >
                        {message}
                    </Typography>
                </div>
                {children}
            </div>
            {onClose && (
                <XMarkIcon
                    className="w-5 h-5 shrink-0 cursor-pointer text-icon"
                    onClick={onClose}
                />
            )}
        </Box>
    )
}

export default Notice
