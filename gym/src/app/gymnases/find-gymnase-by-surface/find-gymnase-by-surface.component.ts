import { Component, OnInit } from '@angular/core';
import { Gymnases } from 'src/app/model/gymnases';
import { GymnasesService } from 'src/app/services/gymnases.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-gymnase-by-surface',
  templateUrl: './find-gymnase-by-surface.component.html',
  styleUrls: ['./find-gymnase-by-surface.component.css']
})
export class FindGymnaseBySurfaceComponent implements OnInit {

  gymnases: Gymnases[] = [];
  gByName: Gymnases[];
  g: Gymnases = new Gymnases();
  surface: number;
  submitted = false;
  total: number;

  constructor(private gymnasesService: GymnasesService, private router: Router) { }

  ngOnInit() {
    this.gymnasesService.getAllGymnases().subscribe(data  => {
      this.gymnases = data;
    });
  }
  gymanseDetails(idGymnase: number) {
    this.router.navigate(['/home/gymnase-details', idGymnase]);
  }
  onSubmit(surface: number): void {
    this.gymnasesService.searchBySurface(surface).subscribe(data => {
      this.gymnases = data;
      this.total = this.gymnases.length;
      this.gymnases.forEach(gByName => {
       this.gByName = this.gymnases;
       this.submitted = true;
       console.log(gByName);
      });
    });
  }

}
