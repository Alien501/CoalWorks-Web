import { prismaRead, prismaWrite } from "../db/prisma.mjs";


const createAlert = async (req, res) => {
  const { alert_type, priority, date_created, assigned_to, status } = req.body;
  if(!alert_type || !priority || !date_created || !assigned_to || !status)
    return res.status(400).send({
      message: 'Something is miising!'
    })
  const whetherAlertAlreadyExist = await prismaRead.alert.findFirst({
    where: {
      AND: [
        {alert_type: alert_type},
        {date_created: date_created}
      ]
    }
  });

  if(whetherAlertAlreadyExist)
    return res.status(400).send({ message: 'Alert notified already' });

  const newAlert = await prismaWrite.alert.create({
    data: {
      alert_type: alert_type,
      priority: priority,
      date_created: date_created,
      assigned_to: assigned_to,
      status: status
    }
  });
  return res.status(201).send({message: 'Created alert!'});
}

const getAllAlerts = async (req, res) => {
  const allAlerts = await prismaRead.alert.findMany();
  return res.status(200).send({
    message: 'Done!',
    data: allAlerts
  })
};

const getAlert = async (req, res) => {
  const { alert_id } = req.params;
  if(!alert_id)
    return res.status(400).send({message: "Missing alert id!"});
  const alert = await prismaRead.alert.findFirst({alert_id: alert_id});
  return res.status(200).send({
    message: 'Found',
    data: alert
  })
}

const updateAlertStatus = async (req, res) => {
  const { alert_id } = req.params;
  const { status } = req.body;

  if(!alert_id || !status)
    return res.status(400).send({message: "Missing alert id or status!"});

  const updateAlert = await prismaWrite.alert.update({
    where: {alert_id: alert_id},
    data: { status: status }
  })

  if(!updateAlert)
      return res.status(404).send({message: 'Missing alerts'});
  return res.status(301).send({message: 'updated!'});
}

const deleteAlert = async (req, res) => {
  const { alert_id } = req.params;
  const alertId = await prismaRead.alert.findFirst({
      where: { alertId: alert_id }
  });

  if (!alertId) {
      return res.status(404).json({ message: 'Alert not found.' });
  }

  const deleteThisAlert = await prismaWrite.alert.delete({
      where: {
          alert_id: alert_id
      }
  })
  if(deleteThisAlert)
      return res.status(200).send({ message: 'Deleted alert sucessfully!' })
  return res.status(500).send({ message: "Somthing went wrong while deleting!" })
}

export {
  createAlert,
  getAlert,
  getAllAlerts,
  updateAlertStatus,
  deleteAlert
}