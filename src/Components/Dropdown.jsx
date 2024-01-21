import { useState } from "react";
import styles from "./Dropdown.module.css";
import items from "./data";

// Dropdown component
export default function Dropdown(){
    // States
    const [listItems, setListItems] = useState(items);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // Handler Functions

    // Returning JSX
    return(
        <div className={styles.dropdownContainer}>
            <h1 className={styles.heading}>Should you use a dropdown</h1>
            {/* Dropdown */}
            <div className={styles.dropdownToggle}>
                <p>Select</p>
                <img src="https://cdn-icons-png.flaticon.com/128/10728/10728680.png" alt="Icon"/>
            </div>
            {/* Dropdown list items */}
            <ul className={styles.listItems}>
                {listItems.map((item, i) => (
                    <li key={i} className={styles.item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}