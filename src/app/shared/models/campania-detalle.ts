import { ParametrosCamp } from "./parametros-camp";

export class CampaniaDetalle{
    campaign_id?: string;
    name?: string; 
    description?: string; 
    creation_date?: string; 
    initial_date?: string; 
    end_date?: string; 
    user_id?: string; 
    state = 1;
    parameters?: ParametrosCamp[];
}