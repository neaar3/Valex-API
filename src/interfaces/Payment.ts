export interface Payment {
    id: number;
    cardId: number;
    businessId: number;
    timestamp: Date;
    amount: number;
}

export interface PaymentBodyData {
    password: string,
    businessId: number;
    amount: number;
}

export type PaymentWithBusinessName = Payment & { businessName: string };

export type PaymentInsertData = Omit<Payment, 'id' | 'timestamp'>
