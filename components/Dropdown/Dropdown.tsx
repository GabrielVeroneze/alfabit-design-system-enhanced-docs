import { useState } from 'react'
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Transition,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { dropdownStyles } from './Dropdown.style'

export interface DropdownProps {
    list: string[]
}

const Dropdown = ({ list, ...rest }: DropdownProps) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(list[0])
    const [query, setQuery] = useState<string>('')

    const filteredItem =
        query === ''
            ? list
            : list.filter((item) =>
                  item.toLowerCase().includes(query.toLowerCase()),
              )

    return (
        <Combobox value={selectedItem} onChange={setSelectedItem} {...rest}>
            <div className={dropdownStyles.container}>
                <div className={dropdownStyles.containerMenu}>
                    <ComboboxInput
                        className={dropdownStyles.input}
                        displayValue={(item: string) => item}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <ComboboxButton className={dropdownStyles.button}>
                        <ChevronDownIcon
                            className="h-5 w-5 text-primary"
                            aria-hidden="true"
                        />
                    </ComboboxButton>
                </div>
                <Transition
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <ComboboxOptions
                        className={dropdownStyles.optionsContainer}
                    >
                        {filteredItem.length === 0 && query !== '' ? (
                            <div className={dropdownStyles.noResult}>
                                Nenhum selecionado.
                            </div>
                        ) : (
                            filteredItem.map((item) => (
                                <ComboboxOption
                                    className={({ focus }) =>
                                        `${dropdownStyles.option} ${focus ? 'bg-dark text-gray-primary' : 'text-gray-900'}`
                                    }
                                    key={item}
                                    value={item}
                                >
                                    {({ selected }) => (
                                        <span
                                            className={`block truncate ${selected ? 'font-medium text-primary' : 'font-normal'}`}
                                        >
                                            {item}
                                        </span>
                                    )}
                                </ComboboxOption>
                            ))
                        )}
                    </ComboboxOptions>
                </Transition>
            </div>
        </Combobox>
    )
}

export default Dropdown
