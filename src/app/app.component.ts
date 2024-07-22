import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { PipeComponent } from './components/pipe/pipe.component'; 
import { TemplateformComponent } from './components/templateform/templateform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddemployeeComponent,EmployeelistComponent, DataBindingComponent, PipeComponent,TemplateformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PracticeAngularProject';
}
