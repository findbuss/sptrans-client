import * as bus from "bus-promise";

bus
  .auth("65125b0e0631117d439965b509e7eb1a09646d2871e2df55795680cf04f54002")
  .then(getLines);

function getLines(auth) {
  bus
    .find({
      auth,
      type: "vehiclesPosition",
      lineId: 2560,
    })
    .then(console.log);
}
