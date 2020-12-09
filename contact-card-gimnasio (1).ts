import {Component} from '@angular/core';
import {NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import {EmailComposer} from '@ionic-native/email-composer';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {Http} from '@angular/http';
import {GymPostModel} from '../../models/gym.model';
import * as Constants from "../../app/CONSTANTS";
import {LoginModel} from '../../models/login.model';
import {SeguridadProvider} from "../../providers/seguridad/seguridad";
import {LoginPage} from '../login/login';


@Component({
    selector: 'contact-card-gimnasio-page',
    templateUrl: 'contact-card-gimnasio.html'
})
export class ContactCardGimnasioPage {
    loading: any;
    public gym: GymPostModel;
    list1: any = [];
    loginModel: LoginModel;
    user: any;

    constructor(
        public navCtrl: NavController,
        private emailComposer: EmailComposer,
        public inAppBrowser: InAppBrowser,
        public navParams: NavParams,
        public loadingCtrl: LoadingController,
        private toastCtrl: ToastController,
        public http: Http,
        private _sp: SeguridadProvider,
    ) {

        if (typeof navParams.get("gym") != 'undefined') {
            this.gym = navParams.get("gym");


            this.loading = this.loadingCtrl.create();
            this.loading.present();

            let url = Constants.URL_SERVICIOS + "/front/getPassesbyGymBranch/" + this.gym.id;
            this.http.get(url, {})
                .subscribe(
                    res => {
                        let data = res.json();
                        this.loading.dismiss();
                        if (data.passes.length == 0) {
                            this.presentToast('No hay pases encontradas')
                        } else {
                            console.log(JSON.stringify(data));
                            this.list1 = data.passes;
                        }
                    },
                    err => {
                        console.log("ERROR!: ", err);
                        this.loading.dismiss();
                    }
                );


            this._sp.currentUsuario.subscribe(data => {this.loginModel = data});
            let url2 = Constants.URL_SERVICIOS + "/front/getUserbyId/" + this.loginModel.userData.id;
            this.http.get(url2, {})
                .subscribe(
                    res => {
                        let data = res.json();
                        this.loading.dismiss();
                        if (data.data.length == 0) {
                            this.presentToast('No hay usuario encontrado')
                        } else {
                            console.log(JSON.stringify(data));
                            this.user = data.data[0];
                        }
                    },
                    err => {
                        console.log("ERROR!: ", err);
                        this.loading.dismiss();
                    }
                );

        }
        else {
            this.gym = null;

        }
    }

    ionViewCanEnter() {
        this._sp.currentUsuario.subscribe(data => {this.loginModel = data});

        let permiso = this._sp.isAuthenticatedUsuario(this.loginModel);
        if (permiso == true) {
            return true;
        }
        else if (permiso == false) {
            this.navCtrl.setRoot(LoginPage);
            return false;
        }
    }

    //Note: we commented this method because the Call Number plugin was unstable and causing lots of errors. If you want to use it please go: https://ionicframework.com/docs/native/call-number/
    // call(number: string){
    //   this.callNumber.callNumber(number, true)
    //   .then(() => console.log('Launched dialer!'))
    //   .catch(() => console.log('Error launching dialer'));
    // }

    sendMail(gym: GymPostModel) {
        //for more option please go here: http://ionicframework.com/docs/native/email-composer/
        let email = {
            to: gym.email,
            subject: 'Información desde EstoyFit App',
            body: "Saludos cordiales, por favor requiero información sobre su gimnasio "
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    }

    openInAppBrowser(website: string) {
        window.open(website, '_system', "location=yes");
    }

    openFacebook(facebook: string) {
        window.open(facebook, '_system', "location=yes");
    }

    //    reservar(value: any) {
    //        console.log(JSON.stringify(value));
    //        this.presentToast("Clase agendada correctamente");
    //    }


    reservar(value: any) {

        let amount: number = value.train_now_price;
        let amountWithTax: number = value.train_now_price;
        let amountWithoutTax: 0;
        let tax: number = 0;

        let txnRequest = {
            "companyType": "Persona Natural",
            "document": this.user.documento,
            "documentType": this.user.tipo_documento,
            "fullName": this.user.name,
            "address": this.user.main_street,
            "mobile": this.user.mobile,
            "email": this.user.email,
            "reference": '001',
            "description": "Pago " + value.name,
            "amount": amount,
            "amountWithTax": amountWithTax,
            "amountWithoutTax": amountWithoutTax,
            "tax": tax,
        }
        console.log("payment/create-payment-request");
        this.http.post(Constants.api_pago + "/create-payment-request?access-token=" + Constants.token, txnRequest).subscribe(res => {
            let data = res.json();

            if (data.code == 1) {
                const browser = this.inAppBrowser.create(data.url, '_blank', 'enableViewportScale=yes,closebuttoncaption=Done');
                browser.on('loadstop').subscribe((event) => {
                    console.log(event);
                    if (event.url.includes('success')) {
                        browser.close();
                    }
                    else if (event.url.includes('failure')) {
                        this.presentToast("Error en el pago, por favor revise sus datos e intente de nuevo");
                        browser.close();
                    }
                }, (err) => {
                    console.log('Error ' + err);
                    this.presentToast('Error ' + err);
                });

            } else {
                console.log("Something went wrong");
                alert('Please try again! something went wrong');
            }
        });
    }

    //    paymentStatus(orderResponse: any, payment_status: any) {
    //        this.loader = this.loadCtrl.create({
    //            content: 'Por favor espere...',
    //            dismissOnPageChange: true
    //        });
    //        this.loader.present();
    //
    //        var post_data = {
    //            "paid_amount": orderResponse.pay_online_amount,
    //            "trip_id": orderResponse.trip_id,
    //            "user_name": this.username,
    //            "taxi_type": orderResponse.taxi_type,
    //            "mobileno": this.userphone,
    //            'amount': orderResponse.amount,
    //            "payment_status": payment_status,
    //        }
    //        //console.log(post_data);
    //        console.log("web_service/book_cab")
    //
    //        this.http.post(this.common.URL_CHANGE_BOOKING_PAYMENT_STATUS, post_data)
    //            .subscribe(
    //                res => {
    //                    let data = res.json();
    //                    console.log(data);
    //                    this.loader.dismiss();
    //                    if (data.success) {
    //                        this.navCtrl.setRoot(MytripPage);
    //                    }
    //                    else {
    //                        alert(data.message);
    //                    }
    //                },
    //                err => {
    //                    console.log("ERROR!: ", err);
    //                    this.loader.dismiss();
    //                }
    //            );
    //    }


    presentToast(mensaje: string) {
        let toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'top'
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }

}
