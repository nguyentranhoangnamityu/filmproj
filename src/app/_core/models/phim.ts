import { Url } from 'url';

export class Phim {
    public MaPhim: number;
    public TenPhim: string;
    public Trailer: string;
    public MoTa: string;
    public MaNhom:string;
    public NgayKhoiChieu:string;
    public DanhGia: number;
    public HinhAnh: Url;
    constructor(maPhim:number, tenPhim:string, traiLer:string,
        moTa:string, maNhom:string, ngayKhoiChieu:string, danhGia:number, hinhAnh:Url){
            this.MaPhim = maPhim;
            this.TenPhim = tenPhim;
            this.Trailer = traiLer;
            this.MoTa = moTa;
            this.MaNhom = maNhom;
            this.NgayKhoiChieu = ngayKhoiChieu;
            this.DanhGia = danhGia;
            this.HinhAnh = hinhAnh;
        } 
}