let danhSachPhim = [
    {
        id: 1,
        tenPhim: "Mưa đỏ",
        namPhatHanh: 2025,
        tuoi: 16,
        thoiLuong: 2,
        quocGia: "Việt Nam",
        poster: "../fpt/img/640x396-muado.jpg",
        theLoai: "Phim chiếu rạp",
        trailer: "https://www.youtube.com/watch?v=BD6PoZJdt_M",
    },
    {
        id: 2,
        tenPhim: "Conan",
        namPhatHanh: 2023,
        tuoi: 10,
        thoiLuong: 1.5,
        quocGia: "Nhật Bản",
        poster: "../fpt/img/tham-tu-lung-danh-conan-cu-dam-sapphire-xanh.jpg",
        theLoai: "Phim hoạt hình",
        trailer: "https://www.youtube.com/watch?v=dz5mN-iIC4g",
    },
    {
        id: 3,
        tenPhim: "Cám",
        namPhatHanh: 2023,
        tuoi: 18,
        thoiLuong: 2,
        quocGia: "Việt Nam ",
        poster: "../fpt/img/CAM.jpg",
        theLoai: "Phim chiếu rạp",
        trailer: "https://www.youtube.com/watch?v=_8qUFEmPQbc",
    },
    {
        id: 4,
        tenPhim: "Kungfu Panda",
        namPhatHanh: 2023,
        tuoi: 10,
        thoiLuong: 1.5,
        quocGia: "Trung Quốc",
        poster: "../fpt/img/panda.jpg",
        theLoai: "Phim hoạt hình",
        trailer: "https://www.youtube.com/watch?v=_inKs4eeHiI",
    },
]
let phimHienTai = danhSachPhim[0];
let tenPhim = document.getElementById('ten');
let namPhatHanh = document.getElementById('namphathanh'); 
let tuoi = document.getElementById('gioihan_tuoi');      
let thoiLuong = document.getElementById('thoigian');
let quocGia = document.getElementById('quocgia');
let theLoai = document.getElementById('theloai');
let traiLer = document.getElementById('trailer');
let banner = document.getElementById('banner10');

function chonPhim(idPhim){
    for (let i=0;i< danhSachPhim.length;i++)
    {
        if(danhSachPhim[i].id == idPhim)
        {
            banner.src = danhSachPhim[i].poster;
            tenPhim.textContent = danhSachPhim[i].tenPhim;
            namPhatHanh.textContent = danhSachPhim[i].namPhatHanh; 
            tuoi.textContent = danhSachPhim[i].tuoi;               
            thoiLuong.textContent = danhSachPhim[i].thoiLuong;
            quocGia.textContent = danhSachPhim[i].quocGia;
            theLoai.textContent = danhSachPhim[i].theLoai;
            traiLer.href = danhSachPhim[i].trailer;
        }
    }
}

