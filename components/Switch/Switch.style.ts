import { cva } from 'class-variance-authority'
import classNames from 'classnames'

interface SwitchStyleOptions {
    variant: 'common' | 'contract'
    enabled?: boolean
    disabled?: boolean
}

const getSwitchStyles = ({
    variant,
    enabled,
    disabled,
}: SwitchStyleOptions) => {
    const containerVariants = cva(
        classNames(
            'relative inline-flex items-center h-6 w-16 p-[4px] rounded-full outline-none cursor-pointer disabled:bg-disabled',
            { 'pointer-events-none': disabled },
        ),
        {
            variants: {
                variant: {
                    common: classNames({
                        'bg-primary': enabled,
                        'bg-primary hover:bg-hover': !enabled,
                    }),
                    contract: classNames({
                        'bg-success hover:bg-success-hover': enabled,
                        'bg-error hover:bg-error-hover': !enabled,
                    }),
                },
            },
            defaultVariants: {
                variant: 'common',
            },
        },
    )

    const containerClasses = containerVariants({ variant })

    const switchClasses = classNames(
        'inline-block bg-white h-5 w-5 p-0.5 rounded-full transform transition-transform duration-200 ease-in-out',
        enabled ? 'translate-x-6' : 'translate-x-0',
    )

    const iconClasses = classNames('aria-disabled:text-disabled', {
        'text-success': enabled && !disabled,
        'text-error': !enabled && !disabled,
        'text-disabled': disabled,
    })

    return {
        Container: containerClasses,
        Switch: switchClasses,
        Icon: iconClasses,
    }
}

export default getSwitchStyles
