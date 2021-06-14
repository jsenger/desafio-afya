import ListDataDashboardService from "@modules/dashboard/services/ListDataDashboardService";
import { Request, Response } from "express";
import { container } from "tsyringe";

class DashboardController {
    public async list(request: Request, response: Response): Promise<Response> {
        const listDataDashboard = container.resolve(ListDataDashboardService);

        const dashboard = await listDataDashboard.execute();

        return response.json(dashboard);
    }
}

export default DashboardController;