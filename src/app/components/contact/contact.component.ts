import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  
  empresaData!: any;
  sanitizedMap!: SafeHtml;

  constructor(
    private contactoSrv: EmpresaService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.contactoSrv.getEmpresa().subscribe(
      res => {
        this.empresaData = res;
        this.sanitizedMap = this.sanitizer.bypassSecurityTrustHtml(this.empresaData.mapa);
        console.log(this.empresaData);
      }
    );
  }

}
