import { useState } from "react";
import styles from "./Dropdown.module.css";
import items from "./data";

// Dropdown component
export default function Dropdown() {
    // States
    const [listItems, setListItems] = useState(items);
    const [dropdownVisible, setDropdownVisible] = useState(true);
    const [itemSelected, setItemSelected] = useState("");

    // Handler Functions


    // Returning JSX
    return (
        <div className={styles.dropdownContainer}>
            <h1 className={styles.heading}>Should you use a dropdown ?</h1>
            <div className={styles.dropdownWrapper}>
            {/* Dropdown */}
            <div className={styles.dropdownToggle}>
                <p className={styles.toggleText}>Select</p>
                <img className={styles.icon} src={dropdownVisible ?
                    "  https://cdn-icons-png.flaticon.com/128/271/271228.png"
                    : "https://cdn-icons-png.flaticon.com/128/10728/10728680.png"}
                     alt="Icon" 
                />
            </div>
            {/* Dropdown list items */}
            {dropdownVisible ?
                <div className={styles.listItems}>
                    {listItems.map((item, i) => (
                        <div key={i} className={styles.item}>
                            {item}
                        </div>
                    ))}
                </div> : null
            }
             </div>
        </div>
    )
}