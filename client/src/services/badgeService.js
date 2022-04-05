import {http, admin} from "../axios-config";

const getAll = (ids) => {
  return http.post("/badge/badges",ids);
};


const get = id => {
  return http.get(`/badges/${id}`);
};

const create = (body, headers) => {
  return http.post("/badge/create", body, headers );
};

const update = (id, data) => {
  return http.put(`/badges/${id}`, data);
};

const request = data =>{
    return admin.post("/badges", data)
}
const remove = id => {
  return http.delete(`/badges/${id}`);
};

const removeAll = () => {
  return http.delete(`/badges`);
};

// const findByTitle = title => {
//   return http.get(`/badges?title=${title}`);
// };

const BadgesService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  request
  // findByTitle
};

export default BadgesService;