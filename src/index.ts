/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { getEnvironmentData, setEnvironmentData } from "worker_threads";
import { futimesSync } from "fs";
import { isAnyArrayBuffer } from "util/types";
import { create } from "domain";
import { stringify } from "querystring";
import { notDeepEqual, notEqual } from "assert";
import { normalize } from "path";
import { Console } from "inspector";
import { NOMEM } from "dns";

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
	
	let qtdeAlunos = parseInt(prompt("Digite a quantidade de alunos: "));

	let listaAlunos = [];
	
	for(var i = 1; i <= qtdeAlunos; i++){
		let nome = prompt("Digite o nome do aluno: ");
		let nota = (parseInt(prompt("Digite a nota do aluno: ")));
		let aluno = {nome,nota};
		listaAlunos.push(aluno);
	}		
	let maiorNota = listaAlunos.sort((a1,a2) =>(a1.nota < a2.nota) ? 1 : (a1.nota > a2.nota) ? -1 : 0);

	 console.log('Aluno com maior nota é: ');
	 console.log(maiorNota[0]);
	
	
})
