import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FiltersUserModel } from '@models/user';

import { RandomUserService } from '@service/random-user.service';

@Component({
  selector: 'app-manage-hereos',
  templateUrl: './manage-heroes.component.html',
  styleUrls: ['./manage-heroes.component.less'],
})
export class ManageHeroesComponent implements OnInit {
  filtersForm!: FormGroup;
  filtersUser: FiltersUserModel = {
    name: '',
    sex: '',
  };

  constructor(
    private fb: FormBuilder,
    public randomUserService: RandomUserService
  ) {}

  ngOnInit(): void {
    this.filtersForm = this.fb.group(this.filtersUser);
  }

  load = (pageParams: HttpParams) => {
    const { value } = this.filtersForm;
    const params = pageParams.appendAll(value);
    return this.randomUserService.getUsers(params);
  };
}
