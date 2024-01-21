// Imports
import { useState } from "react";
import styles from "./Dropdown.module.css";
import items from "./data";

// Dropdown component
export default function Dropdown() {
    // States
    const [listItems, setListItems] = useState(items);
    let [dropdownVisible, setDropdownVisible] = useState(false);
    let [itemSelected, setItemSelected] = useState("");
    let [select, setSelect] = useState("Select");

    // Handler Functions
    const itemSelectedHandler = (item) => {
        setItemSelected(item);
        setSelect(item);
        setDropdownVisible(false);
    };

    // On hover show dropdown
    const dropdownOnHover = () => {
        setDropdownVisible(true);
    };

    // On click to hide drop down
    const onClickDropdownToggle = () => {
        let visible = dropdownVisible;
        visible = !visible;
        setDropdownVisible(visible);
    }

    // Returning JSX
    return (
        // Dropdown container
        <div className={styles.dropdownContainer}>
            {/* Heading */}
            <h1 className={styles.heading}>Should you use a dropdown ?</h1>
            <div className={styles.dropdownWrapper}>
                {/* Dropdown */}
                <div
                    className={styles.dropdownToggle}
                    onMouseOver={dropdownOnHover}
                    onClick={onClickDropdownToggle}
                >
                    <p className={styles.toggleText}>{select}</p>
                    <img
                        className={styles.icon}
                        src={
                            dropdownVisible
                                ? "https://cdn-icons-png.flaticon.com/128/271/271228.png"
                                : "https://cdn-icons-png.flaticon.com/128/10728/10728680.png"
                        }
                        alt="Icon"
                    />
                </div>
                {/* Dropdown list items showing conditionally*/}
                {dropdownVisible ? (
                    <div className={styles.listItems}>
                        {listItems.map((item, i) => (
                            // Item
                            <div
                                key={i}
                                className={styles.item}
                                onClick={() => itemSelectedHandler(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>

            {/* Item selected will be shown here */}
            {itemSelected ? (
                <div className={styles.selectedItemContainer}>
                    <p className={styles.answer}>{`You've Selected: ${itemSelected}`}</p>
                </div>
            ) : null}
        </div>
    );
}
