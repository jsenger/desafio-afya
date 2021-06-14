import ListMedicalRecordsService from "@modules/medicalRecords/services/ListMedicalRecordsService";
import { Request, Response } from "express";
import { container } from "tsyringe";

class MedicalRecordsController {
    public async list(request: Request, response: Response): Promise<Response> {
        const { client_id } = request.query;

        const listMedicalRecords = container.resolve(ListMedicalRecordsService);

        const medicalRecords = await listMedicalRecords.execute(client_id);

        return response.json(medicalRecords);
    }
}

export default MedicalRecordsController;