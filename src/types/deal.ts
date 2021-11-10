export enum StatusLangList {
    new= 'Новый',
    completed = 'Завершен',
    declined = 'Отменен',
    assigned_to = 'Назначен',
    started = 'В процессе'
}

export interface IOrderType {
    name: string,
    oguid: string,
}

export interface ITerminal {
    name: string,
    oguid: string,
}

export interface IAccount {
    name: string,
    oguid: string,
}

export interface ICreatedUser {
    surname: string,
    name: string,
    patronymic: string,
    oguid: string,
}

export interface IDeal {
    id: number,
    oguid: string,
    status: 'new' | "started" | 'assigned_to' | 'completed' | 'declined',
    order_type: IOrderType,
    terminal: ITerminal,
    account: IAccount,
    created_user: ICreatedUser,
    created_date: number,
}

export interface IDealResponse {
    deals: IDeal[],
    page: number,
    pages: number
    count: number,
}

export interface IDealSliceState {
    page: number,
    perPages: number,
    pages: number,
    count: number,
    deals: IDeal[],
    deal: IDeal | null,
    isLoading: boolean,
    error: IDealErrors | null
}

export interface IDealErrors {
    status: string,
    headers: string,
    message?: string
}