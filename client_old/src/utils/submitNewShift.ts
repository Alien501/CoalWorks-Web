//@ts-nocheck
import axios from "axios";

const submitNewShift = async (data) => {
  console.log(data)
  try{
    const res = await axios.post(
                  '/api/data/shift/create',
                  data = {
                    ...data
                  });
    if(res.status == 201) {
      return true;
    }
  } catch(error) {
    console.error(error);
    return false;
  }
}

const editShift = async (shift_id, date, supervisorId, shiftStatus, startTime, endTime) => {
  try {
      const data = {
          date,
          supervisorId,
          status: shiftStatus,
          start_time: startTime,
          end_time: endTime,
      };
      console.log(data);

      const res = await axios.put(
          `/api/data/shift/update/${shift_id}`,
          data
      );
      console.log(res)

      if (res.status === 200 || res.status === 204) { 
          return true;
      }
  } catch (error) {
      console.error('Error updating shift:', error);
      return false;
  }
};


export {
  submitNewShift,
  editShift
}
