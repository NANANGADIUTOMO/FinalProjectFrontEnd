import http from  "../http-common";

class kakaservice {
    create(data){
        return http.post("/kartukeluarga/insert", data);
    }

    getAll(){
        return http.get("/kartukeluarga/getAll");
    } 

    deleteKaka(id) {
        return http.delete(`/kartukeluarga/delete/${id}`);
    }
    
    updateKaka(id, data) {
        return http.put(`/kartukeluarga/update/${id}`, data);
    }

    getKartuById(id) {
        return http.get(`/kartukeluarga/getKartuById/${id}`);
      }
}
export default new kakaservice();