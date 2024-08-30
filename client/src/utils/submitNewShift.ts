import axios from "axios";

const submitNewShift = async (data) => {
  try{
    const res = await axios.post(
                  'http://localhost:3000/api/v1/shift/create',
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

export {
  submitNewShift
}