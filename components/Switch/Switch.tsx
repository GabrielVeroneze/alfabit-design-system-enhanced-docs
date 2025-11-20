'use client'

import { useState } from 'react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'
import {
    Switch as HeadlessSwitch,
    SwitchProps as HeadlessSwitchProps,
} from '@headlessui/react'
import getSwitchStyles from './Switch.style'

export interface SwitchProps extends HeadlessSwitchProps {
    defaultEnable?: boolean
    variant?: 'common' | 'contract'
    disabled?: boolean
    onChange?: (enabled: boolean) => void
}

const Switch = ({
    defaultEnable: enabledByDefault,
    variant = 'common',
    disabled,
    onChange,
    ...rest
}: SwitchProps) => {
    const [enabled, setEnabled] = useState(enabledByDefault)
    const styles = getSwitchStyles({ variant, enabled, disabled })

    const toggle = () => {
        const newState = !enabled

        setEnabled(newState)

        if (onChange) {
            onChange(newState)
        }
    }

    const Icon = enabled ? CheckIcon : XMarkIcon

    return (
        <HeadlessSwitch
            checked={enabled}
            onChange={toggle}
            disabled={disabled}
            className={styles.Container}
            {...rest}
        >
            <span className="sr-only">switch toggle</span>
            {variant === 'common' && <span className={styles.Switch} />}
            {variant === 'contract' && (
                <span className={styles.Switch}>
                    <Icon className={styles.Icon} aria-disabled={disabled} />
                </span>
            )}
        </HeadlessSwitch>
    )
}

export default Switch
