import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicSlides} from '@ionic/angular';
import { Ingredient } from 'src/app/models/ingredientes/ingredientes';
import { Hamburguer } from 'src/app/models/produtos/hamburger';
import { FavoritosService } from 'src/app/services/favoritos.service';
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/element';

@Component({
    selector: 'app-hamburger',
    templateUrl: './hamburger.page.html',
    styleUrls: ['./hamburger.page.scss'],
    standalone: false,
})

export class HamburgerPage {
    constructor(private favoritosService: FavoritosService) { }
    @ViewChild('myMenu') menu: any;

    @ViewChild('mySlider') slider: SwiperSlide;

    @ViewChild('slides', { static: true }) slides: Swiper;

    slideOpts = {
        initialSlide: 0,
        speed: 400
    };
    hamburgueres = this.favoritosService.obterHamburguer();
    prevSlide() {
        this.slides.slidePrev();
    }
    nextSlide() {
        this.slides.slideNext();
    }
    ngOnInit() {
    }

}
