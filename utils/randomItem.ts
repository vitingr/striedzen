export const randomize = async (array: []) => {
  // Copia o array original para evitar modificar o original
  const arrayEmbaralhado = array.slice();
  // Embaralha o array
  for (let i = arrayEmbaralhado.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Troca os elementos array[i] e array[j]
      [arrayEmbaralhado[i], arrayEmbaralhado[j]] = [arrayEmbaralhado[j], arrayEmbaralhado[i]];
  }
  // Retorna os primeiros 20 itens do array embaralhado
  return arrayEmbaralhado.slice(0, 20);
}