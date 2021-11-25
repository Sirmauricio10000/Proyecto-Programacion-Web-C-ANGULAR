using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class M1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Personas",
                columns: table => new
                {
                    identificacion = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    tipoIdentificacion = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    nombre = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    correo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    telefono = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Personas", x => x.identificacion);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    userName = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    userType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    personaidentificacion = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.userName);
                    table.ForeignKey(
                        name: "FK_Usuarios_Personas_personaidentificacion",
                        column: x => x.personaidentificacion,
                        principalTable: "Personas",
                        principalColumn: "identificacion",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Peticiones",
                columns: table => new
                {
                    codigoPeticion = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    referenciaSolicitante = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    solicitanteESTuserName = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    referenciaFuncionario = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    funcionarioEncargadouserName = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    contexto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fechaPeticion = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Peticiones", x => x.codigoPeticion);
                    table.ForeignKey(
                        name: "FK_Peticiones_Usuarios_funcionarioEncargadouserName",
                        column: x => x.funcionarioEncargadouserName,
                        principalTable: "Usuarios",
                        principalColumn: "userName",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Peticiones_Usuarios_solicitanteESTuserName",
                        column: x => x.solicitanteESTuserName,
                        principalTable: "Usuarios",
                        principalColumn: "userName",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Proyectos",
                columns: table => new
                {
                    codigoProyecto = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    tituloProyecto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    referenciaInvestigadorPrincipal = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    investigadorPrincipaluserName = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    referenciaInvestigadorSecundario = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    investigadorSecundariouserName = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    grupoDeInvestigacion = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    areaProyecto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    lineaDeInvestigacion = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    tipoProyecto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    fechaPresentacion = table.Column<DateTime>(type: "datetime2", nullable: false),
                    linkProyecto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    estadoProyecto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    comentariosProyecto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    referenciaEvaluadorProyecto1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    evaluadorProyecto1userName = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    referenciaEvaluadorProyecto2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    evaluadorProyecto2userName = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Proyectos", x => x.codigoProyecto);
                    table.ForeignKey(
                        name: "FK_Proyectos_Usuarios_evaluadorProyecto1userName",
                        column: x => x.evaluadorProyecto1userName,
                        principalTable: "Usuarios",
                        principalColumn: "userName",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Proyectos_Usuarios_evaluadorProyecto2userName",
                        column: x => x.evaluadorProyecto2userName,
                        principalTable: "Usuarios",
                        principalColumn: "userName",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Proyectos_Usuarios_investigadorPrincipaluserName",
                        column: x => x.investigadorPrincipaluserName,
                        principalTable: "Usuarios",
                        principalColumn: "userName",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Proyectos_Usuarios_investigadorSecundariouserName",
                        column: x => x.investigadorSecundariouserName,
                        principalTable: "Usuarios",
                        principalColumn: "userName",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Peticiones_funcionarioEncargadouserName",
                table: "Peticiones",
                column: "funcionarioEncargadouserName");

            migrationBuilder.CreateIndex(
                name: "IX_Peticiones_solicitanteESTuserName",
                table: "Peticiones",
                column: "solicitanteESTuserName");

            migrationBuilder.CreateIndex(
                name: "IX_Proyectos_evaluadorProyecto1userName",
                table: "Proyectos",
                column: "evaluadorProyecto1userName");

            migrationBuilder.CreateIndex(
                name: "IX_Proyectos_evaluadorProyecto2userName",
                table: "Proyectos",
                column: "evaluadorProyecto2userName");

            migrationBuilder.CreateIndex(
                name: "IX_Proyectos_investigadorPrincipaluserName",
                table: "Proyectos",
                column: "investigadorPrincipaluserName");

            migrationBuilder.CreateIndex(
                name: "IX_Proyectos_investigadorSecundariouserName",
                table: "Proyectos",
                column: "investigadorSecundariouserName");

            migrationBuilder.CreateIndex(
                name: "IX_Usuarios_personaidentificacion",
                table: "Usuarios",
                column: "personaidentificacion");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Peticiones");

            migrationBuilder.DropTable(
                name: "Proyectos");

            migrationBuilder.DropTable(
                name: "Usuarios");

            migrationBuilder.DropTable(
                name: "Personas");
        }
    }
}
