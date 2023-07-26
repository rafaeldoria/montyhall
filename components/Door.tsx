import styles from "../styles/Door.module.css"
import DoorModel from "../model/DoorModel"
import Gift from "./Gift"

interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
    const door = props.value
    const selected = door.selected && !door.opened ? styles.selected : ''

    const changeSelection = e => props.onChange(
        door.changeSelection()
    )

    const open = e => {
        e.stopPropagation()
        props.onChange(door.open())
    }

    function renderDoor() {
        return (
            <div className={styles.door}>
                <div className={styles.number}>
                    {door.number}
                </div>
                <div 
                    className={styles.doorknob}
                    onClick={open}
                ></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={changeSelection}>
             <div className={`
                ${styles.frame} ${selected}
            `}>
                {door.closed ? 
                    renderDoor() : 
                    door.haveGift ? <Gift /> : false
                }
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}