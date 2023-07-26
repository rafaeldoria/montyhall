import DoorModel from "../model/DoorModel";

export function createDoors(total: number, withGift: number): DoorModel[] {
    return Array.from({length: total}, (element, i) => {
        const number = i + 1
        const haveGift = number === withGift
        return new DoorModel(number, haveGift)
    })
}

export function updateDoors(doors: DoorModel[], changedDoor: DoorModel): DoorModel[] {
    return doors.map(currentDoor => {
        const modified = currentDoor.number === changedDoor.number

        if(modified){
            return changedDoor
        }else{
            return changedDoor.opened ? currentDoor : currentDoor.deselect()
        }
    })
}