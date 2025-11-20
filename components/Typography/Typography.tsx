import { cva } from 'class-variance-authority'

const textVariants = cva('text-gray-primary', {
    variants: {
        variant: {
            primary: 'text-gray-primary',
            secondary: 'text-gray-secondary',
            tertiary: 'text-gray-tertiary',
        },
        size: {
            xs: 'text-xs',
            sm: 'text-sm',
            md: 'text-md',
            lg: 'text-lg',
            xl: 'text-xl',
            title1: 'text-title-xl',
            title2: 'text-title-lg',
            title3: 'text-title-md',
            subtitle1: 'text-subtitle-lg',
            subtitle2: 'text-subtitle-md',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
    },
})

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    element?: 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    variant?: 'primary' | 'secondary' | 'tertiary'
    size?:
        | 'xs'
        | 'sm'
        | 'md'
        | 'lg'
        | 'xl'
        | 'title1'
        | 'title2'
        | 'title3'
        | 'subtitle1'
        | 'subtitle2'
}

const Typography = ({
    children,
    element = 'p',
    className,
    ...rest
}: TypographyProps) => {
    const ElementTag = element

    return (
        <ElementTag className={`${textVariants(rest)} ${className}`} {...rest}>
            {children}
        </ElementTag>
    )
}

export default Typography
