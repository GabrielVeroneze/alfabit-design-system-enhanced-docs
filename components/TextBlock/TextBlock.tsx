import Box from '@/components/Box/Box'
import Typography from '@/components/Typography/Typography'

export interface TextBlockProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    title?: string
    type?: 'primary' | 'secondary' | 'dark'
}

const TextBlock = ({
    children,
    title,
    type = 'dark',
    className,
    ...rest
}: TextBlockProps) => {
    const textClass = type === 'primary' ? 'text-white' : 'text-gray-primary'

    return (
        <Box
            className={`
                flex flex-col justify-center items-start gap-1 px-8 py-6
                ${className}
            `}
            type={type}
            rounded
            {...rest}
        >
            <Typography
                className={`${textClass} font-extrabold`}
                element="h3"
                size="subtitle2"
            >
                {title}
            </Typography>
            <p className={`${textClass} text-md font-normal`}>{children}</p>
        </Box>
    )
}

export default TextBlock
