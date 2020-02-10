import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hex-area',
  templateUrl: './hex-area.component.html',
  styleUrls: ['./hex-area.component.css']
})
export class HexAreaComponent implements OnInit {
  private lines: number;
  private columns: number;
  public hex_array=[];
  
  constructor() { }

  ngOnInit() {
    this.lines=2;
    this.columns=5;
  }

  updateColumns(n: number)
  {
    this.columns=n;
    this.updateMatrix();
  }

  updateRows(n: number)
  {
    this.lines=n;
    this.updateMatrix();
  }

  updateMatrix()
  {
    this.hex_array=[];
    for(let i=0;i<this.lines; i++)
    {
      this.hex_array.push([]);
      for(let j=0; j<this.columns; j++)
        this.hex_array[i][j]=i;
    }
  }

}
