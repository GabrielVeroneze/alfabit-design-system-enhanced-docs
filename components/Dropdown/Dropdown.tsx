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
            <div>
                <div>
                    <ComboboxInput
                        displayValue={(item: string) => item}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <ComboboxButton>
                        <ChevronDownIcon aria-hidden="true" />
                    </ComboboxButton>
                </div>
                <Transition
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <ComboboxOptions>
                        {filteredItem.length === 0 && query !== '' ? (
                            <div>Nenhum selecionado.</div>
                        ) : (
                            filteredItem.map((item) => (
                                <ComboboxOption key={item} value={item}>
                                    {({ selected }) => <span>{item}</span>}
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
