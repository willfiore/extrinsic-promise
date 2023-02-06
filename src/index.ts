export class ExtrinsicPromise<T> implements PromiseLike<T> {
    private resolveFunction!: (value: T) => void;
    private rejectFunction!: (reason: any) => void;

    private promise: Promise<T> = new Promise((res, rej) => {
        this.resolveFunction = res;
        this.rejectFunction = rej;
    });

    get internal(): Promise<T> {
        return this.promise;
    }

    resolve(value: T) {
        this.resolveFunction(value);
    }

    reject(reason: any) {
        this.rejectFunction(reason);
    }

    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined): PromiseLike<TResult1 | TResult2> {
        return this.promise.then(onfulfilled, onrejected);
    }
}
