import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Reservation {
    id: bigint;
    date: string;
    name: string;
    time: string;
    notes: string;
    timestamp: bigint;
    phone: string;
    guests: bigint;
}
export interface ContactSubmission {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllReservations(): Promise<Array<Reservation>>;
    getContactSubmission(id: bigint): Promise<ContactSubmission>;
    getReservation(id: bigint): Promise<Reservation>;
    makeReservation(name: string, phone: string, date: string, time: string, guests: bigint, notes: string): Promise<{
        id: bigint;
        timestamp: bigint;
    }>;
    submitContact(name: string, phone: string, email: string, message: string): Promise<{
        id: bigint;
        timestamp: bigint;
    }>;
}
