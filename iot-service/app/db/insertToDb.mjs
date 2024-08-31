import { prismaWrite } from "./prisma.mjs";

const updateSensorData = async (p , gas, vibration, temphum, sound, sos) => {
  if(!p || !gas || vibration || !temphum || !temphum || !sos || !sound) {
    console.log('Oneof the required data is missing');
    return false;
  }

  const res = await prismaWrite.sensorNode.create({
    data: {
      ...data
    }
  })

  if(res) {
    return true;
  }
  return false;
}

export {
  updateSensorData
}