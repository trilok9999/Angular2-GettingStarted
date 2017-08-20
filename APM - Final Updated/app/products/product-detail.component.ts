import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FlashMessagesService } from 'angular2-flash-messages';
import {notieService} from './notie.service';


@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    isLoading : boolean;
    productToBeEdited : IProduct;
    errorMessage: string;
    private sub: Subscription;
    @ViewChild('modal') updateModal : ModalComponent;
    
    constructor(private route: ActivatedRoute,
                private router: Router,
                private _productService: ProductService,
                private _notieService : notieService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => {this.product = product; this.productToBeEdited = Object.assign({}, this.product)},
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
    
    onEdit() : void {
        this.updateModal.open();
    }
    
    closeModal() : void {
        this.updateModal.close();
        this.productToBeEdited = Object.assign({}, this.product);
    }
    
    updateProduct() : void {
        this.isLoading = true;
        this._productService.updateProduct(this.productToBeEdited)
            .subscribe((response) => {
                response;
                this.isLoading = false;
                this.updateModal.close();
                this._notieService.alert({type : 1, text : 'Product has been updated'});
            })
    }
    
    onDelete() : void {
        this._notieService.confirm({
           text : 'Are you sure you want to delete this product ?',
            submitCallback : () => {
                this._productService.deleteProduct(this.productToBeEdited.productId)
                    .subscribe((response) => {response;this.onBack();})     
            }
        });
    }
}
