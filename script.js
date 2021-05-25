let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");


let botDoorPath ="https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath="https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath="https://content.codecademy.com/projects/chore-door/images/space.svg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const randomChoreDoorGenerator = () => {
 choreDoor = Math.floor(Math.random() * numClosedDoors);
 if(choreDoor === 0) {
  openDoor1 = botDoorPath;
  openDoor2 = beachDoorPath;
  openDoor3 = spaceDoorPath;
} else if (choreDoor === 1) { 
  openDoor2 = botDoorPath;
  openDoor1 = beachDoorPath;
  openDoor3 = spaceDoorPath;
} else { (choreDoor === 2) 
  openDoor3 = botDoorPath;
  openDoor1 = beachDoorPath;
  openDoor2 = spaceDoorPath;
}
}




door1.onclick = () => {
  doorImage1.src=openDoor1;
}
door2.onclick = () => {
  doorImage2.src=openDoor2;
}
door3.onclick = () => {
  doorImage3.src=openDoor3;
}

 randomChoreDoorGenerator();