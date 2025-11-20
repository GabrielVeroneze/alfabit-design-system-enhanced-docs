import { AnchorHTMLAttributes } from 'react'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode
    disabled?: boolean
}

const Link = ({ children, href, className, disabled, ...rest }: LinkProps) => {
    return (
        <a
            href={disabled ? undefined : href}
            className={`text-primary aria-disabled:text-disabled ${className}`}
            aria-disabled={disabled}
            {...rest}
        >
            {children}
        </a>
    )
}

export default Link
