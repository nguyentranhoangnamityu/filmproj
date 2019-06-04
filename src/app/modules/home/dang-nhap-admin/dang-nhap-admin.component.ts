import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router } from '@angular/router';
@Component({
  selector: 'app-dang-nhap-admin',
  templateUrl: './dang-nhap-admin.component.html',
  styleUrls: ['./dang-nhap-admin.component.css']
})
export class DangNhapAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  

  DangNhapAdmin(){
    if (document.getElementById("admin").value == "admin" && document.getElementById("passwordAdmin").value == "123"){
      console.log("ok");
      const sAdminLogin: string = JSON.stringify(document.getElementById("admin").value);
      localStorage.setItem('admin', sAdminLogin);
      Swal.fire('Thông báo!', 'Đăng nhập thành công!', 'success');
      this.router.navigate(['/admin']);
    }
    else {
      Swal.fire('Thông báo!', 'Sai tài khoản hoặc mật khẩu!' , 'warning');
    }
  }
}
