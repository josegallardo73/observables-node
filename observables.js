import {Observable} from 'rxjs';

const observable = Observable.create(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
})

console.log('Just before subscribe');
observable.subscribe({
    next(x) {console.log('got value ' + x)},
    error(err) { console.log('something wrong ocurred: ' + err)},
    complete() {console.log("done")}
})