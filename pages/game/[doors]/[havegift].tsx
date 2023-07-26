import styles from "../../../styles/Game.module.css"
import Door from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/doors";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Game() {
    const router = useRouter()

    const [valid, seValid] = useState(false)
    const [doors, setDoors] = useState([])

    useEffect(() => {
        const doors = +router.query.doors
        const havegift = +router.query.havegift

        const totalValidDoors = doors >= 3 && doors <= 100
        const haveValidGift = havegift >= 1 && havegift <= doors

        seValid(totalValidDoors && haveValidGift)
    }, [doors, router.query.doors, router.query.havegift])

    useEffect(() => {
        const doors = +router.query.doors
        const havegift = +router.query.havegift
        setDoors(createDoors(doors, havegift))
    }, [router?.query])

    function renderDoors() {
        return doors.map(door => {
        return <Door 
            key={door.number}
            value={door}
            onChange={newDoor => setDoors(updateDoors(doors, newDoor))}
        />
        })
    }

    return (
        <div id={styles.game}>
            <div className={styles.doors}>
                {valid ? 
                    renderDoors() :
                    <h1>Invalid values</h1>}
            </div>
            <div className={styles.buttons}>
                <Link href="/" passHref>
                    <button>Restart Game</button>
                </Link >
            </div>
        </div>
    )
}