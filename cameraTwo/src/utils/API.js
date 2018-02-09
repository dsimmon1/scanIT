import axios from "axios";

export default {
update: function(query) {
    return axios.put("home/api/inventory", query);;
  },
new: function(query) {
    return axios.post("home/api/inventory", query);
  }
};
