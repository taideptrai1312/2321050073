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
    },
    {
        id: 2,
        tenPhim: "Conan",
        namPhatHanh: 2023,
        tuoi: 10,
        thoiLuong: 1.5,
        quocGia: "Nhật Bản",
        poster: "../fpt/img/phim/conan.jpg",
        theLoai: "Phim hoạt hình",
    }
]
let phimHienTai = danhsachPhim[0];

let banner = document.getElementsByClassName('banner10')[0];

function chonPhim(idPhim){
    for (let i=0;i< danhSachPhim.length;i++)
    {
        if(danhSachPhim[i].id == idPhim)
        {
            banner.src = danhSachPhim[i].poster;
        }
    }
}

