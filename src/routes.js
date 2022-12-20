
import homepage from './pages/homepage.vue'
import tambahKKpage from './pages/tambahKKpage.vue'
import lihatKK from './pages/lihatKK.vue'
import listkeluargapage from './pages/listkeluargapage'
import lihatanggota from './pages/lihatanggota.vue'
import tambahkeluarga from './pages/tambahkeluarga'
import registerpage from './pages/registerpage'
import loginpage from './pages/loginpage'
export default[
    {
        path : "/home",
        component : homepage,
    },
    {
        path : "/addKK",
        component : tambahKKpage
    },
    {
        path : "/detailKK/:id",
        name : 'detailKK',
        component : lihatKK
    },
    {
        path :"/detailKK/:id/",
        name : '/listanggota',
        component : listkeluargapage,
    },
    {
        path : "/detailKK/:id/listanggota",
        name : '/tambahkeluarga',
        component : tambahkeluarga,
    },
    {
        path : "/detailKK/:id/listanggota/lihatfams/:idk",
        name : 'lihatfams', 
        component : lihatanggota
    },
    {
        path : "/register",
        component : registerpage
    },
    {
        path : "/",
        component : loginpage
    }
]