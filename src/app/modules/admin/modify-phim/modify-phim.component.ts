import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim.service';
import Swal from 'sweetalert2';
import {Router } from '@angular/router';
@Component({
  selector: 'app-modify-phim',
  templateUrl: './modify-phim.component.html',
  styleUrls: ['./modify-phim.component.css']
})
export class ModifyPhimComponent implements OnInit {

  public dsPhim: any[] = []; 

  constructor(private phimService: PhimService, private router: Router) {}

  XoaPhim(maPhim: any) {
    console.log(maPhim);
    this.phimService.xoaPhim(maPhim).subscribe((data) => {
        if (typeof data === 'string') {
          Swal.fire('Thông báo!', 'Xóa thành công!', 'success');
          this.router.navigate(['/admin/chinhsuaphim']);
        } else {
          Swal.fire('Thông báo!', 'Đã có lỗi xảy ra, vui lòng thử lại!' , 'warning');
        }
      });
  }

  ngOnInit() {
    this.phimService.layDanhSachPhim().subscribe(
      (data) => {
        console.log(data);
        
        this.dsPhim = data;
      }
    )
  }
}
