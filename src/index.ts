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
import { notDeepEqual } from "assert";
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
	
	var qtdeAlunos = parseInt(prompt("Digite a quantidade de alunos: "));

	var listaAlunos = [{
		nome :String,
		nota :Number
	}]
	
	for(var i = 1; i <= qtdeAlunos; i++){
		listaAlunos.push(prompt("Digite o nome do aluno: "),prompt("Digite a nota do aluno: "))
	}
	console.log(Math.max.apply(null,listaAlunos.nota));

})
