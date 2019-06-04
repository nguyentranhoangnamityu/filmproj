import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PhimService } from 'src/app/_core/services/phim.service';
import { Phim } from 'src/app/_core/models/phim';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-them-phim',
  templateUrl: './them-phim.component.html',
  styleUrls: ['./them-phim.component.css']
})
export class ThemPhimComponent implements OnInit {
  constructor(private phimService: PhimService) { }
  @ViewChild('frmThemPhim') frmThemPhim: NgForm;
  ngOnInit() {
  }
  ThemPhim(phim: Phim) {
    phim.MaNhom = 'GP02';
    this.phimService.themPhim(phim).subscribe((data) => {
      if (typeof data === 'object') {
        Swal.fire('Thông báo!', 'Chúc mừng thêm thành công!', 'success');
      } else {
        Swal.fire('Thông báo!', data , 'warning');
      }

    });
  }

}
