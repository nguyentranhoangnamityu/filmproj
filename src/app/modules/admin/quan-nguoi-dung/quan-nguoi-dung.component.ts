import { Component, OnInit } from '@angular/core';
import { NguoiDungService } from 'src/app/_core/services/nguoi-dung.service';
import Swal from 'sweetalert2';
import {Router } from '@angular/router';
@Component({
  selector: 'app-quan-nguoi-dung',
  templateUrl: './quan-nguoi-dung.component.html',
  styleUrls: ['./quan-nguoi-dung.component.css']
})
export class QuanNguoiDungComponent implements OnInit {

  public dsNguoiDung: any[] = []; 

  constructor(private nguoiDungService: NguoiDungService, private router: Router) {}
  XoaNguoiDung(taiKhoan: any) {
    console.log(taiKhoan);
    this.nguoiDungService.xoaNguoiDung(taiKhoan).subscribe((data) => {
        if (typeof data === 'string') {
          Swal.fire('Thông báo!', 'Xóa thành công!', 'success');
          this.router.navigate(['/admin/quanlynguoidung']);
        } else {
          Swal.fire('Thông báo!', 'Đã có lỗi xảy ra, vui lòng thử lại!' , 'warning');
        }
      });
  }
  ngOnInit() {
    this.nguoiDungService.layDanhSachNguoiDung().subscribe(
      (data) => {
        console.log(data);  
        this.dsNguoiDung = data;
      }
    )
  }
}
