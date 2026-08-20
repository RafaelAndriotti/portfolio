import './Aurora.css'

/**
 * Véu de aurora atrás do site inteiro. É uma camada `fixed`, então ela não
 * rola com o conteúdo e não repinta a cada scroll: as seções passam por cima
 * dela, e o que muda é só o transform das faixas, na GPU.
 *
 * Três faixas sobem do rodapé com cores e tempos diferentes; a cortina que as
 * envolve recorta estrias verticais, que é o que faz a luz ler como aurora e
 * não como um borrão. A opacidade final sai de `--aurora-veil` — abaixo de
 * 0.5 no escuro, menos ainda no claro, porque o site continua sendo preto
 * piano com uma cor só ao fundo.
 */
function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora-curtain">
        <span className="aurora-band band-1" />
        <span className="aurora-band band-2" />
        <span className="aurora-band band-3" />
      </div>
    </div>
  )
}

export default Aurora
