import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type InputElementProps =
    | InputHTMLAttributes<HTMLInputElement>
    | TextareaHTMLAttributes<HTMLTextAreaElement>

export type InputProps = InputElementProps & {
    label?: string
    multiline?: boolean
}

const InputOrTextarea = (props: InputProps) => {
    if (props.multiline) {
        return (
            <textarea
                {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
        )
    }

    return <input {...(props as InputHTMLAttributes<HTMLInputElement>)} />
}

const Input = ({ label, className, ...rest }: InputProps) => {
    return (
        <div className="relative">
            {label && (
                <label className="absolute pt-1 pl-3 text-xs">{label}</label>
            )}
            <InputOrTextarea
                className={`
                    bg-dark text-gray-secondary rounded-md p-3
                    disabled:bg-disabled disabled:text-disabled disabled:border-2 disabled:border-disabled
                    ${label && 'pt-5'}
                    ${className}
                `}
                {...rest}
            />
        </div>
    )
}

export default Input
