import classNames from 'classnames'

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    rounded?: boolean
    border?: boolean
    filledBackground?: boolean
    type?: 'primary' | 'secondary' | 'dark' | 'alert' | 'success' | 'error'
}

const boxClassMap = {
    primary: 'bg-primary',
    secondary: 'bg-quaternary',
    dark: 'bg-dark',
    alert: 'bg-blue-200 text-blue-200',
    success: 'bg-green-200 text-green-200',
    error: 'bg-red-200 text-red-200',
}

const Box = ({
    children,
    rounded = false,
    border = false,
    filledBackground = false,
    type = 'primary',
    className,
    ...rest
}: BoxProps) => {
    const classes = classNames({
        'rounded-md': rounded,
        'border border-gray-100': border,
        'bg-dark': filledBackground,
        [boxClassMap[type]]: type,
    })

    return (
        <div className={classNames(classes, className)} {...rest}>
            {children}
        </div>
    )
}

export default Box
