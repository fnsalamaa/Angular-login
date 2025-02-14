import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  constructor(private service: AuthService, private router:ActivatedRoute) { }

  errormsg: any;
  successmsg:any;
  getparamid: any;

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if(this.getparamid){
      this.service.getSingleData(this.getparamid).subscribe((res)=>{
        console.log(res, 'res==>');
        this.userForm.patchValue({
          username:res.data[0].username,
          email:res.data[0].email,
          role:res.data[0].role,
        });
      });
    };
  }

  userForm = new FormGroup({
    'username': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'role': new FormControl('', Validators.required),
    'password': new FormControl(
      ''
    )
  });

  //Create new user
  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.userForm.value['password'] = "123"
      this.service.createData(this.userForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.userForm.reset();
        this.successmsg = res.message;
      });
    } else {
      this.errormsg = 'all fields are required!!';
    }
  }

  //Update Data
  userUpdate() {
    console.log(this.userForm.value, 'updatedform');

    if (this.userForm.valid) {
        this.service.updateData(this.userForm.value,this.getparamid).subscribe((res) => {
            console.log(res, 'resupdated');
            this.successmsg=res.message;
        });
    } else {
        this.errormsg = 'all field is required';
    }
}


}