import { Dropdown, DropdownItem } from "flowbite-react";

const Datepicker = () => {
    return (
        <div className="text-sm text-gray-600">
            <Dropdown inline label="Last 7 days">
                <DropdownItem><strong>Sep 16, 2021 - Sep 22, 2021</strong></DropdownItem>
                <div className="my-1 mx-2 h-px bg-gray-200 dark:bg-gray-600" />
                <DropdownItem>Yesterday</DropdownItem>
                <DropdownItem>Today</DropdownItem>
                <DropdownItem>Last 7 days</DropdownItem>
                <DropdownItem>Last 30 days</DropdownItem>
                <DropdownItem>Last 90 days</DropdownItem>
                <div className="my-1 mx-2 h-px bg-gray-200 dark:bg-gray-600" />
                <DropdownItem>Custom...</DropdownItem>
            </Dropdown>
        </div>
    )
}

export default Datepicker;