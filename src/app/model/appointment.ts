import { PatientInputDto } from "./patient";

export interface AppointmentInputDto {
    description: string,
    start: Date,
    end: Date,
    patientInfo: PatientInputDto
}

export interface AppointmentTimeDto {
    start: Date,
    end: Date
}

export interface AppointmentDisplayDto {
    id: number,
    start: Date,
    end: Date,
    description: string,
    patientInfo: PatientInputDto
}