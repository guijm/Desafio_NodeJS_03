/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { Console, log } from "console";
import { getEnvironmentData } from "worker_threads";
import { futimesSync } from "fs";
import { isAnyArrayBuffer } from "util/types";
import { create } from "domain";
import { stringify } from "querystring";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS

	var prompt = require('prompt-sync');
	var prompt = prompt();
	
	var qtdeAlunos = prompt("Digite a quantidade de alunos: ");
	class Alunos {
		nome:string;
		nota:number;
		constructor (nome:string, nota:number){
			this.nome = nome;
			this.nota = nota;
		}
		getNome(): string{
			return this.nome;
		}
		getNota(): number{
			return this.nota;
		}
	}
	
	var listaAlunos:{alunos: Alunos}[] = [
		{"alunos": new Alunos(prompt("Digite o nome do Aluno: "),prompt("Digite a nota do aluno: "))} 
	]
	console.log(listaAlunos);
	
});



















