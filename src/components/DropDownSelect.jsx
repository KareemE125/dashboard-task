import { Dropdown } from 'flowbite-react'
import React, { useState } from 'react'

export default function DropDownSelect({ list }) {

    const [selected, setSelected] = useState(list[0])

    function changeSelected(value) {
        setSelected(value)
    }
    return <div id='dropdown-menu'>
        <Dropdown
            label={selected}
            style={{ background: 'white', color: '#374256', border: 'solid 0px #374256', padding: '0px' }}
        >
            {
                list.map((value, index) => <Dropdown.Item
                    key={`${index}#${value}`}
                    onClick={() => changeSelected(value)}
                >
                    <p className='px-4'>{value}</p>
                </Dropdown.Item>)
            }
        </Dropdown>
    </div>

}

