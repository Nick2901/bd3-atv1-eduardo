const database = 'BD3-NoSQL-AtlasMongoDB';

use(database);

db['"bd3-nosql-atv1'].find(); //lista todos os alunos

db['"bd3-nosql-atv1'].find({"cpf":"00000000000"}); //lista um ou mais alunos a partir de um criterio de busca

db['"bd3-nosql-atv1'].find({"cpf":"00000000000"},{"cod_aluno":0}); //lista um ou mais alunos excluindo o campo de codigo
