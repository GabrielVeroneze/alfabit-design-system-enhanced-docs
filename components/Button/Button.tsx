import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    variant?: 'primary' | 'secondary' | 'tertiary'
}

const getVariantClasses = (
    variant: ButtonProps['variant'],
    disabled: ButtonProps['disabled'],
) => {
    switch (variant) {
        case 'primary':
            return disabled
                ? 'bg-disabled text-disabled'
                : 'bg-primary text-white'
        case 'secondary':
            return disabled
                ? 'bg-disabled text-disabled'
                : 'bg-quaternary text-primary'
        case 'tertiary':
            return disabled ? 'text-disabled' : 'text-primary'
        default:
            return ''
    }
}

const Button = ({
    variant = 'primary',
    children,
    className,
    disabled,
    ...rest
}: ButtonProps) => {
    const base = 'rounded-md px-6 py-2'

    return (
        <button
            className={`${base} ${getVariantClasses(variant, disabled)} ${className}`}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
