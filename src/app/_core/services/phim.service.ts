import { Injectable, Output,EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phim } from '../models/phim';

@Injectable({
  providedIn: 'root'
})
export class PhimService {

  constructor(private http: HttpClient) { }

  @Output() ve = new EventEmitter();

  public layDanhSachPhim(): Observable<any[]> {
    let response: any = this.http.get('http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP09');
    return response;
  }
  public themPhim(phim: Phim): Observable<any> {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyPhim/ThemPhimMoi`;
    const header: HttpHeaders = new HttpHeaders(); // Cho biết định dạng dữ liệu truyền đi
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, phim, { headers: header });
    return observable;
  }
  public xoaPhim(maPhim:number): Observable<any[]> {
    let response: any = this.http.delete(`http://svcy2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
    return response;
  }

  public layThongTinPhim(maPhim:number):Observable<any[]>{
    let response: any = this.http.get('http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim='+maPhim);
    return response;
  }

  public layThongTinPhongVe(maLichChieu:number):Observable<any[]>{
    let response: any = this.http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`);
    return response;
  }

  public DatVe(thongTinDatVe:any):Observable<any>
  {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe`;
    const header: HttpHeaders = new HttpHeaders(); // Cho biết định dạng dữ liệu truyền đi
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, thongTinDatVe, { headers: header });
    return observable;
  }
}
