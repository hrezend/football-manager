class AppObserver{
    public observers = [];

    constructor(){
        this.observers = [];
    }

    subscribe(observerFunction){
        this.observers.push(observerFunction);
    }

    unsubscribe(observerFunction){
        this.observers = this.observers.filter(subscriber => subscriber !== observerFunction);
    }
    
    notify(data){
        this.observers.forEach(observer => observer(data));
    }
}

export { AppObserver }