import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
//import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanNguoiDungComponent } from './quan-nguoi-dung/quan-nguoi-dung.component';
import { Routes, RouterModule } from '@angular/router';
import { QuanLyNhanVienModule } from './quan-ly-nhan-vien/quan-ly-nhan-vien.module';
import { ModifyPhimComponent } from './modify-phim/modify-phim.component';
import { ThemPhimComponent } from './them-phim/them-phim.component';
import { FormsModule } from '@angular/forms';
import { CheckLoginGuard } from 'src/app/_core/guards/check-login.guard';
const adminRoutes:Routes = [ 
  {path:'',component:AdminTemplateComponent ,children:[
    { path:'',component:QuanNguoiDungComponent, canActivate: [CheckLoginGuard]},
   // { path:'quanlyphim',component:QuanLyPhimComponent },
    { path:'quanlynguoidung',component:QuanNguoiDungComponent },
    { path:'chinhsuaphim',component:ModifyPhimComponent},
    { path:'themphim',component:ThemPhimComponent },
    { path: 'quanlynhanvien', loadChildren: () => QuanLyNhanVienModule }
  ]
}
];

@NgModule({
  declarations: [
    AdminTemplateComponent, 
   // QuanLyPhimComponent, 
    QuanNguoiDungComponent, ModifyPhimComponent, ThemPhimComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,

  ]
})
export class AdminModule { }
