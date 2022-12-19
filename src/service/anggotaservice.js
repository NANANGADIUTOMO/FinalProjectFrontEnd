import http from  "../http-common";

class anggotaservice {
    create(data){
        return http.post("/anggotakeluarga/insert", data);
    }

    getAll(){
        return http.get("/anggotakeluarga/getAll");
    } 

    deleteAnggota(id) {
        return http.delete(`/anggotakeluarga/delete/${id}`);
    }
    
    updateAnggota(id, data) {
        return http.put(`/anggotakeluarga/update/${id}`, data);
    }

    getAnggotaById(id) {
        return http.get(`/anggotakeluarga/getAnggotaById/${id}`);
    }

    getIdKk(id_kk){
        return http.get(`/anggotakeluarga/getIdKk/${id_kk}`);
    }
}
export default new anggotaservice();