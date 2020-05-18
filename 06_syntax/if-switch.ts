type taskType = string;

const task: taskType = "休憩中";

if (task == "休憩中") {
  console.log("サーフィンに行く");
} else if (task === "デスマ中") {
  console.log("睡眠時間を確保する");
} else {
  console.log("出勤する");
}

switch (task) {
  case "休憩中":
    console.log("サーフィン");
  case "デスマ中":
    console.log("睡眠時間を確保する");
}
