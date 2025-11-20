import classNames from 'classnames'
import AvatarIcon from './AvatarIcon'
import AvatarImage from './AvatarImage'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    image?: string
    description?: string
    size?: 'xs' | 'sm' | 'md' | 'lg'
}

const avatarSizeMap = {
    xs: 'w-5 h-5',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-9 h-9',
}

const Avatar = ({
    image,
    description = '',
    size = 'sm',
    className,
    ...rest
}: AvatarProps) => {
    const avatarSizeClass = avatarSizeMap[size]

    const avatarComponent = image ? (
        <AvatarImage src={image} altDescription={description} />
    ) : (
        <AvatarIcon />
    )

    return (
        <div
            className={classNames(
                'relative flex items-center justify-center rounded-full bg-disabled text-disabled',
                avatarSizeClass,
                className,
            )}
            {...rest}
        >
            {avatarComponent}
        </div>
    )
}

export default Avatar
