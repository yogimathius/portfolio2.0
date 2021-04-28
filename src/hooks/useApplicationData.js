import { useEffect, useReducer } from "react";
import axios from 'axios'
import reducer, { SET_APPLICATION_DATA, SET_SERVICE } from '../reducers/application'

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    businessData: []
  });

  // RETRIEVES API AND SETS IT WITH REDUCER
  useEffect(() => {
      axios.get("/api/services").then((res) => {
        const businessData = res.data;
      dispatch({
        type: SET_APPLICATION_DATA,
        businessData,
      });
    });
  }, []);

    // BOOKS INTERVIEW
    function createService(serviceId, updatedService) {
      const url = `/api/services/`;
      const promise = axios.put(url, { updatedService }).then(() => {
        dispatch({
          type: SET_SERVICE,
          id: serviceId,
          updatedService
        });
      })
      return promise;
    }
  
    // CANCELS AN INTERVIEW
    const deleteService = (appointmentId, interview) => {
      const url = `/api/appointments`;
      const promise = axios.delete(url).then((res) => {
        dispatch({
          type: SET_SERVICE,
          id: appointmentId,
          interview: null,
          days: state.days,
        });
      });
      return promise;
    };

  return {
    state, createService, deleteService
  };
}