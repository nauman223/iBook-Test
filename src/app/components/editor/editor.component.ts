import { Component, OnInit } from '@angular/core';
import { SelectionChange } from 'ngx-quill';
import { ApiService } from 'src/app/services/api.service';
import { DataRes } from './editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  quillConfig = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['clean'],                                         // remove formatting button
        ['link'],
        ['source'],
      ]
    },
  }
  response: DataRes = new DataRes();
  error:string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { 
    // this.response = {
    //   word: "uneventful",
    //   examples: ["an uneventful life", "the voyage was pleasant and uneventful", "recovery was uneventful"]
    // }
  }

  onSelectionHandler = (eve: SelectionChange) => {
    // tslint:disable-next-line:no-console
    this.apiService.getWrordDetails(window.getSelection().toString()).subscribe(res => {
      console.log('res', res);
      this.response = res.data;
    }, error => {
      console.log('oops', error.error.message);
      this.error = error.error.message;
    })


  }

}
