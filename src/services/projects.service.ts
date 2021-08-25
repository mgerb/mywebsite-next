import Axios from "axios";

class _ProjectsService {
  test() {
    Axios.get("/api/test").then((res) => {
      console.log(res);
    });
  }
}

export const ProjectsService = new _ProjectsService();
