import axios from 'axios';

axios.defaults.baseURL = 'https://633f0dec0dbc3309f3c3fe56.mockapi.io';
export const AddMaterialToServer = async values => {
  const response = await axios.post('/materials', values);
  return response.data;
};
export const GetMaterialToServer = async () => {
  const response = await axios.get('/materials');
  return response.data;
};
export const DelMaterialToServer = async id => {
  const response = await axios.delete(`/materials/${id}`);
  return response.data;
};
export const PutMaterialToServer = async fields => {
  const response = await axios.put(`/materials/${fields.id}`, fields);
  return response.data;
};
