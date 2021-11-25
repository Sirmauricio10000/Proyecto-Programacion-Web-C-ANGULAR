import { Usuario } from "./usuario";

export class Proyecto {
    codigoProyecto: number;
    tituloProyecto: string;
    referenciaInvestigadorPrincipal: string;
    investigadorPrincipal: Usuario;
    referenciaInvestigadorSecundario: string;
    investigadorSecundario: Usuario;
    grupoDeInvestigacion: string;
    areaProyecto: string;
    lineaDeInvestigacion: string;
    tipoProyecto: string;
    fechaPresentacion: Date;
    linkProyecto: string;
    estadoProyecto: string;
    comentariosProyecto: string;
    referenciaEvaluadorProyecto1: string;
    evaluadorProyecto1: Usuario;
    referenciaEvaluadorProyecto2: string;
    evaluadorProyecto2: Usuario;
}
