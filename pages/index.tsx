import styles from "../styles/Form.module.css";
import Card from "../components/Card";
import Link from "next/link";
import NumberInput from "../components/NumberInput";
import { useState } from "react";

export default function Form() {
  const [totalDoors, setTotalDoors] = useState(3)
  const [doorWithGift, setDoorWithGift] = useState(1)

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c" >
          <h1>Monty Hall</h1>
        </Card>
        <Card >
          <NumberInput 
            text="Total doors" 
            value={totalDoors} 
            onChange={newTotal => setTotalDoors(newTotal)}
          />
        </Card>
      </div>
      <div>
        <Card >
          <NumberInput 
            text="What door have a gift?" 
            value={doorWithGift} 
            onChange={newDoor => setDoorWithGift(newDoor)}
          />
        </Card>
        <Card bgcolor="#28a085" >
          <Link className={styles.link} href={`/game/${totalDoors}/${doorWithGift}`} passHref>
            <h2>Start</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
