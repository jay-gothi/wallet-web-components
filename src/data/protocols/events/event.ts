export enum Events {
    ADDED_TO_CARD = 'added_to_cart'
}

export interface EventEmitter {
    _events: {[key in Events]?: Function[]};

    dispatch: (event: Events, data: any) => void;

    subscribe: (event: Events, callback: (data: any) => any) => void;

    unsubscribe: (event: Events) => void;
}