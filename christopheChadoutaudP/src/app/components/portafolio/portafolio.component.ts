import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

    constructor(){
        const btn = document.querySelector('btn');
        const videoContent = document.querySelector('videoContent');
        const close = document.querySelector('close');

        btn?.addEventListener('click', () =>{
            videoContent?.classList.add('show');
        })

        close?.addEventListener('click', () =>{
            videoContent?.classList.add('show');
        })


    }





}
