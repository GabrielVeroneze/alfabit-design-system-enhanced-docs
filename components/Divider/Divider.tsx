import classNames from 'classnames'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
    width?: string
    height?: string
    bgColor?: 'light' | 'dark' | 'black'
}

const colorClassMap = {
    light: 'bg-light',
    dark: 'bg-dark',
    black: 'bg-black',
}

const Divider = ({
    children,
    width,
    height = 'h-[1px]',
    bgColor = 'black',
    ...rest
}: DividerProps) => {
    const colorClass = colorClassMap[bgColor]
    const barClass = classNames('flex-1', height, colorClass)

    return (
        <div
            className={classNames(width, 'flex items-center justify-center')}
            {...rest}
        >
            <div className={barClass}></div>
            {children && (
                <div className="px-3 whitespace-nowrap">{children}</div>
            )}
            <div className={barClass}></div>
        </div>
    )
}

export default Divider
