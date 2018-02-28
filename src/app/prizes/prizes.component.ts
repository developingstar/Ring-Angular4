
import 'rxjs/add/observable/throw';
import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Model } from '../app.models-list';
import { error } from 'util';
import { PrizesService } from '../app.services-list';
import { NavbarService } from '../app.services-list';
import { GlobalState } from '../global.state';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.scss']
})
export class PrizesComponent implements OnInit {
  public selectedTab: String = '';
  private cardNumber: string;
  private modalRef: BsModalRef;
  private isActivated: boolean;
  private config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: true
  };

  constructor(private router: Router,
    private modalService: BsModalService,
    private prizesService: PrizesService,
    private global: GlobalState,
    private navBarService: NavbarService,
  ) { }

  ngOnInit() {
    this.navBarService.show();
    if (this.global.selectedTab === '') {
      this.selectedTab = 'prizes';
    } else {
      this.selectedTab = this.global.selectedTab;
    }
    this.global.selectedTab = '';
  }

  switchTab(selectedTab: String): void {
    this.selectedTab = selectedTab;
  }

  addPrize(): void {
    this.router.navigate(['prizeadd']);
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, this.config);
  }

  openCsv(csv: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(csv, this.config);
  }

  activate(event): void {
    if (this.cardNumber && this.cardNumber.length > 0) {
      this.prizesService.activateCardNumber(this.cardNumber).subscribe((res) => {
        this.isActivated = true;
        alert('Key Card Activated.');
      }, (errors) => {
        this.isActivated = false;
        alert('There was a problem. They card was not activated.');
      });
    }
  }
}
